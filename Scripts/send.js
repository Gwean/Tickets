function send(){
    var http = new XMLHttpRequest();
    var url = "https://soporte.hgtec.com.ar/api/http.php/tickets.json";
    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('Email').value;
    var celular = document.getElementById('Celular').value;
    var asunto = document.getElementById('Asunto').value;
    var mensaje = document.getElementById('Mensaje').value;
    var archivos = document.getElementById('Archivos').value;
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) { 
           //aqui obtienes la respuesta de tu peticion
           alert(http.responseText);
        }
    }
    let x = JSON.stringify({
        "alert": true,
        "autorespond": true,
        "source": "API",
        "name": "Angry User",
        "email": "api@osticket.com",
        "phone": "3185558634",
        "subject": "Testing API",
        "ip": "123.211.233.122",
        "message": "data:text/html,MESSAGE <b>HERE</b>",
        "attachments": [
            {"file.txt": "data:text/plain;charset=utf-8,content"}
        ]
    });
    console.log(x);
    http.send(x);
}