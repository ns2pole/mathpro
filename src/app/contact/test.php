<?php
// クエリ情報nameを取得
$r = $_GET['name'];
  // 空でなければ、メッセージを出力
  header('Hello,'.$r.'！');
  $cmd = 'echo "これはテストです" | mail -s "テスト" spaceofstar2@gmail.com';
  exec($cmd);
