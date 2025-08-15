<?php

$username = $_REQUEST['username'];
$pass = $_REQUEST['pass'];

$connection = mysql_connect("localhost","root","")
or die("couldn't connect to the server");
$db = mysql_select_db("ecom",$connection)
or die("couldn't select the database");

$query = "INSERT INTO register(username , pass) VALUES('$username' , '$pass') ";
$result = mysql_query($query) or die ("query failed".mysql_error());
echo "New Member Registered Successfully";

header('location:login.html');
mysql_close($connection);

?>