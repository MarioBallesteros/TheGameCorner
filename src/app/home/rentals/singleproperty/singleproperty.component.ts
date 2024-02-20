import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../../service/auth.service";
import {EnquiryService} from "../../../service/enquiry.service";


@Component({
  selector: 'app-singleproperty',
  templateUrl: './singleproperty.component.html',
  styleUrls: ['./singleproperty.component.css']
})
export class SinglepropertyComponent implements OnInit {
  @Input('property') property: Property | undefined // Usa la interfaz como tipo
  image: any = 'https://via.placeholder.com/150'; // URL de imagen de ejemplo
  showMessage = false;
  showForm = false;

  constructor(public authService: AuthService, public enquiryService: EnquiryService) { }

  ngOnInit() {
    console.log(this.property);
  }

  sendEnquiry(enquiryForm: NgForm){
    // Implementación de sendEnquiry
  }
}

export interface Property {
  title: string;
  id: string;
}
