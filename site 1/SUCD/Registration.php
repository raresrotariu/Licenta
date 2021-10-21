<?php

include 'config.php';

error_reporting(0);




if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$sql="SELECT * FROM login WHERE email='$email'";
	$result = mysqli_query($conn, $sql);
	if(!$result->num_rows >0){
		$sql = "INSERT INTO login (name,email , password)
		VALUES ('$name', '$email','$password');";
		$result = mysqli_query($conn, $sql);
		$sql = "INSERT INTO clienti (Email)
		VALUES ('$email')";
		$result = mysqli_query($conn, $sql);
		if($result){
		echo "<script>alert('Wow! User Registration Completed.')</script>";
		header("Location: Index.php");
		}
	}else {
			echo "<script>alert('Woops! Email Already Exists.')</script>";
		}

}

?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Registration Client</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="StyleSheet.css">
</head>
<body>

	<img id="logo" src="img//SUCD1.png" width="150px" height="50px">

	<div class="menu">
		<ul>
			<li><a href="Index.php">Home</a></li>
			<li><a href="Login.php">Logare</a></li>
			<li><a href="About.php">Despre</a></li>
		</ul>
	</div>

<!--
	<div class="Cutie">
		<form action="" method="POST" >
			<h3>Nume:</h3>
			<input type="text" name="name">
			<h3>Email:</h3>
			<input type="text" name="email">
			<h3>Parola:</h3>
			<input type="text" name="password">
			<button name="submit">Salvare</button>
		</form>
	</div>
-->

	<div class="box">
		<form method="POST">
			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="name" >
			  <label for="name">Nume</label>
			</div>
			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="email" >
			  <label for="email">Email </label>
			</div>
			<div class="form-floating">
			  <input type="text" class="form-control" name="password"
			  >
			  <label for="floatingPassword">Parola</label>
			</div>
			<button  class="btn btn-outline-success"
			 name="submit"> Creare
			</button>
		</form>
	</div>




</body>
</html>