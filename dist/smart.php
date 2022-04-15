<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];
$check = $_POST['check'];

if ($name && $email && $message && $check) {
	$to = 'ma@webvibe.ru';
	$subject = 'Новая заявка с формы';
	$message = '
		Новая заявка с формы
		Имя: ' . $name . '
		E-mail: ' . $email . '
		Сообщение: ' . $message;
		
	if (!mail($to, $subject, $message)) {
		return false;
	}
}

?>