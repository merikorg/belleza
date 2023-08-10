<?php
require_once('conexion.php');
require_once('cors.php');
require_once('controller.php');


$methodHTTP = $_SERVER['REQUEST_METHOD'];

switch ($methodHTTP) {

    /*case 'GET':
      if (isset($_GET['query'])) {
        $ctl = new Controller();
        $query = $_GET['query'];
        $data = $ctl->getProducts($query);
        echo json_encode($data);
      } else if (isset($_GET['id'])) {
        $data = $_GET['id'];
        $ctl = new Controller();
        $result = $ctl->getProduct($data);
        echo json_encode($result);
      }
      break;*/

  case 'POST':
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data['key'] == 'UbKGYtzvENFAvFEwFmJbPNqSAUBphB') {
      $ctl = new Controller();
      $list = $ctl->getData($data['query']);
      echo json_encode($list);
    } else {
      exit;
    }
    break;


    /*case 'DELETE':
      $data = $_GET;
      $ctl = new Controller();
      $result = $ctl->deleteProduct($data);
      echo json_encode(["data" => $result]);
      break;


    case 'PUT':
      $data = json_decode(file_get_contents('php://input'), true);
      $ctl = new Controller();
      $result = $ctl->updateProduct($data);
      echo json_encode(["data" => $result]);
      break;*/

  default:
    exit;
    break;
}
