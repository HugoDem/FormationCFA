<?php

$name = $_POST['name'];
$mail = $_POST['mail'];

include "Model/user.php";
include "Model/model.php";

$model = new Model();


$createdUser = new User($name,$mail);
$user = $model->getUserByEmail($createdUser->getMail());
if ($user==null){
	$model->createUser($createdUser);
	include_once "Vue/created.php";
}else {
	include_once "Vue/existing.php";
}




?>