<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");

      $to = "spaceofstar2@gmail.com";
      $title = "test";
      $message = "message";
      $headers = "From: from@example.com";

      if(mb_send_mail($to, $title, $message, $headers))
      {
        echo "メール送信成功です";
      }
      else
      {
        echo "メール送信失敗です";
      }
    ?>
  </body>
</html>
