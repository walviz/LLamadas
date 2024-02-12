
// limpiar el el btn guion y lo que esta en observaciones
const btnDeleteGuiones = document.getElementById('btnDeleteGuiones');
btnDeleteGuiones.addEventListener('click',()=>{
  document.getElementById("guiones").selectedIndex = "";
  document.getElementById("observaciones").value ="";
})


// eliminar espacios y :
limpiarEntrada(Legado);
limpiarEntrada(IdLlamada);
//limpiarEntrada(Gis);
limpiarEntrada(CC);
limpiarEntrada(Entra);
limpiarEntrada(Sale);
limpiarEntrada(Legado2);
function limpiarEntrada(input) {
  input.addEventListener("input", e => {
    let string = e.target.value;
    string = string.replace(/[ :	)]/g, "");
    e.target.value = string;
  });
}

// funcion para evitar ctrl+s
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); // evita el comportamiento predeterminado del navegador
    // código para guardar la información o enviarla al servidor
  }
});

// convertir a mayusculas
function mayus(e) {
  e.value = e.value.toUpperCase(); 
}

//fecha para gdi
function fecha(){
  var fecha = new Date();
  var year = fecha.getFullYear();
  var mes=fecha.getMonth()+1;
  var dia=diaFecha(fecha.getDate());
  navigator.clipboard.writeText(year+"-0"+mes+"-"+dia);
}

// con esta funcion el texto queda selecionado
function copyToClipBoard(parametro,idbt,idparametro) {
  var texto = document.getElementById(parametro);
  texto.select();
  document.execCommand("copy");
  /*document.getElementById(idbt).innerHTML ="Copiado!";
  setTimeout(function(){
    document.getElementById(idbt).innerHTML =idparametro
  },400)*/
}

//borra un solo texto
function deliteTextbox(param,param2){
  document.getElementById(param).value = "";
  var input = document.getElementById(param);
  input.focus();
  document.getElementById(param2).value = "";
}

//borra todo
function borrarTodo(){
  var elementos= ["Caso","IdLlamada","Legado","Gis","CC","Entra","Sale","nota","Legado2"];

  for(let i=0;i<elementos.length;i++){
    var item=elementos[i];
    document.getElementById(item).value = "";
  }
  document.getElementById("guiones").selectedIndex = "";
  document.getElementById("observaciones").value = "Motivo: "+"\n" +
  "Observaciones: "
}

//generar
function capturarTodo() {
  let caso = document.getElementById("Caso").value;
  let llamada = document.getElementById("IdLlamada").value;
  let legado = document.getElementById("Legado").value;
  let gis = document.getElementById("Gis").value;
  let cc = document.getElementById("CC").value;
  let entra = document.getElementById("Entra").value;
  let sale = document.getElementById("Sale").value;
  let observaciones = document.getElementById("observaciones").value;
  let fecha = new Date();
  //enviar toda la informacion capturada  a la plantilla
  document.getElementById("plantilla").value =
    "Fecha: " + converMonth(fecha.getMonth()) +"-" +diaFecha(fecha.getDate()) +"\n" +
    "Prueba SMNET: " +entra +"\n" +
    "Nombre: " + caso + "\n" +
    "ID llamada: " +  llamada + "\n" +
    "ID servicio: " + legado +"\n" +
    "Direccion: " +gis +"\n" +
    "Cedula: " +cc +"\n" +
    "Telefono: " +sale +"\n" +
     observaciones + "\n" +
    "Login: Walvizva";
  copyToClipBoard("plantilla");
  document.getElementById("btGenerar").innerHTML ="Generado!";
  setTimeout(resGenerar,1000);
 
}

//funcion notificacion de copiado temporal
function resGenerar(){
  document.getElementById("btGenerar").innerHTML ="Generar"
}

function resMSS(){
  document.getElementById("btMssP").innerHTML ="N2"
}


// capturar sintexto
function captura(parametro) {
  var codigoACopiar = document.getElementById(parametro);
  navigator.clipboard.writeText(codigoACopiar.value);
}

//convertir numero del mes en mes texto

function converMonth(mes){
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  return meses[mes];
}

function diaFecha (dia){
if(dia<10){
  return "0"+dia
}else{
  return dia
}
}

