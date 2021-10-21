<?php
include 'config.php';

session_start();

if (isset($_POST['submit'])) {
  $email = $_SESSION['email'];
  $sql = "SELECT * FROM clienti WHERE Email = '$email'";
  $result = mysqli_query($conn, $sql);

  if($result->num_rows > 0){
    $row=mysqli_fetch_assoc($result);
    $query="UPDATE clienti SET Nume='$_POST[nume]',Prenume='$_POST[prenume]',Judet='$_POST[judet]' , Oras='$_POST[oras]' , Adresa='$_POST[adresa]' ,Varsta='$_POST[varsta]' ,NrInmatriculare='$_POST[nrinmatriculare]' , CodMotor='$_POST[codmotor]' WHERE Email = '$email' ";
    $query_run=mysqli_query($conn,$query);
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
	<title>Personal</title>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="StyleSheet.css">
</head>
<body>
	<img id="logo" src="img//SUCD1.png" width="150px" height="50px">
	<h1>PERSONAL</h1>

	<div class="minimenu">
		<ul>
			<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  Schimbare Date
			</button>
			<a href="Comanda.php"><button type="button" class="btn btn-primary">Produs</button></a>
			<a href="Accidente.php"><button type="button" class="btn btn-primary">Evenimente rutiere</button></a>
			<a href="logout.php"><button class="btn btn-outline-danger">Log out</button></a>
			
		</ul>
	</div>

		<?php

		$email = $_SESSION['email'];

		$sql = "SELECT * FROM clienti WHERE Email = '$email'";
		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		
		if(!isset($_SESSION['nume'])){
			echo "YES";
		}
		else{
			echo "NO";
		}


		if($resultCheck > 0){
		while($row = mysqli_fetch_assoc($result)){
			echo $row['Email']."<br>";
		}
	}

		?>

		<?php

		if (!isset($_SESSION['nume'])) {
				$email = $_SESSION['email'];
	  	$sql = "SELECT * FROM clienti WHERE Email = '$email'";

		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		
		if($resultCheck > 0){
			while($row = mysqli_fetch_assoc($result)){
				if($row['Abonament']==1){
					?>
				

				<div>
						<h3 style="color: white;"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
	  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
			</svg>Cont Standard</h3>
				</div>

				<?php
			}
			else if($row['Abonament']==2){
						?>
				

				<div>
					<h3 style="color: green;"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
				  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
				  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
				</svg>Cont Premium</h3>
				</div>

				<?php
				}else {
					?>
				

				<div>
					<h3 style="color:red;"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
					  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
					  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
						</svg>Cont nimic</h3>
				</div>

				<?php
				}
			}
			}
		}


		?>





	<div class="Cutie2">
		<h3>
			<?php 

			if (!isset($_SESSION['nume'])) {
				$email = $_SESSION['email'];
	  	$sql = "SELECT * FROM clienti WHERE Email = '$email'";

		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		
		if($resultCheck > 0){
			while($row = mysqli_fetch_assoc($result)){
				echo $row['Nume']." | ".$row['Prenume']."<br>".$row['Judet']." |
				 ".$row['Oras']." | ".$row['Adresa']." |
				  ".$row['Varsta']."<br>".$row['NrInmatriculare']." | ".$row['CodMotor']."<br>";
				}
			}
		}

		?>

		</h3>
	</div>



<!-- Modal -->
<form method="POST">
	<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel">Schimbare Date</h5>
	        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">


	      	<?php if (!isset($_SESSION['nume'])) {
					$email = $_SESSION['email'];
		  	$sql = "SELECT * FROM clienti WHERE Email = '$email'";

			$result = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($result);
			
			if($resultCheck > 0){
				while($row = mysqli_fetch_assoc($result)){
					?>
	      
	       <div class="form-floating mb-3">
			  <input type="text" class="form-control" name="nume" placeholder="Nume" value="<?php echo $row['Nume'] ?>" >
			  <label for="floatingInput">Nume</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="prenume" placeholder="Prenume" value="<?php echo $row['Prenume'] ?>" >
			  <label for="floatingInput">Prenume</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="judet" placeholder="Judet" value="<?php echo $row['Judet'] ?>" >
			  <label for="floatingInput">Judet</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="oras" placeholder="Oras"  value="<?php echo $row['Oras'] ?>">
			  <label for="floatingInput">Oras</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="adresa" placeholder="Adresa" value="<?php echo $row['Adresa'] ?>" >
			  <label for="floatingInput">Adresa</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="varsta" placeholder="Varsta" value="<?php echo $row['Varsta'] ?>" >
			  <label for="floatingInput">Varsta</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="nrinmatriculare" placeholder="Nr. Inmatriculare" value="<?php echo $row['NrInmatriculare'] ?>" >
			  <label for="floatingInput">Nr. Inmatriculare</label>
			</div>

			<div class="form-floating mb-3">
			  <input type="text" class="form-control" name="codmotor" placeholder="Cod Motor" value="<?php echo $row['CodMotor'] ?>">
			  <label for="floatingInput">Cod Motor</label>
			</div>

			<?php
					}
				}
			}

			?>


	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	        <button  name="submit" class="btn btn-primary">Save changes</button>
	      </div>
	    </div>
	  </div>
</div>
</form>

</body>
</html>