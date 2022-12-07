import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Class } from 'src/app/Classes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('span') span!: ElementRef;

  @Input()
  openModal: boolean = false;

  @Input()
  classData!: Class | undefined;

  @Output()
  returnClassDetails = new EventEmitter<boolean>();

  @Output()
  purchaseClass = new EventEmitter<string>();

  paymentRequest!: google.payments.api.PaymentDataRequest;

  constructor() { }

  ngOnInit(): void {
    this.paymentRequest ={
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId'
            }
          }
        }
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant'
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '100.00',
        currencyCode: 'USD',
        countryCode: 'US'
      }
    }
  }

  SendDataToParentForTransactionProcessing() {
    this.purchaseClass.emit(this.classData?._id);
  }

  close() {
    this.openModal = false;
    this.returnClassDetails.emit(true);
  }
}