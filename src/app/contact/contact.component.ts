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

  send(name : string, message : string) {
    this.http.post('/mail.php', {'name' : name,'massage' : message}).subscribe(res => {
      console.log(res);
    }
    );
  }
}
