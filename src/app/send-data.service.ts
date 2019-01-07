import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private  value1:string=' Sahil';
  public  value=[
            {
           Summary:"Article About newspapar Templete",
         date:'2-1-2019', 
         Editor:'Shiv Kumar Btalvi',
         Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
          Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
          NewsPic:'assets/flower.jpg'
         },
         {
           Summary:"Article About newspapar Templete",
           date:'2-1-2019', 
           Editor:'Shiv Kumar Btalvi',
           Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
            Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
            NewsPic:'assets/news1.jpg'
           },
           {
             Summary:"Article About newspapar Templete",
             date:'2-1-2019', 
             Editor:'Shiv Kumar Btalvi',
             Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
              Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
              NewsPic:'assets/news1.jpg'
             }];
// public event :EventEmitter<any>=new EventEmitter<any>();
// public event :EventEmitter<any>=new EventEmitter<any>();

  // private parentMessageSource= new Subject<string>();
  // parentmesage$=this.parentMessageSource.asObservable();
   public valueChange: BehaviorSubject<any>=new BehaviorSubject<any>('');
  constructor() { }

    getValue(){
      console.log(this.value);
return this.value;
   }
    getData():Observable<any>{
      return of (this.value);
    }

    // setValue(value){
    //   this.value1=value;
    //   this.valueChange.next(this.value1)
    // }



//     sendDatToComponent(){
//       return[
//         {
//        Summary:"Article About newspapar Templete",
//      date:'2-1-2019', 
//      Editor:'Shiv Kumar Btalvi',
//      Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
//       Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
//       NewsPic:'assets/news1.jpg'
//      },
//      {
//        Summary:"Article About newspapar Templete",
//        date:'2-1-2019', 
//        Editor:'Shiv Kumar Btalvi',
//        Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
//         Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
//         NewsPic:'assets/news1.jpg'
//        },
//        {
//          Summary:"Article About newspapar Templete",
//          date:'2-1-2019', 
//          Editor:'Shiv Kumar Btalvi',
//          Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
//           Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
//           NewsPic:'assets/news2.jpg'
//          },
//          {
//            Summary:"Article About newspapar Templete",
//            date:'2-1-2019', 
//            Editor:'Shiv Kumar Btalvi',
//            Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
//             Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
//             NewsPic:'assets/news1.jpg'
//            },
//            {
//              Summary:"Article About newspapar Templete",
//              date:'2-1-2019', 
//              Editor:'Shiv Kumar Btalvi',
//              Title:'NEWSPAPER TEMPLATES FOR STUDENTS',
//               Description:'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
//               NewsPic:'assets/news2.jpg'
//              }
   
//    ];
   
// }
}