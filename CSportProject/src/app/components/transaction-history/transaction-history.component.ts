import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ClassesService } from 'src/app/services/classes.service';
import { Class } from 'src/app/Classes';
import { first } from 'rxjs';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  tempTransactions: Transaction[] = [];
  tempClasses: Class[] = [];
  newList: NewList[] = [];
  singleShow!: NewList;
  emptyList: NewList[] = [];
  user!: User;

  htmlstring!: string;

  columnsToDisplay = ['id', 'name', 'price', 'status'];

  constructor(
    public authService: AuthService,
    public userService: UserService,
    public transactionService: PaymentService,
    public classService: ClassesService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.authService.userData.UID).pipe(first()).subscribe(data => this.getUser(data[0]));
  }

  getUser(user: User) {
    this.user = user;
    this.transactionService.getAllTransactions().pipe(first()).subscribe(data => this.getTransaction(data));
  }


  getTransaction(transactions: Transaction[]) {
    this.tempTransactions = transactions.filter(element => this.user.TransactionHistory.includes(element._id!));
    this.getClasses()
  }

  getClasses() {
    this.classService.getAllClasses().subscribe(classList => this.displayClasses(classList))
  }

  displayClasses(classList: Class[]) {
    if (sessionStorage.getItem("transactionId")) {
      var transactionCID = sessionStorage.getItem("transactionId")!;
      var classs = classList.find(x => x._id === transactionCID)!;
      this.tempTransactions.forEach(transaction => {
        if (transaction.CID === transactionCID) {
          const thing = {
            Name: classs.Name,
            Price: classs.Price,
            Status: transaction.PStatus,
            ID: transaction._id,
            CID: classs.CID
          } as NewList
          this.newList.push(thing);
        }
      });
    } else {
      classList.forEach(classs => {
        this.tempTransactions.forEach(transaction => {
          if (transaction.CID === classs._id) {
            this.tempClasses.push(classs);
            const thing = {
              Name: classs.Name,
              Price: classs.Price,
              Status: transaction.PStatus,
              ID: transaction._id,
              CID: classs.CID
            } as NewList
            this.newList.push(thing);
          }
        })
      });
    }
  }

  showAllTransactions() {
    sessionStorage.removeItem("transactionId");
    this.getClasses();
  }
}

interface NewList {
  Name: string;
  Price: number;
  Status: string;
  ID: string;
  CID: string;
}