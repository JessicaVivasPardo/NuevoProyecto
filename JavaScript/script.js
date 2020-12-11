






// Alerta de inicio que da la bienvenida al lector

alert("¡BIENVENIDO A CUENTOS PINTADOS!" + " " + "Queremos que vivas tu lectura de una forma agradable");

//Eventos en la lista con jQuery


//.show es para que cada click se muestre el contenido
//.hide es para al dar doble click se esconda el contenido


//Primer capítulo
 $(".cap1").click(function () {
 
     $("#texto-contenido1").css("display","block");
    
 })
 $(".cap1").dblclick(function () {
 
     $("#texto-contenido1").hide();
    
 })
 //Segundo capítulo
 $(".cap2").click(function () {
 
     $("#texto-contenido2").css("display","block");
    
 })
 $(".cap2").dblclick(function () {
 
     $("#texto-contenido2").hide();
    
 })
 
//Tercer capítulo
$(".cap3").click(function () {
 
    $("#texto-contenido3").css("display","block");
    
})
$(".cap3").dblclick(function () {
 
    $("#texto-contenido3").hide();
    
})
//Cuarto capítulo
$(".cap4").click(function () {
 
    $("#texto-contenido4").css("display","block");
    
})
$(".cap4").dblclick(function () {
 
    $("#texto-contenido4").hide();
    
})
//Quinto capítulo
$(".cap5").click(function () {
 
    $("#texto-contenido5").css("display","block");
    
})
$(".cap5").dblclick(function () {
 
    $("#texto-contenido5").hide();
    
})
//Sexto capítulo
$(".cap6").click(function () {
 
    $("#texto-contenido6").css("display","block");
    
})
$(".cap6").dblclick(function () {
 
    $("#texto-contenido6").hide();
    
})
//Séptimo capítulo
$(".cap7").click(function () {
 
    $("#texto-contenido7").css("display","block");
    
})
$(".cap7").dblclick(function () {
 
    $("#texto-contenido7").hide();
    
})
//Octavo capítulo
$(".cap8").click(function () {
 
    $("#texto-contenido8").css("display","block");
    
})
$(".cap8").dblclick(function () {
 
    $("#texto-contenido8").hide();
    
})
//Noveno capítulo
$(".cap9").click(function () {
 
    $("#texto-contenido9").css("display","block");
    
})
$(".cap9").dblclick(function () {
 
    $("#texto-contenido9").hide();
    
})
//Décimo capítulo
$(".cap10").click(function () {
 
    $("#texto-contenido10").css("display","block");
    
})
$(".cap10").dblclick(function () {
 
    $("#texto-contenido10").hide();
    
})

//jQuery para los tres div

//Primer div
$(".sad").mouseover(function(){
    $(this).css("background","red");
})
$(".sad").mouseout(function(){
    $(this).css("background","none");
})

//Segundo div
$(".neutral").mouseover(function(){
    $(this).css("background","yellow");
})
$(".neutral").mouseout(function(){
    $(this).css("background","none");
})

//Tercer div
$(".happy").mouseover(function(){
    $(this).css("background","green");
})
$(".happy").mouseout(function(){
    $(this).css("background","none");
})




