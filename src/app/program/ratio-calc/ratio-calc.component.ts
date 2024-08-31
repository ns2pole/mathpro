import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Fraction {
  denominator: number | null;
  numerator: number | null;
}

@Component({
  selector: 'app-ratio-calc',
  templateUrl: './ratio-calc.component.html',
  styleUrls: [ '../program.component.css','./ratio-calc.component.css' ],
})
export class RatioCalcComponent {
  private apiUrl = 'https://promath.jp:8081/getAddedRatio';
  // private apiUrl = 'http://localhost:8080/getAddedRatio';
  constructor(private http: HttpClient) {}
  fraction1Numerator: number | null = null; // 初期値を null に設定
  fraction1Denominator: number | null = null; // 初期値を null に設定
  fraction2Numerator: number | null = null; // 初期値を null に設定
  fraction2Denominator: number | null = null; // 初期値を null に設定
  resultNumerator: number | null = null; // 初期値を null に設定
  resultDenominator: number | null = null; // 初期値を null に設定

  sendFractions(fraction1: Fraction, fraction2: Fraction): Observable<any> {
    const payload = {
      fraction1: fraction1,
      fraction2: fraction2
    };
    return this.http.post(this.apiUrl, payload, { responseType: 'text' });
  }

  public calc(): void {
    const fraction1 = { denominator: this.fraction1Denominator, numerator: this.fraction1Numerator};
    const fraction2 = { denominator: this.fraction2Denominator, numerator: this.fraction2Numerator };
    this.sendFractions(fraction1, fraction2).subscribe(response => {
      [this.resultNumerator, this.resultDenominator] = response.split('/');
    }, error => {
      alert("errorが発生しました");
      console.log(error);
    });
  }

}
