import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-factorization',
  templateUrl: './prime-factorization.component.html',
  styleUrls: ['../program.component.css', './prime-factorization.component.css']
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

  private formatPrimeFactors(factors: number[]): string[] {
    const factorCount: { [key: number]: number } = {};

    // 素因数ごとの出現回数をカウント
    factors.forEach(factor => {
        if (factorCount[factor]) {
            factorCount[factor]++;
        } else {
            factorCount[factor] = 1;
        }
    });

    // 出現回数に基づいてフォーマット
    return Object.entries(factorCount).map(([factor, count]) => {
        return count > 1 ? `${factor}^${count}` : factor;
    });
}

  public calc() {
    const integer = parseInt((<HTMLInputElement>document.getElementById("integer")).value);
    const factors = this.getPrimeFactorsOf(integer);
    const formatted = this.formatPrimeFactors(factors);
    document.getElementById("result")!.innerHTML = "$" + integer.toString() + " = " + (formatted.join(" × ") + "$");
    (window as any).MathJax.typeset();
  }

  public randomize(): void {
    (<HTMLInputElement>document.getElementById("integer")).value = Math.floor(Math.random() * 10000).toString();
  }

}
