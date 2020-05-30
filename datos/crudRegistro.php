<?php
require_once '../datos/config.php';

class CrudRegistro extends Conexion
 {
    //funcion de registro usuario

    function __ingresarDatos( $datos ) {
        $sql = "insert into persona(apellidos,nombres,dni,email,password)
                values(:apellidos,:nombres,:dni,:email,:password)";
        $query = Conexion::__conectarBD()->prepare( $sql );
        $query->bindParam( ':apellidos', $datos['apellidos'], PDO::PARAM_STR );
        $query->bindParam( ':nombres', $datos['nombres'], PDO::PARAM_STR );
        $query->bindParam( ':dni', $datos['dni'], PDO::PARAM_STR );
        $query->bindParam( ':email', $datos['email'], PDO::PARAM_STR );
        $query->bindParam( ':password', sha1( $datos['password'] ), PDO::PARAM_STR );
        return $query->execute();

    }
    //funcion devalidar dni, que no se repitan

    function __validarDatosDni( $dni ) {
        $sql = 'select * from persona where dni=:dni';
        $query = Conexion::__conectarBD()->prepare( $sql );
        $query->bindParam( ':dni', $dni, PDO::PARAM_STR );
        $query->execute();
        return $query->fetch();
    }

    //funcion devalidar email, que no se repitan

    function __validarDatosEmail( $email ) {
        $sql = 'select * from persona where email=:email';
        $query = Conexion::__conectarBD()->prepare( $sql );
        $query->bindParam( ':email', $email, PDO::PARAM_STR );
        $query->execute();
        return $query->fetch();
    }
}
