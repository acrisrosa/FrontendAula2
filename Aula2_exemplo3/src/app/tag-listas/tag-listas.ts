import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {

  minhaString: string = 'Paulo';

  minhaLista: string[] =['Tony', 'data_pipe_default_option', 'samata', 'leonardo', 'priscila', 'sara','1','false', this.minhaString,];
  
  minhaListaJS: any[] =["Tony", "data_pipe_default_option", "samata", "leonardo", "priscila", "sara",1,false];
 
  //minhaListaJSNumer: number[] =["Tony", "data_pipe_default_option", "samata", "leonardo", "priscila", "sara","1","false"];
}
