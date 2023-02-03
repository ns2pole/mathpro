import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-factorization',
  templateUrl: './prime-factorization.component.html',
  styleUrls: ['../top.component.css']
})
export class PrimeFactorizationComponent {
  public getPrimeFactorsOf(n: number): number[] {
    const factors: number[] = [];
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  public calc() {
    const integer = parseInt((<HTMLInputElement>document.getElementById("integer")).value);
    const factors = this.getPrimeFactorsOf(integer);
    document.getElementById("result")!.innerHTML = integer.toString() + " = " + (factors.join(" × "));
  }

  public randomize(): void {
    (<HTMLInputElement>document.getElementById("integer")).value = Math.floor(Math.random() * 10000).toString();
  }

}
