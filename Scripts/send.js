function send(){
    var http = new XMLHttpRequest();
    var url = "http://192.168.15.119:5000/send";
    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('Email').value;
    var celular = document.getElementById('Celular').value;
    var asunto = document.getElementById('Asunto').value;
    var mensaje = document.getElementById('Mensaje').value;
    var archivos = document.getElementById('Archivos').value;
    http.open("POST", url, true);
    http.setRequestHeader("Access-Control-Allow-Origin", "*");
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.setRequestHeader("X-API-Key", "DC0626B2B448D748889A17C90C3E0355");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) { 
           //aqui obtienes la respuesta de tu peticion
           alert(http.responseText);
        }
    }
    let x = JSON.stringify({
        "name": nombre,
        "email": email,
        "phone": celular,
        "subject": asunto,
        "message": mensaje,
    });
    console.log(x);
    http.send(x);
}