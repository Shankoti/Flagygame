<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: message, access-control-allow-headers');

$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'flagy';

//localhost
//id20232380_flagy
//Nq<pLdUn?H#9*P?Z
//id20232380_leaderboard

$conn = mysqli_connect('localhost','root','Voda2828','flagy');
if($_SERVER['REQUEST_METHOD']=="GET"){

$result = mysqli_query($conn,'SELECT * FROM leaderboard  ORDER BY score DESC');

$array = [];    
foreach($result as $row){
    array_push($array,$row);
}

$json = json_encode($array);
echo $json ;

}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 
   echo json_encode($_POST);
   
   $user = $_POST['user'];
   $score = $_POST['score'];
  
   mysqli_query($conn,"INSERT INTO leaderboard (name, score) VALUES ('$user', '$score')");
    
     
    

    
}

