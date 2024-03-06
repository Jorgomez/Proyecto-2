const products = [
  {
    name: 'Crema Facial',
    price: 13,
    stars: 4,
    reviews: 50,
    type: 'cremas de cuerpo',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268880/Proyecto/10_dvsuue.jpg'
  },
  {
    name: 'Crema de afeitar',
    price: 15,
    stars: 2,
    reviews: 40,
    type: 'cremas de cara',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268879/Proyecto/5_cqaaoi.jpg'
  },
  {
    name: 'Crema Corporal',
    price: 20,
    stars: 5,
    reviews: 250,
    type: 'cremas de cuerpo',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268879/Proyecto/8_sahpwp.jpg'
  },
  {
    name: 'Exfoliante facial',
    price: 6,
    stars: 1,
    reviews: 20,
    type: 'cremas de cara',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268879/Proyecto/6_ffkfpd.jpg'
  },
  {
    name: 'Pack weekend',
    price: 23,
    stars: 5,
    reviews: 100,
    type: 'cremas de cuerpo',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268878/Proyecto/2_pan85h.jpg'
  },
  {
    name: 'cremas hombre',
    price: 15,
    stars: 4,
    reviews: 30,
    type: 'cremas de cara',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705490855/Proyecto/351258844_975717153581312_6812977867332893095_n_l4losd.jpg'
  },
  {
    name: 'Perfume unisex',
    price: 7,
    stars: 5,
    reviews: 50,
    type: 'perfumes',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705490854/Proyecto/351233815_266274355956173_172476443660722501_n_o5d66b.jpg'
  },
  {
    name: 'Perfume mujer',
    price: 13,
    stars: 3,
    reviews: 10,
    type: 'perfumes',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705490854/Proyecto/350984296_1464968060980653_4653910028423331541_n_1_q3tolz.jpg'
  },
  {
    name: 'Colonia facial',
    price: 6,
    stars: 2,
    reviews: 3,
    type: 'perfumes',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705268878/Proyecto/7_lznkba.jpg'
  },
  {
    name: 'Tu weekend',
    price: 24,
    stars: 3,
    reviews: 70,
    type: 'perfumes',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705490854/Proyecto/351412559_617555436981789_8830581468430993999_n_bzle08.jpg'
  },

  {
    name: 'Make up Face',
    price: 14,
    stars: 2,
    reviews: 250,
    type: 'maquillaje',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705496774/Proyecto/335774021_1600902263744266_4401801338696684034_n_a6z2ob.jpg'
  },

  {
    name: 'Quita maquillaje',
    price: 15,
    stars: 5,
    reviews: 50,
    type: 'maquillaje',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705496772/Proyecto/335766445_3288397668079832_2382647230999762895_n_zl66op.jpg'
  },
  {
    name: 'Sombras parpado',
    price: 20,
    stars: 1,
    reviews: 4,
    type: 'maquillaje',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705496772/Proyecto/333389225_1285867822003482_2163798158846576912_n_fjzkjm.jpg'
  },
  {
    name: 'Spray brillo cara',
    price: 6,
    stars: 4,
    reviews: 30,
    type: 'maquillaje',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705496772/Proyecto/334636925_724674946058560_4065945956876309900_n_dv6so4.jpg'
  },
  {
    name: 'Pack antiojeras',
    price: 23,
    stars: 3,
    reviews: 20,
    type: 'maquillaje',
    image:
      'https://res.cloudinary.com/digcf0lad/image/upload/v1705496772/Proyecto/334531350_3339982029549009_1844386711613624719_n_fnn1l2.jpg'
  }
]

const types = []
let TYPE = ''
let PRICE = 0

// -------create elements----------
// -------header-------s

const header = document.createElement('header')
header.className = 'flex-container'
header.innerHTML = `<img
class="logotipo"
src="https://res.cloudinary.com/digcf0lad/image/upload/v1709645736/Logotipo_jc7qmz-Photoroom.png-Photoroom_oddiwi.png"
alt="logotipo brand"
/>

<form class="search-container">
<input
  type="text"
  class="search-input"
  placeholder="Buscar en catálogo 🔍"
/>

</form>

<nav class="flex-container">
<ul class="flex-container main-nav">
  <li><a href="#tienda">Tienda</a></li>
  <li><a href="#reviews">Reviews</a></li>
  <li><a href="#certificacion">Productos</a></li>
  <li><a href="#info">Contáctanos</a></li>
</ul>
</nav> `