//para plantilla N2
function capturarTodoM6(){
  document.getElementById("btMssP").innerHTML ="Generado!";
  let caso = document.getElementById("Caso").value;
  let llamada = document.getElementById("IdLlamada").value;
  let legado = document.getElementById("Legado").value;
  let gis = document.getElementById("Gis").value;
  let cc = document.getElementById("CC").value;
  let entra = document.getElementById("Entra").value;
  let sale = document.getElementById("Sale").value;
  let fecha = new Date();
  let observaciones = document.getElementById("observaciones").value;
  document.getElementById("plantilla").value =
    "Prueba SMNET: " +entra +"\n" +
    "Nombre: " + caso + "\n" +
    "ID llamada: " +  llamada + "\n" +
    "ID servicio: " + legado +"\n" +
    "Direccion: " +gis +"\n" +
    "Cedula: " +cc +"\n" +
     observaciones + "\n";
    copyToClipBoard("plantilla");
    setTimeout(resMSS,1000);
}


//para plantilla Sac
function capturarTodoSac(){
  document.getElementById("btMssP").innerHTML ="Generado!";
  let caso = document.getElementById("Caso").value;
  let llamada = document.getElementById("IdLlamada").value;
  let legado = document.getElementById("Legado").value;
  let gis = document.getElementById("Gis").value;
  let cc = document.getElementById("CC").value;
  let entra = document.getElementById("Entra").value;
  let sale = document.getElementById("Sale").value;
  let fecha = new Date();
  let observaciones = document.getElementById("observaciones").value;
  document.getElementById("plantilla").value =
    "Nombre: " + caso + "\n" +
    "Direccion: " +gis +"\n" +
    "Cedula: " +cc +"\n" +
     observaciones + "\n";
    copyToClipBoard("plantilla");
    setTimeout(resMSS,1000);
}


//para plantilla Reportes 
function capturarReporte(){
  document.getElementById("btMssP").innerHTML ="Generado!";
  let llamada = document.getElementById("IdLlamada").value;
  let observaciones = document.getElementById("observaciones").value;
  document.getElementById("plantilla").value = llamada + " -- " + observaciones ;
    copyToClipBoard("plantilla");
    setTimeout(resMSS,1000);
}




//guiones CRs
function selecionCr(){
  let opcion = document.getElementById("gestionCr").value;

  switch(opcion){
    case "s":
      document.getElementById("notaCr").value ="";
      break; 
    case "0":
      document.getElementById("notaCr").value ="Incidencias Soporte Aplicaciones.NCA.Cumplir/ Cerrar pedido. Cerrar MSS - CRM - GTC";
      break;   
    case "1":
      document.getElementById("notaCr").value = "Incidencias Soporte Aplicaciones.NCA.Corrección Datos.Cargar pedido(s) a Click";
      break;
    case "2":
      document.getElementById("notaCr").value ="Incidencias Soporte Aplicaciones.NCA.Corrección Datos.Cargar pedido(s) a Click";
      break;
    
    default: false;
  }}



  //Plantillas rescate virtual
