const carrito = [];

function agregarAlCarrito(nombre, precio, cantidad) {
  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
  };

  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  const iconoCarrito = document.querySelector('.fa-shopping-cart');
  iconoCarrito.innerText = `🛒 ${carrito.length}`;
}

document.querySelectorAll('.box .btn').forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombre = boton.parentElement.querySelector('h3').innerText;
    const precio = parseFloat(boton.parentElement.querySelector('.price').innerText.slice(1));
    const cantidad = 1;

    agregarAlCarrito(nombre, precio, cantidad);
  });
});