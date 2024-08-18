import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Ratio {
  denominator: number | null;
  numerator: number | null;
}

@Component({
  selector: 'app-recurring-decimal',
  templateUrl: './recurring-decimal.component.html',
  styleUrls: [ '../program.component.css','./recurring-decimal.component.css' ],
})
export class RecurringDecimalComponent {
  private apiUrl = 'https://promath.jp:8081/getRecurringDecimal';
  constructor(private http: HttpClient) {}
  ratioNumerator: number | null = null; // 初期値を null に設定
  ratioDenominator: number | null = null; // 初期値を null に設定
  recurringDecimal : string = "";
  sendRatio(deno: number | null, nume :number | null): Observable<any> {
    const payload = {
      denominator : deno,
      numerator : nume
    };
    return this.http.post(this.apiUrl, payload, { responseType: 'text' });
  }

  public calc(): void {
    this.sendRatio(this.ratioDenominator, this.ratioNumerator).subscribe(response => {
      this.recurringDecimal = "循環節は  " + response + "です。";
    }, error => {
      alert("errorが発生しました");
      console.log(error);
    });
  }

}
