<?php
require_once '../datos/crudLogin.php';

$datos = array( 'email' => $_POST['user'],
                'password' => $_POST['pass'],
);

if (!CrudLogin::__logear($datos)) {
    echo 2;
} else {
    echo 1;
}


