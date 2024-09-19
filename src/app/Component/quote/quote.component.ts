import { AfterViewInit, Component } from '@angular/core';
import { QuoteProps, QuoteService } from '../../services/quote/quote.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent implements AfterViewInit{

   AuthorQuote$ : Observable<QuoteProps> = of();

    constructor(private quoteHttp : QuoteService){

    }


    ngAfterViewInit(): void {

    }

    generateQuote(){
      this.quoteHttp.quote().subscribe(
        (res)=> {
          console.log(res)
        },
        (err)=> {},
        ()=> {}
      )
    }


}