function selecionPlantilla(){
  let opcion = document.getElementById("PlatillasRescate").value;
  let llamada = document.getElementById("IdLlamada").value;
  let caso = document.getElementById("Entra").value;
  let legado = document.getElementById("Legado").value;
  let sale = document.getElementById("Sale").value;
  let direccion = document.getElementById("Gis").value;
  let telefono = document.getElementById("Sale").value;
  switch(opcion){
    case "s":
      document.getElementById("notaPlantoilla").value ="";
      break; 
    case "0":
      document.getElementById("notaPlantoilla").value =
      "Login: Walvizva "+ "\n" +
      "Prueba integrada: "+caso+ "\n" +
      "Pedido: "+ "\n" +
      "ID BA: "+ legado+"\n" +
      "ID Llamada: "+ llamada +"\n" +
      "MAC: "+ "\n" +
      "ID de Inconsistencias: N/A "+ "\n" +
      "Id chat: ";
      captura("notaPlantoilla");
      break;   
    case "1":
      document.getElementById("notaPlantoilla").value = 
      "Login: Walvizva "+ "\n" +
      "Prueba integrada: "+ caso+ "\n" +
      "Pedido: "+ "\n" +
      "ID TV: "+ legado+"\n" +
      "ID Llamada: "+ llamada +"\n" +
      "MAC's Deco(s) a activar: "+ "\n" +
      "MAC's Deco(s) a inactivar: "+ "\n" +
      "ID de Inconsistencias: N/A "+ "\n" +
      "Id chat: ";
      captura("notaPlantoilla");
      break;

    case "2":
      document.getElementById("notaPlantoilla").value =
      "Login: Walvizva "+ "\n" +
      "Prueba integrada: "+caso+  "\n" +
      "Pedido: "+ "\n" +
      "ID TV: "+ legado+"\n" +
      "ID Llamada: "+ llamada +"\n" +
      "MAC's Deco(s) a activar: "+ "\n" +
      "ID de Inconsistencias: N/A "+ "\n" +
      "Id chat: ";
      captura("notaPlantoilla");
      break;

      case "3":
      document.getElementById("notaPlantoilla").value =
      "Login: Walvizva "+ "\n" +
      "Número de incidente: "+"\n" +
      "Teléfonos (fijo-celular): "+ sale+ "\n" +
      "Tipo de solicitud: "+"\n" +
      "Ciudad: "+ "\n" +
      "Id de llamada: "+ llamada +"\n" +
      "Motivo: Agilizar visita tecnica"+"\n" +
      "Disponibilidad: ";
      captura("notaPlantoilla");
      break;

      case "4":
      document.getElementById("notaPlantoilla").value =
      "Login: Walvizva "+ "\n" +
      "Elementos afectados: (Dejar en blanco) "+"\n" +
      "Dirección: "+ direccion+ "\n" +
      "Municipio: "+"\n" +
      "Incidentes-Radicado-Queja-orden: "+ "\n" +
      "Tipo de novedad reportada: (Dejar en blanco) "+ "\n" +
      "Contacto: "+ "\n" +
      "Celular contacto: "+ telefono +"\n" +
      "Detalles de la novedad reportada o foto de ser posible: "+"\n" +
      "CC contacto: "+ "\n" +
      "Id llamada: "+ llamada+"\n" +
      "Departamento: ";
      captura("notaPlantoilla");
      break;

      case "5":
      document.getElementById("notaPlantoilla").value =
      "##### **ID Servicio:** "+ legado+"\n" +
      "##### **Nodo/Olt:** "+"\n" +
      "##### **Ciudad:** "+"\n" +
      "##### **Falla que reporta:** "
      captura("notaPlantoilla");
      break;

    default: false;
  }}


