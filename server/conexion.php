<?php

class Conexion
{
  public function getConexion()
  {
    try {
      $serverName = "DESKTOP-HPFPM38"; // o "127.0.0.1" si es la instancia predeterminada
      $dbName = "belleza";       // Nombre de tu base de datos

      $conn = new PDO("sqlsrv:Server=$serverName;Database=$dbName");
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      return $conn;
    } catch (PDOException $e) {
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      die();
    }
  }
}
 //DESKTOP-HPFPM38