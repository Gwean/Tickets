
function send(){
    var http = new XMLHttpRequest();
    var url = "http://192.168.15.119:5000/send";
    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('Email').value;
    var celular = document.getElementById('Celular').value;
    var asunto = document.getElementById('Asunto').value;
    var mensaje = document.getElementById('Mensaje').value;
    var archivos = document.getElementById('Archivos').files[0];
    http.open("POST", url, true);

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) { 
           //aqui obtienes la respuesta de tu peticion
           alert(http.responseText);
        }
    }
    form = new FormData();
    let x = JSON.stringify({
        "name": nombre,
        "email": email,
        "phone": celular,
        "subject": asunto,
        "message": mensaje,
    });
    form.append("data",x)
    form.append("file",archivos)
    console.log(x);
    http.send(form);
}
