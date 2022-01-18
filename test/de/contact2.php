<?php
// define variables and set to empty values
$email_to = "jasineri@gmx.de";

$email_subject = "Ihr Kontakt zu Nerijus Jasinskas";

$nameErr = $addressErr = $emailErr = $phoneErr = $messageErr = "";
$name = $address = $email = $phone = $message = "";
$transferOK = false;

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = strip_tags($data);
	$data = htmlspecialchars($data);
	return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if (empty($_GET["name"])) {
		$nameErr = "Bitte den Namen angeben.";
	} else {
		$name = test_input($_GET["name"]);
		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
			$nameErr = "Nur Buchstaben und Leerzeichen erlaubt.";
		}
	}

	if (empty($_GET["address"])) {
		$address = "";
	} else {
		$address = test_input($_GET["address"]);
	}

	if (empty($_GET["email"])) {
		$emailErr = "Bitte die E-Mail-Adresse eingeben.";
	} else {
		$email = test_input($_GET["email"]);
		if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) {
			$emailErr = "Bitte die richtige E-Mail-Adresse eingeben.";
		}
	}

	if (empty($_GET["phone"])) {
		$phone = "";
	} else {
		$phone = test_input($_GET["phone"]);
		if (!preg_match("/^[0-9\-\+\(\)\/ ]*$/", $phone)) {
			$phoneErr = "Bitte die richtige Telefonnummer eingeben.";
		}
	}

	if (empty($_GET["message"])) {
		$messageErr = "Bitte die Nachricht eingeben.";
	} else {
		$message = test_input($_GET["message"]);
	}

	$checkOK = $nameErr . $addressErr . $emailErr . $phoneErr . $messageErr;

	if (empty($checkOK)) {
		$email_message .= "Name: " . $name . "\n";
		$email_message .= "Anschrift: " . $address . "\n";
		$email_message .= "E-Mail: " . $email . "\n";
		$email_message .= "Telefon: " . $phone . "\n";
		$email_message .= "Nachricht: " . $message . "\n";

		// create email headers
		$headers = 'From: ' . $email . "\r\n" .
			'Reply-To: ' . $email . "\r\n" .
			'X-Mailer: PHP';
		@mail($email_to, $email_subject, $email_message, $headers);
		$name = $address = $email = $phone = $message = "";
		print $_GET['callback'].'('.json_encode('OK').')';
		$transferOK = true;
	} else {
		$returnData = array();
		$returnData["name"] = $nameErr;
		$returnData["address"] = $addressErr;
		$returnData["email"] =  $emailErr;
		$returnData["phone"] =  $phoneErr;
		$returnData["message"] = $messageErr;
		print $_GET['callback'].'('.json_encode($returnData).')';
	}
}
?>