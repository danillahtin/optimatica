<?php

	if($_POST["submit"]) {

	    $recipient="hello@optimatica.ru";
	    $subject="Заявка с сайта Optimatika";
	    $sender=$_POST["name"];
	    $senderEmail=$_POST["email"];
	    $message=$_POST["message"];

	    $mailBody="Имя: $sender\nEmail: $senderEmail\n\n$message";

	    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
	}
?>