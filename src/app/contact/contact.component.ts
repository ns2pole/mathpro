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

  send() {
    this.http.get('/mail.php', {
      responseType: 'text',
      // ［3］URLにクエリパラメーターを指定
      params: new HttpParams().set('name', "test"),
    })
    .subscribe(
      data => {
        this.result = data
        console.log('通信に成功しました。');
        console.log(data);
      },
      error => {
        this.result = '通信に失敗しました。';
        console.log(this.result);
      }
    );
    }
}
