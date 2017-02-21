<?php
require 'PHPMailerAutoload.php';

$subject="Заявка с сайта Optimatika";
$sender=$_POST["name"];
$senderEmail=$_POST["email"];
$message=$_POST["message"];
$mailBody="Имя: $sender\nEmail: $senderEmail\n\n$message";


$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'noreply@optimatica.ru';                 // SMTP username
$mail->Password = 'rdfpbvjlf';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('noreply@optimatica.ru', 'Mailer');
$mail->addAddress('hello@optimatica.ru');

$mail->isHTML(false);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $mailBody;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
