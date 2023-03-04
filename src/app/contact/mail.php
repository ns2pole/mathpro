<html>
  <body>
    <?php
  mb_language("Japanese");
  $json = file_get_contents('php://input');
  // Converts json data into a PHP object
  $data = json_decode($json, true);
  $name = $data["name"];
  $title = $data["title"];
  $email = $data["email"];
  $message = $data["message"];
  $headers = "From: promath@example.com";
 mb_send_mail("spaceofstar2@gmail.com", $title, "名前: ". $name . "   \n". "メールアドレス: ". $email. "   \n". "メッセージ: ". $message, $headers);
	?>
  </body>
</html>
