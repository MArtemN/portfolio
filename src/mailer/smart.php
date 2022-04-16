<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];
$check = $_POST['check'];

if ($name && $email && $message && $check) {
	$to = 'ma@webvibe.ru';
	$subject = 'Новая заявка с формы';
    $headers = array(
        'From' => 'Артем Матюхин <ma@webvibe.ru>',
        'Bcc' => 'martemn71@gmail.com'
    );
	$message = '
		Новая заявка с формы
		Имя: ' . $name . '
		E-mail: ' . $email . '
		Сообщение: ' . $message;
		
	if (!mail($to, $subject, $message, $headers)) {
		return false;
	}
}

?>