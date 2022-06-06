<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];
$check = $_POST['check'];

if ($name && $email && $message && $check) {
	$to = 'ma@webvibe.ru';
	$subject = 'Новая заявка с формы';
    $charset = "utf-8";
    $headers ="Content-type: text/html; charset=$charset\r\n";
    $headers.="Date: ".date('D, d M Y h:i:s')."\r\n";
    $headers.="From: Артем Матюхин <ma@webvibe.ru>\r\n";
    $headers.="Bcc: martemn71@gmail.com\r\n";
//    $headers = array(
//        'From' => 'Артем Матюхин <ma@webvibe.ru>',
//        'Bcc' => 'martemn71@gmail.com'
//    );
	$message = '
	    <html>
	        <head>
	            <title>'.$subject.'</title>
            </head>
            <body>
                Новая заявка с формы <br><br>
                Имя: ' . $name . ' <br>
                E-mail: ' . $email . ' <br>
                Сообщение: ' . $message . '
            </body>
	    </html>';
		
	if (!mail($to, $subject, $message, $headers)) {
		return false;
	}
}

?>