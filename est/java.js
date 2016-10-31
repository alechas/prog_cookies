function Ingresar()
{

  var pagina = "Nexo.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: {queHago: "LlamarServidor", us: $("#us") , pass: $("#pass") },
        async: true
        })
        .then(
			  function(respuesta) {
    				alert( respuesta );
  			}, 
  		function(respuesta) {
    			alert( respuesta );
  			}
		);
        
}