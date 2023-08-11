<?php

class Conexion
{
  public function getConexion()
  {
    try {
      $serverName = "DESKTOP-HPFPM38";
      $dbName = "belleza";
      $user = "DESKTOP-HPFPM38/DESARROLLO CEDIT 1";
      $password= "" ; 

      $conn = new PDO("sqlsrv:Server=$serverName;Database=$dbName", $user, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      return $conn;
    } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
      die();
    }
  }
}