// -------hero---------
const main = document.createElement('main')
main.className = 'main'
// filtros-------------
const sectionfilter = document.createElement('section')
const filterTitle = document.createElement('h3')
filterTitle.textContent = 'Filtra según tus preferencias'
sectionfilter.className = 'filter'
sectionfilter.id = 'filter'
sectionfilter.append(filterTitle)
// ---------tienda-----
const sectionTienda = document.createElement('section')
const titleStore = document.createElement('h2')
const productsStore = document.createElement('div')
sectionTienda.className = 'TIENDA'
productsStore.className = 'tienda'
titleStore.id = 'title'
productsStore.id = 'tienda'
titleStore.textContent = 'Nuestros productos a un click'
sectionTienda.append(titleStore, productsStore)
main.append(sectionfilter, sectionTienda)

// ----------------footer-------------------
const footer = document.createElement('footer')
footer.className = 'flex-container'
footer.id = 'info'
footer.innerHTML = `<ul class="flex-container list">
<h3>Información</h3>
<li><a href="#">Condiciones generales</a></li>
<li><a href="#">Envío</a></li>
<li><a href="#">Política de privacidad</a></li>
<li><a href="#">Política de Cookies</a></li>
<li><a href="#">Aviso legal</a></li>
</ul>
<ul class="flex-container list">
<h3>Mi cuenta</h3>
<li><a href="#">Iniciar sesión</a></li>
<li><a href="#">Historial de compra</a></li>
<li><a href="#">Datos personales</a></li>
<li><a href="#">Historial de compra</a></li>
</ul>
<ul class="flex-container list">
<h3>Enlaces de interés</h3>
<li><a href="#">Contáctanos</a></li>
<li><a href="#">Bajamos los precios</a></li>
<li><a href="#">Productos nuevos
  </a></li>
<li><a href="#">Lo más vendido
  </a></li>
<li><a href="#">Descuento estudiantes</a></li>
</ul>

<ul class="flex-container list">
<h3>Información</h3>
<li><a href="#">Condiciones generales</a></li>
<li><a href="#">Envío</a></li>
<li><a href="#">Política de privacidad</a></li>
<li><a href="#">Política de Cookies</a></li>
<li><a href="#">Aviso legal</a></li>
</ul>

<div class="flex-container list" id="last-list">

<div id="follow-us" >
  <h3>Siguenos</h3>

<a href="#"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1705605070/Proyecto/facebook-apps-icon-free-png_zlqwa9.webp" alt="facebook icon"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1705605070/Proyecto/ca241b8daf67ebf7f2d902104620d3f4_xzuuwm.jpg" alt="Instagram Icon"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1705605118/Proyecto/images_qznzwe.png" alt="Youtube icon"><img src="https://res.cloudinary.com/digcf0lad/image/upload/v1705605070/Proyecto/twitter-social-logotype_y8cocy.svg" alt="Twiter icon"></a>
</div>

<form   action="">
  <h3>Newsletter</h3>
  <input id="email" type="email" placeholder="Ingresa tu correo">
  <input id="button" type="button" value="enviar">

  <input type="checkbox" id="miCheckbox">
<label for="miCheckbox">Acepto las condiciones generales y la política de privacidad</label>
</form>

</div>`

document.body.append(header, main, footer)

// -------------------funcionalidades-------------------
// ----------basics---------
const printProduct = (array) => {
  const productsStore = document.querySelector('.tienda')

  productsStore.innerHTML = ''

  for (const product of array) {
    const producto = document.createElement('article')
    const img = document.createElement('img')
    const nameProducto = document.createElement('h3')
    const price = document.createElement('p')
    const divStars = document.createElement('div')
    const buy = document.createElement('button')

    //  ------ estrellas_____________
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (i <= product.stars) {
        estrella.classList.add('rellena')
      }
      divStars.appendChild(estrella)
    }

    producto.className = 'flex-container producto'
    buy.className = 'anadir'
    img.src = product.image
    nameProducto.textContent = product.name
    divStars.classList.add('estrellas', 'flex-container')
    price.textContent = `$` + product.price
    buy.textContent = 'Añadir al carro'

    producto.append(img, nameProducto, price, divStars, buy)

    productsStore.append(producto)
  }
}

