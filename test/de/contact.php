<!DOCTYPE html>
<!--[if lt IE 7]><html xmlns="http://www.w3.org/1999/xhtml" class="lt-ie10 lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html xmlns="http://www.w3.org/1999/xhtml" class="lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html xmlns="http://www.w3.org/1999/xhtml" class="lt-ie10 lt-ie9"><![endif]-->
<!--[if IE 9]><html xmlns="http://www.w3.org/1999/xhtml" class="lt-ie10"><![endif]-->
<!--[if gt IE 9]><!--><html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/index.dwt" codeOutsideHTMLIsLocked="false" -->
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Nerijus Jasinskas Software-Engineering - Individuelle Software-Lösungen, Data-Warehouse-Systeme, Business Intelligence, Embedded-Software-Lösungen." />
<meta name="keywords" content="Individuelle Software-Lösungen, Data-Warehouse-Systeme, Business Intelligence, Embedded-Software-Lösungen" />
<!-- InstanceBeginEditable name="Title" -->
<title>Nerijus Jasinskas Software-Engineering - Kontakt</title>
<!-- InstanceEndEditable -->
<style type="text/css">
.plistareset {
	visibility: hidden !important;
	width: 0px !important;
	height: 0px !important;
	display: none !important;
}
#homerecads_widget {
	visibility: hidden !important;
	width: 0px !important;
	height: 0px !important;
	display: none !important;
}
</style>
<!-- InstanceBeginEditable name="CSSs" -->
<base href="http://www.jasineri.de/de/"/>
<link href="../css/jasineri_hp.css?v=16" rel="stylesheet" type="text/css" />
<!-- InstanceEndEditable -->
<link href="../images/logo.ico" rel="shortcut icon"/>
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->
</head>

<div class="wrapper">
	<div id="nav-menu" class="clearfix min-w">
		<div class="main-container">
			<div class="min-pad"><!-- InstanceBeginEditable name="NavMenu" -->
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="industries.html">Branchen</a></li>
				<li><a href="service.html">Service &amp; Support</a></li>
				<li><a href="profile.html">Profil</a></li>
				<li><a href="http://code.jasineri.de/de/contact.php" class="current">Kontakt</a></li>
			</ul>
			<!-- InstanceEndEditable -->
				<div id="social" class="flt-r">
					<ul>
						<li><span>Im Social Web:</span></li>
						<li><a href="http://www.xing.com/profile/Nerijus_Jasinskas" target="_blank"> <img src="../images/icon/xing.png" alt="XING" /> </a></li>
						<li><a href="http://de.linkedin.com/in/nerijusjasinskas" target="_blank"> <img src="../images/icon/linkedin.png" alt="LinkedIn" /> </a></li>
						<li><a href="http://github.com/jasineri" target="_blank"> <img src="../images/icon/github.png" alt="GitHub" /> </a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="min-w"><div id="pbar"></div></div>
	<div id="main" class="main-container">
		<div id="article" class="flt-l"> <img src="../images/logo-big.png" alt="jasineri" width="80" height="80" class="flt-l" />
			<div class="flt-l">
				<h1>Nerijus Jasinskas<span> Software-Engineering</span></h1>
			</div>
		</div>
		<noscript>
		<div class="clf section deco-section center">
			<div class="content">
				<h5>Webseite wird nicht richtig angezeigt!</h5>
				<p>Sie haben möglicherweise JavaScript in Ihrem Browser nicht aktiviert, oder Ihr Browser unterstützt JavaScript nicht.</p>
			</div>
		</div>
		</noscript>
		<div id="c" class="clf"> <!-- InstanceBeginEditable name="Sections" -->
			<div class="section flt-l">
				<h2>Kontakt</h2>
				<div class="line"></div>
				<div class="content">
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

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["name"])) {
		$nameErr = "Bitte den Namen angeben.";
	} else {
		$name = test_input($_POST["name"]);
		if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
			$nameErr = "Nur Buchstaben und Leerzeichen erlaubt.";
		}
	}

	if (empty($_POST["address"])) {
		$address = "";
	} else {
		$address = test_input($_POST["address"]);
	}

	if (empty($_POST["email"])) {
		$emailErr = "Bitte die E-Mail-Adresse eingeben.";
	} else {
		$email = test_input($_POST["email"]);
		if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) {
			$emailErr = "Bitte die richtige E-Mail-Adresse eingeben.";
		}
	}

	if (empty($_POST["phone"])) {
		$phone = "";
	} else {
		$phone = test_input($_POST["phone"]);
		if (!preg_match("/^[0-9\-\+\(\)\/ ]*$/", $phone)) {
			$phoneErr = "Bitte die richtige Telefonnummer eingeben.";
		}
	}

	if (empty($_POST["message"])) {
		$messageErr = "Bitte die Nachricht eingeben.";
	} else {
		$message = test_input($_POST["message"]);
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
		echo "<p>Ihre Nachricht wurde erfolgreich versendet. Vielen Dank!</p>";
		$transferOK = true;
	}
}

