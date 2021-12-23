

/* carousel */
$(function () {
  $('.tooltip-carousel').popover();

  $('#carousel-servicios-generic').on('slide.bs.carousel', function () {
    $('.tooltip-carousel').popover('hide');
    $(this).find('.caraousel-tooltip-item.active').fadeOut(function () {
      $(this).removeClass('active');
    });
  });

  $('#carousel-servicios-generic').on('slid.bs.carousel', function () {
    var index = $(this).find('.carousel-inner > .item.active').index();
    $(this).find('.caraousel-tooltip-item').eq(index).fadeIn(function () {
      $(this).addClass('active');
    });
  });

  $('.tooltip-carousel').mouseenter(function () {
    $(this).popover('show');
  }).mouseleave(function () {
    $(this).popover('hide');
  });
});


/* ver mas en servicios */

function vermas(id) {
  if (id == "mas") {
    document.getElementById("desplegar").style.display = "block";
    document.getElementById("mas").style.display = "none";
  }
  else if (id == "mas2") {
    document.getElementById("desplegar2").style.display = "block";
    document.getElementById("mas2").style.display = "none";
  }
  else if (id == "mas3") {
    document.getElementById("desplegar3").style.display = "block";
    document.getElementById("mas3").style.display = "none";
  }
  else if (id == "mas4") {
    document.getElementById("desplegar4").style.display = "block";
    document.getElementById("mas4").style.display = "none";
  }




  /* ---------------------------Tickets--------------------------- */


} const timeElapsed = Date.now();
const today = new Date(timeElapsed);        //HAY QUE FORMATEAR PARA PONER LA HORA 
const listaTickets = [];
const rdo = document.getElementById("contenedorTicket")
let estado = true;
let id = 1;
$("#btnEnviar").click(CrearTicket,)



function validarFormulario() {
  if ($("#usuario").val() != "" && $("#contacto").val() != "") {
    return true;
  }
  else {
    return false
  }
}

////CONSTRUCTOR/////
class Ticket {
  constructor(id, usuario, contacto, prioridad, descripcion, tecasig, estado) {
    this.id = id;
    this.usuario = usuario;
    this.contacto = contacto;
    this.fecha = today.toLocaleDateString();
    this.prioridad = prioridad;
    this.descripcion = descripcion;
    this.tecasig = tecasig;
    this.estado = estado;

  }
}

function CrearTicket() {
  if (validarFormulario()) {

    let ticket = new Ticket
      (id,
        $("#usuario").val(),
        $("#contacto").val(),
        $("#priori").val(),
        $("#descripcion").val(),
        $("#tecasig").val())
    listaTickets.push(ticket)
    console.log(listaTickets, ticket)
    id++
    MostrarTablaDeTickets()
  }
  else {
    alert("Debe ingresar un usuario y un contacto")
  }

}


function MostrarTablaDeTickets() {
  $("#contenedorTicket").slideUp(300);

  let tabla = "<table border=1>";
  tabla = tabla + `<tr bgcolor=rgba(98, 87, 160, 0.062);>
    <th>Usuario</th>
    <th>Contacto</th>
    <th>Fecha</th>
    <th>Descripcion</th>
    <th>Prioridad</th>
    <th>Tec.Asignado</th>
    <th>Estado</th></tr>
    `
  for (const elem of listaTickets) {
    tabla = tabla + `<tr>
        <td>  ${elem.usuario}</td>
        <td>  ${elem.contacto}  </td>
        <td>  ${elem.fecha}  </td>
        <td class="prueba" >  ${elem.descripcion}  </td>
        <td>  ${elem.prioridad}  </td>
        <td>  ${elem.tecasig}</td>
        <td>    <button class="btnCerrar" id="est${elem.id}" value"abierto" >Cerrar</button>
</td>
        </tr>`


  }


  tabla = tabla + "</table>"
  $("#contenedorTicket").html(tabla);
  $("#contenedorTicket").slideDown(200);

  $(document).ready(function () {
    $(".btnCerrar").click(pepe)

  });

}
function pepe (){
  alert ("Funcionalidad en construccion , disculpe las molestias")
}



/* Funcion prueba para cambiar de estado en el futuro  */
/* function pepe() {
  listaTickets.map(function (dato) {
    if (dato.usuario == "ok") {
      console.log("funk")
    }

    return dato;
  });

}
 */



