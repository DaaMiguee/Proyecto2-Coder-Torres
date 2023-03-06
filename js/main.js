const stock = [
    {id: 1, name: "cafetera atma", price: 13000},
    {id: 2, name: "cafetera philips", price: 73000},
    {id: 3, name: "heladera patrick", price: 135000},
    {id: 4, name: "heladera philco", price: 450000},
    {id: 5, name: "licuadora philips", price: 14000},
    {id: 6, name: "licuadora kanji", price: 9000},
];
// funcion para mostrar stock en un alert como string
function recorrido() {
    let stockString = "Stock de productos:\n";
    stock.forEach(iterador => {
    stockString += "ID: " + iterador.id + " - Nombre: " + iterador.name + " - Precio: $" + iterador.price + "\n";
    });
    alert(stockString);
};
//funcion para agregar productos al stock
function addProduct() {
    let name = prompt("Ingrese el nombre del producto");
    let price = prompt("Ingrese el precio del producto");
    let newProduct = {
    id: stock.length + 1,
    name,
    price,
    };
    stock.push(newProduct);
    console.log(stock);
};
//funcion para eliminar productos del stock
function removeProduct() {
    const idToDelete = prompt("Ingrese el id del producto a eliminar");
    const indexToDelete = stock.findIndex(item => item.id == idToDelete);
    if (indexToDelete === -1) {
        alert("El id no existe en el stock");
    }else{
        stock.splice(indexToDelete, 1);
        alert("Producto eliminado")
    };
};
//funcion para buscar un id que coincida en el stock
function busqueda(){
    let entrada2 = prompt("Ingrese el id del producto");
    if (entrada2 == "") {
        alert("Busqueda incorrecta")
    } else {
        let encontrado = stock.find(item => item.id == entrada2);
        alert(` ID: ${encontrado["id"]}\n Nombre: ${encontrado["name"]}\n Precio: $${encontrado["price"]}`);
    }
};
//funcion para buscar por nombre usando filter
function filtrado() {
    let entrada3 = prompt("Buscar por nombre");
    let filtrados = stock.filter((item) => item.name.includes(entrada3.toLowerCase()));
    filtrados.forEach((item) => {
        let mensaje = `
        Id: ${item.id}
        nombre: ${item.name}
        precio: ${item.price}
        `;
    alert(mensaje);
    });
};
function opciones(){
    entrada = prompt(" 1) Ver stock\n 2) Buscar por ID\n 3) Buscar por nombre\n 4) Agregar al stock\n 5) Quitar del stock\n 6) Salir");
}
alert("¡Bienvenido!");
let entrada = prompt(" 1) Ver stock\n 2) Buscar por ID\n 3) Buscar por nombre\n 4) Agregar al stock\n 5) Quitar del stock\n 6) Salir");
while (entrada != "ESC") {
    if (entrada === "1") {
        recorrido();
        opciones();
    }
    else if (entrada === "2"){
        busqueda();
        opciones();
    }
    else if(entrada === "3"){
        filtrado();
        opciones();
    }
    else if (entrada === "4") {
        addProduct();
        alert("Producto agregado")
        opciones();
    }
    else if (entrada ==="5") {
        removeProduct();
        opciones();
    }
    else if (entrada ==="6"){
        alert("¡Hasta la próxima!");
        break;
    }else{
        alert("Opcion no valida")
        opciones();
    }
};