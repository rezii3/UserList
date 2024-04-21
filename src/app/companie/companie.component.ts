import { Component } from '@angular/core';
import { ICompany } from '../interfaces/users.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-companie',
  templateUrl: './companie.component.html',
  styleUrl: './companie.component.css'
})
export class CompanieComponent {


companys:ICompany[]=[
  {
    companyName: "D'Amore Group",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Garden",
    companyEmployeCount: 16509,
    companyLocation: "2381 Cormier Ridge"
  },
  {
    companyName: "Mills, Williamson and Howe",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Books",
    companyEmployeCount: 60004,
    companyLocation: "4661 Mary Valley"
  },
  {
    companyName: "Bashirian, Rippin and Simonis",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Grocery",
    companyEmployeCount: 57647,
    companyLocation: "5511 Hudson River"
  },
  {
    companyName: "Steuber - Farrell",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Movies",
    companyEmployeCount: 27402,
    companyLocation: "852 Daugherty Courts"
  },
  {
    companyName: "Gottlieb, Emard and Kuhn",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Health",
    companyEmployeCount: 45995,
    companyLocation: "74347 Kerluke Meadow"
  },
  {
    companyName: "White, Stamm and Considine",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Outdoors",
    companyEmployeCount: 73006,
    companyLocation: "9246 Feeney Summit"
  },
  {
    companyName: "McGlynn and Sons",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Garden",
    companyEmployeCount: 90142,
    companyLocation: "590 Quigley Haven"
  },
  {
    companyName: "Crona - Kulas",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Computers",
    companyEmployeCount: 80031,
    companyLocation: "400 Callie Circle"
  },
  {
    companyName: "Mitchell - Davis",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Games",
    companyEmployeCount: 94957,
    companyLocation: "7422 Hane Green"
  },
  {
    companyName: "Herzog Group",
    companyImage: "https://loremflickr.com/640/480/business",
    companyCategory: "Automotive",
    companyEmployeCount: 81731,
    companyLocation: "7944 Rahsaan Coves"
  }
]
}