//guiones select
function selecion(){
  let opcion = document.getElementById("guiones").value;
  let entra = document.getElementById("Entra").value;
  let legado = document.getElementById("Legado").value;
  let sale = document.getElementById("Sale").value;
  var input = document.getElementById("observaciones");

  switch(opcion){
    case "0":
      document.getElementById("observaciones").value ="Motivo: No navega " +"\n" +"Observaciones: Se verifican conexiones, reinicio de equipo, se cambia canal de navegación   ";
      input.focus();
      break;   
    case "1":
      document.getElementById("observaciones").value ="Motivo: Intermitencia BA" +"\n" +"Observaciones: Se verifican conexiones, reinicio de equipo, se cambia canal de navegación    ";
      input.focus();
      break;
    case "2":
      document.getElementById("observaciones").value ="Motivo: Servicios suspendidos";
      input.focus();
      break;
    case "3":
      document.getElementById("observaciones").value ="Motivo: Televisión sin señal " +"\n" +"Se verifican conexiones,  se refrescan decodificadores, se reinicia de fabrica,";
      input.focus();
        break;
    case "4":
      document.getElementById("observaciones").value = "Motivo: Imagen pixelada" +"\n" +"Se verifican conexiones,  se refrescan decodificadores, se reinicia de fabrica, ";
      input.focus();
        break;
    case "5":
      document.getElementById("observaciones").value = "Motivo: No funciona la telefonia" +"\n" +"Se verifican conexiones,  se reaprovisiona TOIP, se reinicia CM,  ";
      input.focus();
        break;
    case "6":
      document.getElementById("observaciones").value = "Motivo: Faltan canales de televisión " +"\n" +"Se verifican conexiones,  se refrescan decodificadores, se reinicia de fabrica, ";
      input.focus();
      break;
    case "7":
      document.getElementById("observaciones").value = "Motivo: Se realiza cambio de contraseñá wifi ";
      input.focus();
        break;
    case "8":
      document.getElementById("observaciones").value = "Motivo: Información de factura " +"\n" +" Observaciones:Se brinda información de los valores facturados ";
      input.focus();
      break;
    case "9":
      document.getElementById("observaciones").value ="Observaciones: Usuario solicita retiro del servicio  ";
      input.focus();
      break;
    case "10":
      document.getElementById("observaciones").value ="Observaciones: Se reagenda visita técnica  ";
      input.focus();
      break;
    case "11":
      document.getElementById("observaciones").value =" Observaciones: Se brinda información de la agenda ";
      input.focus();
      break;
    case "12":
      document.getElementById("observaciones").value ="solicita rebajar el precio de la factura";
      input.focus();
        break;
    case "13":
      document.getElementById("observaciones").value ="Motivo= Reconexión por pago " +"\n" +"EstadoDeLaOrden= En Proceso";
        break;
    case "14":
      document.getElementById("observaciones").value ="Se deja en el grupo Agendamiento";
        break;
    case "15":
      document.getElementById("observaciones").value = "Buen día, compa el nscid xxxx que nos indicas nos registra con un serial totalmente diferente al que nos indicas, se debe validar correctamente la información del equipo o legalizarlo con técnico en terreno";
      break;
    case "16":
      document.getElementById("observaciones").value = "Buen día, compa no se puede realizar corrección en OSS ya que actualmente servicio se encuentra suspendido por falta de pago Prueba Integrada:"
      input.focus();
      break;
    case "17":
      document.getElementById("observaciones").value = "Buen día, no se puede ingresar equipo ya que los Lite Zapper no se puede ingresar en una oferta NOV Android Trio, se debe enviar con premisas para cambio de equipo ";
      copyToClipBoard("observaciones");
      break;
    case "18":
      document.getElementById("observaciones").value = "Buen dia, se devuelve caso ya que el equipo: " +sale +" que notifican retirar no esta en oss, por favor validar cuales son los equipos que salen";
      copyToClipBoard("observaciones");
      break;
    case "19":
      document.getElementById("observaciones").value = "Buen día, no se puede asociar ya que servicio se encuentra bajo una promoción asociada diferente, se debe validar con servicio al cliente para en caso que aplique, realizar el correcto empaquetamiento del servicio. ";
      copyToClipBoard("observaciones");
      break;
    case "20":
      document.getElementById("observaciones").value ="Buen dia, compa no nos llenaste la plantilla completamente, falta el id de la llamada para realizar cualquier modificación desde nuestra área, se debe montar nuevamente y con los datos solicitados en la plantilla.";
      copyToClipBoard("observaciones");
      break;
    case "21":
      document.getElementById("observaciones").value = "Buen dia, compa no se puede asociar la telefonía al CM que nos indicas ya que este pertenece al id servicio xxx y al ser empresa, se manejan infraestructuras diferentes, si hay que asociar la to, se debe validar con premisas y verificar dicho equipo. ";
      break;
    case "22":
      document.getElementById("observaciones").value ="Buen dia, equipo que nos indicas " + entra +" ya aparece en el oss del usuario, para cargar paquete de canales en los decodificadores se debe verificar con rescate virtual o lideres.Prueba Integrada: ";
      input.focus();
      break;
    case "23":
      document.getElementById("observaciones").value = "Buen dia, compa no se pueden eliminar la cantidad de equipos que nos indicas ya que usuario tiene contratado 4 equipos no se puede dejar los 3 que nos indicas, para eliminar equipo sobrante se debe validar con SAC, para poder legalizar la totalidad de equipos en oss";
      break;
    case "24":
      document.getElementById("observaciones").value = "Buen dia, desde nuestra area no se realizan reconexiones de servicio, se debe validar con servicio al cliente.";
      copyToClipBoard("observaciones");
      break;
    case "25":
      document.getElementById("observaciones").value = "Buen día, servicio aparece con los equipos que nos indicas en OSS Prueba Integrada  xxx, no hay inconsistencia. se debe validar con rescate virtual o lideres si pueden cargar paquete de canales ya que cuenta con pedidos en proceso ";
      break;
    case "26":
      document.getElementById("observaciones").value ="Buen día, equipo " +entra +" que nos indicas ya aparece en el oss del usuario, no hay inconsistencia, prueba integrada ";
        break;
    case "s":
      document.getElementById("observaciones").value ="";
      break;
    case "27":
      document.getElementById("observaciones").value ="Buen día, compa no se pueden ingresar equipo que nos indicas ya que usuario tiene contratado 3 equipos no 4 como nos indicas en el formulario, para agregar equipo  se debe validar con SAC, para poder legalizar la totalidad de equipos en OSS";
      copyToClipBoard("observaciones");
      break;
    default: false;
  }}


