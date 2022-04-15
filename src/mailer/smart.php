<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];
$check = $_POST['check'];

if ($name && $email && $message && $check) {
	$to = 'ma@webvibe.ru';
	$subject = 'Новая заявка с формы';
    $headers = array(
        'From' => 'ma@webvibe.ru',
        'Reply-To' => 'ma@webvibe.ru',
        'X-Mailer' => 'PHP/' . phpversion()
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