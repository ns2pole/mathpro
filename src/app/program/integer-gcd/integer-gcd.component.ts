import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-integer-gcd',
  templateUrl: './integer-gcd.component.html',
  styleUrls: [ '../program.component.css','./integer-gcd.component.css' ],
})
export class IntegerGcdComponent {
  private apiUrl = 'https://promath.jp:8091/getGCD';
  // private apiUrl = 'http://localhost:8090/getGCD';
  constructor(private http: HttpClient) {}
  int1: number | null = null; // 初期値を null に設定
  int2: number | null = null; // 初期値を null に設定
  result: number | null = null; // 初期値を null に設定

  send(int1: number | null , int2: number | null): Observable<any> {
    return this.http.post<any>(this.apiUrl, { int1: int1, int2: int2 });
  }

  public calc(): void {
    const int1: number | null = Number(this.int1);
    const int2: number | null = Number(this.int2);
      this.send(int1, int2).subscribe(response => {
      this.result = response;
    }, error => {
      alert("errorが発生しました");
      console.log(error);
    });
  }

}
