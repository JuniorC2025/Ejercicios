<?php
$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Email = $_POST['Email'];
$consulta = $_POST['consulta'];
$Mensaje = $_POST['Mensaje'];


include "conexion.php";

$consultar = "SELECT * FROM formulario;";

if ($conexion -> query($insertar) == true) {
   
    header('Diagnostico/index.html');


} else {
    echo "No se guardo la informacion";
}

$conexion -> close();
?>