<?php

include 'config.php';

session_start();

error_reporting(0);

if (isset($_SESSION['Nume'])) {
    header("Location: User.php");
}

if (isset($_POST['submit'])) {
	$email = $_POST['email'];
	$password = md5($_POST['password']);

	$sql = "SELECT * FROM login WHERE email='$email' AND password='$password'";
	$result = mysqli_query($conn, $sql);
	if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
		$_SESSION['Nume'] = $row['Nume'];
		$_SESSION['email'] = $row['email'];
		header("Location: Personal.php");
	} else {
		echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
	}
}

?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Log In Client</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	
	<link rel="stylesheet" type="text/css" href="StyleSheet.css">
</head>
<body>

	<img id="logo" src= "img//SUCD1.png" width="150px" height="50px">

	<div class="menu">
		<ul>
			<li><a href="Index.php">Home</a></li>
			<li><a href="Login.php">Logare</a></li>
			<li><a href="About.php">Despre</a></li>
		</ul>
	</div>

<!--
	<div class="Cutie">
			<form method="POST">
				<h1 >Log in</h1>
				<h3>Name/Email:</h3>
				<input type="email" name="email" value="<?php echo $email; ?>" required>
				<h3>Parola:</h3>
				<input type="password" name="password" value="<?php echo $_POST['password']; ?>" required>
				<button name="submit">Log In</button>
			</form>
	</div>

-->


	<div class="box">
		<form method="POST">
			<div class="form-floating mb-3">
			  <input type="email" class="form-control" name="email" id="email" value="<?php echo $email; ?>">
			  <label for="email">Email address</label>
			</div>
			<div class="form-floating">
			  <input type="password" class="form-control" name="password"
			   id="password" value="<?php echo $_POST['password']; ?>" >
			  <label for="floatingPassword">Password</label>
			</div>
			<button  class="btn btn-outline-success"
			 name="submit"> Log In
			</button>
		</form>
	</div>



</body>
</html>