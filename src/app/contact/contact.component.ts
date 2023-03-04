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
