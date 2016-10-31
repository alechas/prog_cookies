<?php
var_dump($_POST);

$queHago = isset($_POST['queHago']) ? $_POST['queHago'] : NULL;

switch ($queHago) {

    case "LlamarServidor":
    	echo "OKK";
    	
    	break;
}

?>