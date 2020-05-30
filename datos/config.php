<?php
class Conexion
{
    public function __conectarBD()
    {
        try {
            $conexion=new PDO("mysql:host=localhost;dbname=baselogin", "root", "");
            //echo "conectado";
            return $conexion;
        } catch (PDOException $e) {
            echo "Fallo conexion".$e->getMessage();
        }
    }
}

//Conexion::__conectarBD();
