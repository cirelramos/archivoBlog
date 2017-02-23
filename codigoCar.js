var ipPublica = "";
var ipp = ""
var cadena = "";
window.hollaback = function(data) {
    ipp = data.ip;
};

window.onload = function(e) {
    cargarInicial();
}

function cargarInicial() {
    obtenerIp();
}


function iniciarEnvio() {
    var urlV = window.location.href;
    // var nav = BrowserDetect.browser;
    var ver = navigator.platform;
    var nav = navigator.userAgent;
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        nav = 'Opera';
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        nav = 'Chrome';
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        nav = 'Safari';
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        nav = 'Firefox';
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        nav = 'IE';
    } else {
        nav = 'unknown';
    }
    var so = navigator.platform + "";
    var soCut = so.slice(0, 45);
    var dv = "";
    var so = so + "  " + dv;
    //     data: ({ 'a': ipp, 'b': so, 'b2': soCut, 'c': nav, 'd': ver, 'e': urlV }),
    cadena = "1&" + ipp;
    cadena = "a=" + ipp + "&b=" + so + "&b2=" + soCut + "&c=" + nav + "&d=" + ver + "&e=" + urlV;
    // cadena = soCut;
    // console.log("window.onload", Date.now() ,window.tdiff);
    console.log(cadena);
    enviarDatos(cadena);
}




function enviarDatos(params) {
    var http = new XMLHttpRequest();
    var url = "https://cirelramos.sytes.net/configuracion/info3.php";
    http.open("POST", url, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            // console.log(http.responseText);
        }
    }
    http.send(params);


}



function obtenerIp() {
    var http = new XMLHttpRequest();
    var url = "https://mathiasbynens.be/demo/ip?callback=hollaback";
    var params = ""
    http.open("GET", url, true);
    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            // console.log(http.responseText);
            respuesta = http.responseText;
            respuesta = respuesta.replace('hollaback({"ip":"', '');
            respuesta = respuesta.replace('"})', '');
            ipp = respuesta;
            iniciarEnvio();
        }
    }
    http.send();
}
