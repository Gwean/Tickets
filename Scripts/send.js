function showFormOnly() {
    document.getElementById("ImagenEncabezado").style.display = "block";
    document.getElementById("Formulario").style.display = "block";
    document.getElementById("ElementosEnvio").style.display = "none";
}

function send() {

    document.getElementById("ImagenEncabezado").style.display = "none";
    document.getElementById("Formulario").style.display = "none";
    document.getElementById("ElementosEnvio").style.display = "block";
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("loaderContainer").style.display = "block";
    
    var http = new XMLHttpRequest();
    var url = "http://192.168.15.119:5000/send";
    var nombre = document.getElementById('Nombre').value;
    var email = document.getElementById('Email').value;
    var celular = document.getElementById('Celular').value;
    var asunto = document.getElementById('Asunto').value;
    var mensaje = document.getElementById('Mensaje').value;
    var archivos = document.getElementById('Archivos').files[0];
    http.open("POST", url, true);

    http.onreadystatechange = function () {
        console.log(http.readyState);
        // COMPLETED 
        if (http.readyState == 4) {
            document.getElementById("loaderContainer").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
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
    form.append("data", x)
    form.append("file", archivos)
    console.log(x);
    http.send(form);
}