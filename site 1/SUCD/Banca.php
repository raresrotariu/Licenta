<?php

include 'config.php';
session_start();

if (isset($_POST['submit'])) {
  $email = $_SESSION['email'];
  $sql = "SELECT * FROM clienti WHERE Email = '$email'";
  $result = mysqli_query($conn, $sql);

if($result->num_rows > 0){
    $row=mysqli_fetch_assoc($result);
    $query="UPDATE clienti SET Abonament='$_POST[abonament]' WHERE Email = '$email' ";
    $query_run=mysqli_query($conn,$query);
    header("Location: Personal.php");
  }
  else {
    echo "<script>alert('Persoana nu exista')</script>";
  }
}



?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Banca</title>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="StyleSheet.css">
	<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
</head>
<body>

<img id="logo" src="img//SUCD1.png" width="150px" height="50px" margin="10px">

<form method="POST">
	<div class="container">
	  <div class="row">
	    <div class="col-2">
	    </div>
	    <div class="col-8" style="">
	    	<div style="background-color: #606060; padding: 25px; margin: 0; text-align: left; color: white;">
	    		
	<script >

			function GetURLParameter(sParam)
			{
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) 
			{
			    var sParameterName = sURLVariables[i].split('=');
			    if (sParameterName[0] == sParam) 
			    {
			        return sParameterName[1];
			    }
			}
			}

			var tech = GetURLParameter('name');

			if(tech==1){
					
					document.write("<h2> Plata: 125.00 RON</h2>");



				}else{
					 document.write("<h2> Plata: 50.00 RON</h2>");
					 
				}

				function myFunction(){
					if(tech==1)
						{document.getElementById("id1").value="2";}
					else
						{document.getElementById("id1").value="1";}
				}

		</script>
	      </div>
	      <div class="plata">
	      	<h5>Order Number: 2974521</h5>
	      	<h5>Fara descriere</h5>
	      	<br><br>
	      	<h3>Te rugam sa introduci datele cardului cu care vrei sa platesti</h3>
	      	<br>
	      	<h5>Numar card</h5>
	      	<div class="form-floating mb-3">
			  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
			  <label for="floatingInput">Introdu numarul de card</label>
			</div>
			<h5>Nume titular card</h5>
			<div class="form-floating mb-3">
			  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
			  <label for="floatingInput">Introdu nume titular card</label>
			</div>

			<div class="luna-an-card">
				<div class="luna-an-card-cutie1">
					<h5>Luna expirare card</h5>
					<div class="input-group mb-3">
					  <select class="form-select" id="inputGroupSelect01">
					    <option selected></option>
					    <option value="1">1</option>
					    <option value="2">2</option>
					    <option value="3">3</option>
					    <option value="4">4</option>
					    <option value="5">5</option>
					    <option value="6">6</option>
					    <option value="7">7</option>
					    <option value="8">8</option>
					    <option value="9">9</option>
					    <option value="10">10</option>
					    <option value="11">11</option>
					    <option value="12">12</option>
					  </select>
				    </div>
				</div>
				<div class="luna-an-card-cutie2">
					<h5>An expirare card</h5>
					<div class="input-group mb-3">
						  <select class="form-select" id="inputGroupSelect01">
						    <option selected></option>
						    <option value="2021">2021</option>
						    <option value="2022">2022</option>
						    <option value="2023">2023</option>
						    <option value="2024">2024</option>
						    <option value="2025">2025</option>
						    <option value="2026">2026</option>
						    <option value="2027">2027</option>
						    <option value="2028">2028</option>
						    <option value="2029">2029</option>
						    <option value="2030">2030</option>
						    <option value="2031">2031</option>
						  </select>
					</div>
				</div>
			</div>
			<h5>CVC/CVV2</h5>
			<div class="form-floating mb-3">
			  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
			  <label for="floatingInput">_ _ _</label>
			</div>
			<h6 style="color: green;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
			  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
			</svg>
			Plata securizata</h6>
			<button name="submit"  onclick="myFunction()" class="btn btn-success buttonbanca">Plateste</button>
			<a href="Personal.php"><button type="button" class="btn btn-danger">Anulare</button></a>
			<br><br><br>

			<img src="img//Untitled-1.2.png" width="150px" height="50px" style="float: right;">

	      </div>

	      <input type="hidden" id="id1" name="abonament" value="5" >

	    </div>
	    <div class="col-2">
	    </div>
	  </div>
</div>
</form>

</body>
</html>