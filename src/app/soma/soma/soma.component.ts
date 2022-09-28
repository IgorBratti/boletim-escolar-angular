import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  private res : number = 0;

  constructor(private SomaService: SomaService) { }

  ngOnInit(): void {
  }

  somar(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;

    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.SomaService.somar(n1, n2);
  }
  get resultado(): string {
    return this.res.toString();
  }

}
