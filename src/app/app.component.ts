import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  image = 'src/assets/bg-2.jpg'

  text: string | undefined;  
  inputForm !: FormGroup
  title = 'employeelist';
  name: any
  countries: any[] | undefined;
  translateValue :any= {}
  selectedCountry:any= ''
  cleanText = '';
  contentLoaded: boolean = false

  @ViewChild('editor', {static: false}) editor: any;

  constructor(private builder: FormBuilder){}


  ngOnInit(){
    
    this.countries = [
      { name: 'India', code: 'in', lang: 'hi' },
      { name: 'English', code: 'us', lang: 'en' },
      { name: 'Arabic', code: 'ar', lang: 'ar' },
      { name: 'Bengali', code: 'bn', lang: 'bn' },
      { name: 'Kannada', code: 'kn', lang: 'kn' },
      { name: 'Marathi', code: 'mr', lang: 'mr' },
      { name: 'Malayalam', code: 'ml', lang: 'ml' },
      { name: 'Urdu', code: 'ur', lang: 'ur' },
      { name: 'Japan', code: 'jp' },
      { name: 'Spain', code: 'es' },
  ];
  
  
}
timer(){
  setTimeout(() => {
    this.contentLoaded = true;
  }, 600);
  this.contentLoaded=false
}
submit(){
  console.log('Button Called');
  
  console.log('Submited Name: ',this.name,'Submitted country: ',this.selectedCountry.lang);
  
}

cleanString() {
  this.cleanText = this.editor.el.nativeElement.innerText;
}


answerMe(){
  
  console.log("This is the text: ", this.cleanText);
  

}
    

    // ngOnInit() {
    //     this.countries = [
    //         { name: 'Australia', code: 'AU' },
    //         { name: 'Brazil', code: 'BR' },
    //         { name: 'China', code: 'CN' },
    //         { name: 'Egypt', code: 'EG' },
    //         { name: 'France', code: 'FR' },
    //         { name: 'Germany', code: 'DE' },
    //         { name: 'India', code: 'IN' },
    //         { name: 'Japan', code: 'JP' },
    //         { name: 'Spain', code: 'ES' },
    //         { name: 'United States', code: 'US' }
    //     ];
    // }
}