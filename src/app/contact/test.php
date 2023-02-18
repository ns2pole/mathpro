<?php
// クエリ情報nameを取得
$r = $_GET['name'];
  // 空でなければ、メッセージを出力
  header('Hello,'.$r.'！');
  $cmd = 'echo "これはテストです" | mail -s "テスト" spaceofstar2@gmail.com';
  exec($cmd);
  $email = "spaceofstar2@gmail.com";
  $subject = "テスト"; // 題名
  $body = "これはテストです。\n"; // 本文
  $to = 'yyyyy@example.com';
  $header = "From: $email\nReply-To: $email\n";
  mb_send_mail($to, $subject, $body, $header);
?>
