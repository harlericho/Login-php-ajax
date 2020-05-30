<?php
require_once "../datos/crudRegistro.php";
$dni=$_POST['dni'];$email=$_POST['email'];
$datos = array('apellidos' => $_POST['apellidos'] ,
                'nombres' => $_POST['nombres'] ,
                'dni' => $_POST['dni'] ,
                'email' => $_POST['email'] ,
                'password' => $_POST['password'] ,
             );
if (CrudRegistro::__validarDatosDni($dni)) {
    echo 2;
} elseif (CrudRegistro::__validarDatosEmail($email)) {
    echo 3;
} else {
    CrudRegistro::__ingresarDatos($datos);
}


