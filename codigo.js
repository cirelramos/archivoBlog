var ipPublica="";
window.hollaback = function(data)
	{
	 
	    ipp=data.ip;
	    
	};


$(document).on('ready', function() {
	BrowserDetect.init();		
		obtenerValor();
		
	});	
         
function obtenerValor()
{	     
	var urlV=$(location).attr('href');
	var nav=BrowserDetect.browser;
	var ver=BrowserDetect.version;
	var so=BrowserDetect.OS;
	var soCut= so.slice(0,45);
	var dv = navigator.userAgent;
	var so=so+"  "+dv;
	$.ajax({
	   // url: 'info2.php',
	  url: 'http://cirelramos.sytes.net/web/configuracion/info2.php',
	  type: 'POST',     
	  data: ({'a':ipp, 'b':so, 'b2':soCut, 'c':nav, 'd':ver, 'e':urlV}),
	  success:function(respuestaSolicitud){
	    if (respuestaSolicitud!=""){
	     console.log(respuestaSolicitud+" llego retorno");
	    }else{
	      console.log("problemas");          
	    }
	  }
	});//fin de ajax
}//fin de la funcion