// ------------------------Filtros----------------

// ------------type filter--------------

// limpiando types
const fillTypes = (array) => {
  types.splice(0)
  for (const product of array) {
    if (!types.includes(product.type)) {
      types.push(product.type)
    }
  }
}
fillTypes(products)
//print and event
const createSelect = () => {
  const select = document.createElement('select')
  select.innerHTML = `<option value="" disabled selected>Filtra según tipo</option>`

  for (const type of types) {
    const option = document.createElement('option')
    option.value = type
    option.textContent = type
    select.append(option)
  }
  sectionfilter.append(select)

  select.addEventListener('change', (event) => {
    ;(TYPE = event.target.value), filtrar()
  })
}

const filtrar = () => {
  const arrayFiltrado = []
  for (const product of products) {
    if (TYPE.includes(product.type)) {
      arrayFiltrado.push(product)
    }
  }
  printProduct(arrayFiltrado)
}

filtrar()
createSelect()

// ----------Price filter ------
//elements creation
const divFiltroPrice = document.createElement('div')
const inputPrice = document.createElement('input')
const buttonPrice = document.createElement('button')
inputPrice.placeholder = 'Ingresa $'
inputPrice.type = 'number'
buttonPrice.textContent = 'filtrar por precio'
divFiltroPrice.className = 'divFiltroPrice'

//funciones
divFiltroPrice.append(inputPrice, buttonPrice)
sectionfilter.append(divFiltroPrice)
const filtrarPrice = () => {
  const filtered = []
  for (const product of products) {
    if (product.price <= PRICE) {
      filtered.push(product)
    }
  }
  printProduct(filtered)
}

buttonPrice.addEventListener('click', () => {
  ;(PRICE = inputPrice.value), filtrarPrice(), (inputPrice.value = '')
})

// ------Word filter---------

const filtrarWord = () => {
  const filtered = []
  for (const product of products) {
    if (product.name.toLowerCase().includes(searchInput.value)) {
      filtered.push(product)
    }
  }
  printProduct(filtered)
}

// ---------elements creation------
const divFiltroWord = document.createElement('div')
const searchInput = document.createElement('input')
const searchButton = document.createElement('button')
searchInput.placeholder = 'Buscar en catálogo '
searchButton.textContent = '🔍'
divFiltroWord.className = 'divFiltroWord'

divFiltroWord.append(searchInput, searchButton)
sectionfilter.append(divFiltroWord)

searchButton.addEventListener('click', () => {
  filtrarWord(), (searchInput.value = '')
})

// ----------añadir a carrito---------
// const contador = document.createElement('p')
// contador.textContent = `productos añadidos al carro: ${carrito}`
// sectionfilter.append(contador)
// const comprar = document.querySelectorAll('.anadir')

// -----------Ordenar por precio-  -----------
// const selectOrder = document.createElement('select')
// selectOrder.innerHTML = `<option disabled selected>Ordenar segun precio</option>`
// const optionAsc = document.createElement('option')
// const optionDesc = document.createElement('option')
// optionAsc.textContent = 'low to high'
// optionDesc.textContent = 'high to low'
// selectOrder.append(optionAsc, optionDesc)
// sectionfilter.append(selectOrder)

// selectOrder.addEventListener('click', () => orderByPriceDesc(products))
// function orderByPriceDesc(products) {
//   printProduct(products.sort((a, b) => a.price - b.price))
// }
// // ---------limpiar filtros---------

sectionfilter
// ---------clean filter-------
const cleanButton = document.createElement('button')
const cleanFilter = () => {
  cleanButton.textContent = 'Limpiar Filtros'
  sectionfilter.append(cleanButton)
}
cleanButton.addEventListener('click', () => printProduct(products))
cleanFilter()

printProduct(products)