/*LocalStorage*/

// guardar datos en local storage
var btsave = document.getElementById("btSavePass");
btsave.addEventListener("click", savePass);

function savePass() {
  let savered = document.getElementById("passRed").value;
  let saveWts = document.getElementById("passWts").value;
  let saveMss = document.getElementById("passMss").value;
  let saveElite = document.getElementById("passElite").value;
  let saveFenix = document.getElementById("passFenix").value;
  localStorage.setItem("red", savered);
  localStorage.setItem("wts", saveWts);
  localStorage.setItem("mss", saveMss);
  localStorage.setItem("elite", saveElite);
  localStorage.setItem("fenix", saveFenix);
  console.log(localStorage.getItem("red","wts","mss","elite","fenix"));
}

//cargar info en input de opciones
document.addEventListener("DOMContentLoaded", cargarValores);

function cargarValores() {
  var savedRed = localStorage.getItem("red");
  var saveWts = localStorage.getItem("wts");
  var saveMss = localStorage.getItem("mss");
  var saveElite = localStorage.getItem("elite");
  var saveFenix = localStorage.getItem("fenix");
  if (savedRed) {
    document.getElementById("passRed").value = savedRed;
    
  }
  if (saveWts) {
    document.getElementById("passWts").value = saveWts;
    
  }
  if (saveMss) {
    document.getElementById("passMss").value = saveMss;
    
  }
  if (saveElite) {
    document.getElementById("passElite").value = saveElite;
    
  }
  if (saveFenix) {
    document.getElementById("passFenix").value = saveFenix;
    
  }
}


/*funcion asignar contrasenas a los botones*/

document.getElementById("btRed").addEventListener("click", () => asignarCopiar("red"));
document.getElementById("btMss").addEventListener("click", () => asignarCopiar("mss"));
document.getElementById("btWts").addEventListener("click", () => asignarCopiar("wts"));
document.getElementById("btElite").addEventListener("click", () => asignarCopiar("elite"));
document.getElementById("btFenix").addEventListener("click", () => asignarCopiar("fenix"));

function asignarCopiar(valor) {
  var savedValue = localStorage.getItem(valor);
  if (savedValue) {
    navigator.clipboard.writeText(savedValue)
  }
}


const excepcion ={
  "Excepción - ActualizarInventarioCompletarBA_TOIP":"Incidencias Soporte Aplicaciones.NCA.Cumplir/ Cerrar pedido. Cerrar MSS - CRM - GTC",
  "Pedido con excepción Dom":"Incidencias Soporte Aplicaciones.NCA.Corrección Datos.Cargar pedido(s) a Click",
  "Excepción - ConsultarDatosGestionOrden":"Incidencias Soporte Aplicaciones.NCA.Corrección Datos.Cargar pedido(s) a Click"
}

const activaciones ={
  "Corregir ID Legado":"Activaciones Fijo.Cumplir/ Cerrar Pedido.Integración Plataformas.Legalización Servicios",
  "Error de facturación":"	Activaciones Fijo. Reconfiguracion.Open Reconfiguracion",
  "Legalizar cambio de numero":"Activaciones Fijo.Cumplir/ Cerrar Pedido.Integración Plataformas.Legalización Servicios",
  "Legalizar servicios":"Activaciones Fijo.Cumplir/ Cerrar Pedido.Integración Plataformas.Legalización Servicios",
  "No permite cerrar pedido":"	Activaciones Fijo.Cumplir/ Cerrar Pedido.Integración Plataformas.Legalización Servicios",
  "Portafolio mal migrado / Corregir marquilla de Redco a HFC":"	Activaciones Fijo.Cumplir/ Cerrar Pedido.Integración Plataformas.Legalización Servicios"
}

