function VisualizarContactos(){
fetch("http://www.raydelto.org/agenda.php")
.then(answer => answer.json())
.then(contact => showcontact(contact))
.catch(fail => console.log(fail))

const showcontact = (contact) => {
    console.log(contact)
    let body = ""
    for (var i = 0; i < contact.length; i++){
        body+= "El nombre del contacto es: " + contact[i].nombre + contact[i].apellido + ", y el numero del contacto es: " + contact[i].telefono + "<br></br>";
    }
    document.getElementById("contact").innerHTML = body
}
let contact = {nombre: 'Miguei  ', apellido: 'Pere', telefono: '809-487-5587'};
fetch("http://www.raydelto.org/agenda.php", 
{
 method:'POST', 
 body:JSON.stringify(contact)}
).then( answer => answer.json()).then(
 (answer) => 
{
 console.log(answer); 
}
);

}