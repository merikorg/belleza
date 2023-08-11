<?php
require_once('conexion.php');
require_once('cors.php');
require_once('controller.php');


$methodHTTP = $_SERVER['REQUEST_METHOD'];

switch ($methodHTTP) {

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data['key'] == 'UbKGYtzvENFAvFEwFmJbPNqSAUBphB') {
      $ctl = new Controller();
      $list = $ctl->getData($data['query']);
      if (isset($list["error"])) {
        echo json_encode($list["error"]);
      } else {
        echo json_encode($list);
      }
    } else {
      exit;
    }
    break;

  default:
    exit;
    break;
}
