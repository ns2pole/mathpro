import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) { }
  result = '';  // 最終的に生成されるメッセージ

  send(name : string) {
    // ［1］フォームの値を取得
    this.http.get('/mail.php', {
      responseType: 'text',
      // ［3］URLにクエリパラメーターを指定
      params: new HttpParams().set('name', name),
    }).subscribe((res: any) => {
      // ［4］サーバーからのレスポンスを表示
      this.result = res;
      });

   }
}
