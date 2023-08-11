<?php

class Controller{

  public function getData($query){
   try{
        $list = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $statement = $db->prepare($query);
        $statement->execute();
        while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
          $list[] = $row;
        }
        return $list;

      }catch(PDOException $e){
        return array("error" => "Error: " . $e->getMessage());
      }
  }

}
