<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];

if( $email != "" && $name == "" && $phone == "" ){
    $title = "Запрос на подписку Universal";
    $body = "
    <h2>Новое обращение от пользователя</h2>
    <b>$email</b> хочет подписаться на рассылку новостей
    
    ";
    header ('Location: subscribe.html');
} elseif( $email != "" && $name != "" && $phone != "" ){
    $title = "Новая заявка Universal";
    $body = "
    <h2>Новая заявка от пользователя</h2>
    <b>Имя: </b>$name <br>
    <b>Телефон: </b>$phone <br>
    <b>Электронная почта: </b> $email      
    ";
        // Отображение результата
    header ('Location: request.html');    
} else{
    $title = "Новый комментрий Universal";
    $body = "
    <h2>Новый комментарий</h2>    
    <b>Сообщение:</b><br>$comment
    ";
    header ('Location: thankyou.html');
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'egai.viktor94@gmail.com'; // Логин на почте
    $mail->Password   = 'jygbdxddpaqmztwn'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('egai.viktor94@gmail.com', 'Universal'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('egay.viktor.1994@yandex.ru');      


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}









