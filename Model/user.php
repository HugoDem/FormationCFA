<?php

/**
* 
*/
class User 
{
	private $name;
	private $mail;
	private $id;

	function __construct($name,$mail)
	{
		$this->name=$name;
		$this->mail=$mail;
	}

	function getName(){
		return $this->name;
	}
	function getMail(){
		return $this->mail;
	}
	function setName($name){
		$this->name=$name;
	}
	function setMail($mail){
		$this->mail=$mail;
	}

}


?>