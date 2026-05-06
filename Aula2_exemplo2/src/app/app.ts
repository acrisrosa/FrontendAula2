import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from "./tags-h/tags-h";
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagFormatacao } from "./tag-formatacao/tag-formatacao";
import { TagLista } from "./tag-lista/tag-lista";
import { TagLinks } from "./tag-links/tag-links";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagParagrafo, TagFormatacao, TagLista, TagLinks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula2_exemplo2');
}
