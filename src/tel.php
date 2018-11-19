<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  header('HTTP/1.1 404 Not Found');
  die();
}

function isJson($string) {
  return is_string($string) && is_object(json_decode($string)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
}

function getJsonFromBody() {
  $body = file_get_contents('php://input');
  if (!isJson($body)) {
    header('HTTP/1.1 400 Bad Request');
    die();
  }
  return json_decode($body, true);
}

function formatBody($name, $tel) {
  return "
<html>
<body>
  <p>Imię i nazwisko: $name</p>
  <p>Telefon: <a href='tel:$tel'>$tel</a></p>
</body>
</html>
";
}

function requestMail($name, $tel) {
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
  $headers .= "From: \"$name\" <kontakt@aurator.com.pl>" . "\r\n";

  $subject = 'Aurator - formularz kontaktowy';
  $to = 'aurator@aurator.com.pl';
  $message = formatBody($name, $tel);

  mail($to, $subject, $message, $headers);
}

$json = getJsonFromBody();

$name = htmlspecialchars(@$json['name']);
$tel = htmlspecialchars(@$json['tel']);

requestMail($name, $tel);
header('HTTP/1.1 204 No Content');
