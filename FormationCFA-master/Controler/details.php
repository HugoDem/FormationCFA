<?php
$list=["ISEP", "centrale","ECE", "EFREI","ESTP"];

$id = intval($_GET["id"]);
$school = $list[$id];
include_once("Vue/details.php");
?>