function ejecutar() {

    var client = new WindowsAzure.MobileServiceClient(
        "https://codehour.azure-mobile.net/",
        "CwJETgOpztcdKWrCLrQxHOBOnoAvuF17"
    );

    var item = { 
        autor: document.getElementById("nombre").value, 
        mensaje: document.getElementById("mensaje").value
    };

    client.getTable("mensajes").insert(item);

    alert("Mensaje enviado correctamente, todo bien :) ");

}
