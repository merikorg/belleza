<?php

class Conexion
{
  public function getConexion()
  {
    try {
      $serverName = "localhost";
      $dbName = "belleza";
      $user = "";
      $password= "" ; 
      $port=1433;

      $conn = new PDO("sqlsrv:Server=$serverName,$port;Database=$dbName", $user, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      return $conn;
    } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
      die();
    }
  }
}