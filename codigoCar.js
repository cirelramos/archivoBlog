var ipPublica = "";
var ipp = ""
var cadena = "";
var getJSON = function(url, successHandler, errorHandler) {
  var xhr = typeof XMLHttpRequest != 'undefined' ?
    new XMLHttpRequest() :
    new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('get', url, true);
  xhr.onreadystatechange = function() {
    var status;
    var data;
    // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
    if (xhr.readyState == 4) { // `DONE`
      status = xhr.status;
      if (status == 200) {
        data = JSON.parse(xhr.responseText);
        successHandler && successHandler(data);
      } else {
        errorHandler && errorHandler(status);
      }
    }
  };
  xhr.send();
};
// window.hollaback = function(data) {
//     ipp = data.ip;
// };
window.onload = function(e) {
  cargarInicial();
}

function cargarInicial() {
  // obtenerIp();
  iniciarEnvio();
}

function iniciarEnvio() {
  var urlActualy = window.location.href;
  // var navegador = BrowserDetect.browser;
  var versionSystem = navigator.platform;
  var navegador = navigator.userAgent;
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    navegador = 'Opera';
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    navegador = 'Chrome';
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    navegador = 'Safari';
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    navegador = 'Firefox';
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    navegador = 'IE';
  } else {
    navegador = 'unknown';
  }
  var versionSystemCut = navigator.platform + "";
  var soCut = versionSystem.slice(0, 45);
  var dv = "";
  var versionSystemCut = versionSystemCut + "  " + dv;
  //     data: ({ 'a': ipp, 'b': so, 'b2': soCut, 'c': nav, 'd': ver, 'e': urlActualy }),
  cadena = "1&" + ipp;
  cadena = "a=" + ipp + "&b=" + versionSystemCut + "&b2=" + soCut + "&c=" + navegador + "&d=" + versionSystem + "&e=" + urlActualy ;
  
  
  var url2 = "https://ip.cirelramos.com.ve/json";
  respuestaX = ""
  jsonObj = ""
  // Definimos la URL que vamos a solicitar via Ajax
  var ajax_url = url2;
  // Definirmos los parámetros que vamos a enviar
  var params = "";
  // Añadimos los parámetros a la URL
  ajax_url += '' + params;
  // Creamos un nuevo objeto encargado de la comunicación
  var ajax_request = new XMLHttpRequest();
  // Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
  ajax_request.onreadystatechange = function() {
    // readyState es 4
    if (ajax_request.readyState == 4) {
      // Analizaos el responseText que contendrá el JSON enviado desde el servidor
      jsonObj = JSON.parse(ajax_request.responseText);
      // var jsonObj = ajax_request.responseText
      // La variable jsonObj ahora contiene un objeto con los datos recibidos      
      var ip =jsonObj.ip;
      var hostname=jsonObj.hostname;
      var country=jsonObj.country;
      var city=jsonObj.city;
      cadena = "a=" + ip + "&htn=" + hostname + "&country=" + country +  "&city=" + city + "&b=" + versionSystemCut + "&b2=" + soCut + "&c=" + navegador + "&d=" + versionSystem + "&e=" + urlActualy ;      
      enviarDatos(cadena);
      console.log(cadena);
    }
  }
  // Definimos como queremos realizar la comunicación
  ajax_request.open("GET", ajax_url, true);
  //Enviamos la solicitud
  respuestaX = ajax_request.send();
}

function enviarDatos(params) {
  var http = new XMLHttpRequest();
  var url = "https://www.cirelramos.com.ve/configuracion/info3.php";
  http.open("POST", url, true);
  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.onreadystatechange = function() { //Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
    }
  }
  http.send(params);
}
// function obtenerIp() {
//     var http = new XMLHttpRequest();
//     var url = "https://mathiasbynens.be/demo/ip?callback=hollaback";
//     var params = ""
//     http.open("GET", url, true);
//     //Send the proper header information along with the request
//     http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     http.onreadystatechange = function() { //Call a function when the state changes.
//         if (http.readyState == 4 && http.status == 200) {
//             // console.log(http.responseText);
//             respuesta = http.responseText;
//             respuesta = respuesta.replace('hollaback({"ip":"', '');
//             respuesta = respuesta.replace('"})', '');
//             ipp = respuesta;
//             iniciarEnvio();
//         }
//     }
//     http.send();
// }
