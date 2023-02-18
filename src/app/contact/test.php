<?php
// クエリ情報nameを取得
$r = $_GET['name'];
// クエリ情報nameが空の場合はエラー
if (empty($r)) {
  header('HTTP/1.1 500 Internal Server Error');
} else {
  // 空でなければ、メッセージを出力
  print('Hello,'.$r.'！');
  $cmd = 'echo "これはテストです" | mail -s "テスト" spaceofstar2@gmail.com';
  exec($cmd);

}
