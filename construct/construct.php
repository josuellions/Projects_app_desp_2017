<?php
function exib_desp(){
	if(!isset($_POST["btn_enter"]) == null){
		// $exib = array ($_POST["despesa"]." = R$ ". $_POST["valor"]);

		// $exib = array ("Mercado"." = R$ ". "600,00",
		// 		"Seguro"." = R$ ". "300,00",
		// 		"Padaria"." = R$ ". "100,00",
		// 		"Sacolão"." = R$ ". "200,00",
		// 		$_POST["despesa"]." = R$ ". $_POST["valor"]);

//var_dump($exib);
	//}
	$exib1 = ($_POST["despesa"]." = R$ ". $_POST["valor"]);
	$exib2 = array ($_POST["lacamentos_entrad"]);

		/*if(!isset($_POST["btn_exibir"])){*/
		foreach ($exib2 as $key => $value) {
			echo $key." - ".$value."\n";
			//}
		}
		  
    }



		isset($_POST);
		//while ($i <= 3){
		//$q = $_POST["btn_enter"];
		//$exib[$i]  = array($_POST["despesa"]." = R$ ". $_POST["valor"]);

		//var_dump($q);

		//if(!isset($_POST["btn_enter"])){
		//	$i++;
		//}
	//}
}

function exib_entr(){
// 	if(!isset($_POST["btn_enter"]) == null){
// 		// $exib = array ($_POST["despesa"]." = R$ ". $_POST["valor"]);

// 		$exib = array ("Salario-01"." = R$ ". "1.600,00",
// 				"Salario-02"." = R$ ". "1.300,00",
// 				"Salario-03"." = R$ ". "1.100,00",
// 				"Salario-04"." = R$ ". "2.200,00",);
// //var_dump($exib);
// 		foreach ($exib as $key => $value) {
// 			echo $key." - ".$value."\n";
// 			}
		  
   // }



		isset($_POST);
}
//echo "<pre>";
//var_dump($exib);
//$exib = array('The Matix', 'The Terminator II', 'The Avengers');

/*
if(!isset($_POST["lacamentos_desp"])){
	//if($i == 3){
		foreach ($exib as $key => $value) {
			$_POST["lacamentos_desp"]= $value;
			echo $_POST["lacamentos_desp"];
			}
		}
	//}
}
function sair(){
//$exib = array('The Matix', 'The Terminator II', 'The Avengers');


if(!isset($_POST["lacamentos_entrad"] )){
	if($i == 3){
		foreach ($exib as $key => $value) {
			$_POST["lacamentos_entrad"]= $value;
			echo $_POST["lacamentos_entrad"];
			}
		}
	}
}
*/