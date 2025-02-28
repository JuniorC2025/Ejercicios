<?php

$inc = include("conexion.php");



if ($inc ) {
    $consultar = "SELECT * FROM formulario";
    $resultado = mysqli_query($conex,$consultar);

    if ($resultado) {
        while ($row = $resultado->fech_array()) {
            $id = $row['ID'];
            $nombre = $row['Nombre'];
            $apellido = $row['Apellido'];
            $email = $row['Email'];
            $consulta = $row['consulta'];
            $Mensaje = $row['Mensaje'];
        
            


            
        }
    }
}


?>