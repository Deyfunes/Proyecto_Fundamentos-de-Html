//js document


var jsonText = [
{
	"codigo":"001",
	"nombre":"Pablo",
	"nota": 86
},{
	"codigo":"002",
	"nombre":"Omar",
	"nota": 67
},{
	"codigo":"003",
	"nombre":"Andrey",
	"nota": 77
},{
	"codigo":"004",
	"nombre":"Juan",
	"nota": 89
},{
	"codigo":"005",
	"nombre":"Pedro",
	"nota": 98
},{
	"codigo":"006",
	"nombre":"Elena",
	"nota": 72
},{
	"codigo":"007",
	"nombre":"Marta",
	"nota": 70
},{
	"codigo":"008",
	"nombre":"karla",
	"nota": 95
},{
	"codigo":"009",
	"nombre":"Ana",
	"nota": 83
},{
	"codigo":"010",
	"nombre":"Gretel",
	"nota": 75
}
];

 
 
function informacion_personal(json){
	
	var out = "Estudiantes <br>";

	var i;
		for(i = 0; i<json.length; i++){
			out += "codigo:" + json[i].codigo +"<br>"+ "nombre:" + json[i].nombre +"-"+ "nota:" + json[i].nota+"<br>";
		}
		document.getElementById('nombres').innerHTML =  out;
}

//La segunda acción es calcular la nota promedio y mostrarla en pantalla.

/*pues, puedes hacer otro for que sume todas las notas y luego que la almacene el numero de iteraciones en una variable GLOBAL 
y la sumatoria total en otra variable GLOBAL y creas una funcion que saque el promedio, usando esas variables globales
comprendes?*/

 		
 	
 function Nota_promedio(json){

 		 var out ="<--promedio-->"; 
 		 var suma = 0;
 		 var nota = out+="";

 		for(var i = 0; i<json.length; i++){
 			  suma+=json[i].nota;
 			}
 			document.getElementById('nota-promedio').innerHTML = "Nota promedio es:"+ suma/10;
 		
} 		
 		//Pedro es el de mayor nota 98
function nota_mayor(json){
	var out= "<--Estudiante-->";
	var nota = json[0].nota;
	var pos = 0;
	var aux = "";
	 
	for(var i = 0; i<json.length; i++){
		if( json[i].nota >= nota){
			 nota = json[i].nota
			 pos = i;
			 aux = json[pos].nombre
		}
		} 
		document.getElementById('nota-mayor').innerHTML = "El estudiante con nota mayor es:"+ aux +"<br>"+ nota;
	}
	

	//omar es el de menor nota
	function nota_menor(json){
	var out= "<--Estudiante-->";
	var nota = json[0].nota;
	var pos = 0;
	var aux = "";
	 
	for(var i = 0; i<json.length; i++){
		if( json[i].nota <= nota){
			 nota = json[i].nota
			 pos = i;
			 aux = json[pos].nombre
		}
		} 
		document.getElementById('nota-menor').innerHTML = "El estudante con nota menor es:"+ aux +"<br>"+ nota ;
	}

  

        

















