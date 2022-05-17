let carrito = JSON.parse(localStorage.getItem('carrito'));

const contenedorCarrito = document.getElementById('contenedor_carrito');

const cont_tabla = document.getElementById('tablac');



for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    const {name, final_price, small_capsule_image, id} = element
    let carro = `<table class="table">
    <thead><
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
        <div>
        <button id="${id}" class="elimarProd">Eliminar producto</button>
      </div>
      </th>
        <td>${name}</td>
        <td><img src="${small_capsule_image}" class="card-img-top" width="100%">        </td>
        <td>$${final_price.toLocaleString()}</td>
      </tr>
      
    </tbody>
  </table>`;
   cont_tabla.innerHTML += carro
}

function eliminarDelCarrito(e) {
  const boton = e.target 
  const id = boton.getAttribute('id')
  const item = carrito.find((prod) => prod.id === id)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  location.reload(); 
}

const botonesEliminar = document.getElementsByClassName('elimarProd')
for (let i = 0; i < botonesEliminar.length; i++) {
  const element = botonesEliminar[i];
  element.addEventListener('click', eliminarDelCarrito)
}

const total = carrito.reduce((acc, prod) => acc + prod.final_price, 0)
console.log(total)
//para pagar formulario. nombre ap, tel, mail
