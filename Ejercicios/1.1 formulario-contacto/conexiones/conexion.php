<?php
$host_name = 'localhost';
$database = 'contacto';
$user_name = 'root';
$password = '';

$conexion = mysqli_connect($host_name, $user_name, $password, $database);

if (mysqli_errno($conexion)){
   // echo "error al conectarme";
} else {
    //echo "Me conecte a la base de datos correctamente";
}

$asentos = $conexion -> query("SET  NAMES 'utf8'");

?>