if (!$transferOK) {
?>
					<h5><img src="../images/icon/write.png" alt="Schreiben" width="24" height="64" class="icon flt-l" /><span id="contact-head">Sie haben Fragen oder Anmerkungen?</span><span id="contact-sent" style="display:none">Ihre Nachricht wurde erfolgreich versendet. Vielen Dank!</span><span id="contact-err" style="display:none">Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es nochmal.</span></h5>
					<div id="contact-cont"><p>Hier haben Sie die Möglichkeit sich einfach und unkompliziert mit mir in Verbindung zu setzen. Ich freue mich auf Ihre Nachricht.</p>
					<div id="contact-form" class="clearfix">
						<form method="post" action="http://code.jasineri.de/de/contact.php">
							<label class="" for="name">Name <span class="required">*</span><span class="error">&#160;<?php echo $nameErr; ?></span></label>
							<input class="flt-r" type="text" id="name" name="name" value="<?php echo $name; ?>" required maxlength="50"/>
							<label class="" for="address">Anschrift<span class="error">&#160;<?php echo $addressErr; ?></span></label>
							<input class="flt-r" type="text" id="address" name="address" value="<?php echo $address; ?>" maxlength="50"/>
							<label for="email">E-Mail <span class="required">*</span><span class="error">&#160;<?php echo $emailErr; ?></span></label>
							<input class="flt-r" type="email" id="email" name="email" value="<?php echo $email; ?>" required maxlength="50"/>
							<label for="phone">Telefon<span class="error">&#160;<?php echo $phoneErr; ?></span></label>
							<input class="flt-r" type="tel" id="phone" name="phone" value="<?php echo $phone; ?>" maxlength="50"/>
							<label for="message">Nachricht <span class="required">*</span><span class="error">&#160;<?php echo $messageErr; ?></span></label>
							<textarea class="flt-r" id="message" name="message" required rows="6" cols="40" maxlength="2000"><?php echo $message; ?> </textarea>
							<input class="flt-r" type="submit" value="Absenden" id="submit-btn" />
							<p class="clf italic"><span class="required">*</span> Pflichtfeld.</p>
						</form>
					</div></div>
					<?php } ?>
				</div>
			</div>
			<div class="section flt-l">
				<h2>Anschrift</h2>
				<div class="line"></div>
				<div class="content">
					<div class="anticp shadow">
						<p><img src="../images/icon/home.png" alt="Adresse" width="32" height="53" class="icon flt-l" /><img src="../images/qrcode.png" alt="QR code" width="116" height="116" class="icon flt-r" />Dipl.-Ing. Nerijus Jasinskas<br />
							Software-Engineering<br />
							An der Joch 29<br />
							DE-51061 Köln</p>
						<p>Telefon: +49 174-6434431<br />
							Telefax: +49 3212-1089122<br />
							E-Mail: <img src="../images/antisp.png" alt="@" width="110" height="14" class="img-to-txt" /> (Mein <a href="pgp.html">PGP-Schlüssel</a>)</p>
                        <div class="mapouter">
                            <div class="gmap-canvas rounded">
								<iframe width="430" height="300" id="gmap_canvas"
										src="https://maps.google.com/maps?q=nerijus%20jasinskas%20software%20engineering&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
										frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- InstanceEndEditable --></div>
	</div>
</div>
<div id="footer" class="clf min-w">
	<div class="main-container content">
		<div class="min-pad">
			<ul>
				<li><a href="sitemap.html">Sitemap</a></li>
				<li><a href="http://code.jasineri.de/de/contact.php">Kontakt</a></li>
				<li><a href="impressum.html">Impressum</a></li>
				<li><a href="privacy.html">Datenschutz</a></li>
			</ul>
			<p>&#169; 2022 Nerijus Jasinskas. Alle Rechte vorbehalten.</p>
		</div>
	</div>
</div>
<script type="text/javascript" src="../js/load.js?v=42"></script>

<!-- InstanceEnd --></html>
