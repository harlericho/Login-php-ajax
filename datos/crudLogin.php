<?php
require_once '../datos/config.php';

class CrudLogin extends Conexion
{
    public function __logear($datos)
    {
        $shaPass=sha1($datos['password']);
        $sql = 'select * from persona where email=:email and password=:password';
        $query = Conexion::__conectarBD()->prepare($sql);
        $query->bindParam(':email', $datos['email'], PDO::PARAM_STR);
        $query->bindParam(':password', $shaPass, PDO::PARAM_STR);
        $query->execute();
        return $query->fetch();
    }
}
