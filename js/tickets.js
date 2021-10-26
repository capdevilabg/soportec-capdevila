const timeElapsed = Date.now();
const today = new Date(timeElapsed);        //HAY QUE FORMATEAR PARA PONER LA HORA 
const listaTickets = [];
const rdo = document.getElementById("contenedorTicket")
let estado = true;
let id = 1;
$("#btnEnviar").click(CrearTicket,)

/* --------------------------- Funciones y clases --------------------------- */

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


function pepe() {
    listaTickets.map(function (dato) {
        if (dato.usuario == "ok") {
            console.log("funk")
        }

        return dato;
    });

}


