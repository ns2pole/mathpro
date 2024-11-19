import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './math-programming-channel.component.html',
  styleUrls: ['../app.component.css', './math-programming-channel.component.css']
})
export class MathProgrammingChannelComponent {
  constructor(private router: Router) {
  }

  Sierpinski_animeDraw_download() {
    const fileUrl = 'assets/anime.py'; // サーバー上のファイルパス
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'anime.py'; // ダウンロード時のファイル名
    anchor.click();
  }

  Sierpinski_haskell_download() {
    const fileUrl = 'assets/Main.hs'; // サーバー上のファイルパス
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Main.hs'; // ダウンロード時のファイル名
    anchor.click();
  }

}

