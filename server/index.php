<?php

$config = require('config.php');

$conn = mysqli_connect('localhost','id20232380_flagy','Nq<pLdUn?H#9*P?Z','id20232380_leaderboard');

if($_SERVER['REQUEST_METHOD']){

$result = mysqli_query($conn,'SELECT * FROM leaderboard');

$array = [];
foreach($result as $row){
    array_push($array,$row);
}

$json = json_encode($array);
echo $json ;

}

