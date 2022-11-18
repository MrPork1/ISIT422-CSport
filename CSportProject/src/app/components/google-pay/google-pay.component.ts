 import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-google-pay',
   templateUrl: './google-pay.component.html',
   styleUrls: ['./google-pay.component.css']
 })
export  class GooglePayComponent  {


     title = 'GooglePay';
     onLoadPaymentData (data:any) {
      console.log(data)
     }
//     paymentRequest={
//       apiVersion: 2,
//       apiVersionMinor: 0,
//       allowedPaymentMethods: [
//         {
//           type: "CARD",
//           parameters: {
//             allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//             allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
  
//           },
//           tokenizationSpecification: {
//             type: 'PAYMENT_GATEWAY',
//             parameters: {
//               gateway: 'example',
//               gatewayMerchantId: 'exampleGatewayMerchantId'
//             }
//         }
//   }
//   ],
  
//           merchantInfo: {
//           merchantId: '12345678901234567890',
//           merchantName: 'Demo Merchant'
//         },
//         transactionInfo: {
//           totalPriceStatus: 'FINAL',
//           totalPriceLabel: 'Total',
//           totalPrice: '100.00',
//           currencyCode: 'USD',
//           countryCode: 'US'
//         }
//       };
//       onLoadPatmentData(event: any){
//         console.log("load payment data", event.detail);
//       }
     }
  