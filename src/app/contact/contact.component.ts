import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css', './contact.component.css']
})
export class ContactComponent {
  titleDefaultVal : string|null = '';
  messageDefaultVal : string|null = '';
  constructor(private http: HttpClient) {
    // 現在のURLからクエリパラメータを取得する
    const searchParams = new URLSearchParams(window.location.search);
    this.titleDefaultVal = searchParams.get('title');
    this.messageDefaultVal = searchParams.get('message');
  }

  send(name : string, title : string , email : string, message : string) {
    if(window.confirm("送信しますか？")) {
        this.http.post('/mail.php', {name : name, title : title, email : email, message : message}).subscribe(res => {
      });
      window.alert("送信が完了致しました。ご返信まで少々お待ち下さい。")
      this.http.post('/mail.php', {name : name, title : title, email : email, message : message}).subscribe(res => {
      });
      location.href='/'
    } else {
    }
  }
}
