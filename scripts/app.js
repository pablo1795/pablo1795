/* ===== FUNCIONES PARA EL MENU DE NAVEGACION ===== */
window.addEventListener('scroll', function () {
  const header = MenuNavegacion;
  // const header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 0)
});

function menuToggle() {
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

/* ===== FUNCION PARA EXPNDIR LA CARD DE LA SECCION EXPERIENCIAS ===== */

function expandirCard(EV) {
  // Se obtiene el botón que se ha pulsado
  const boton = event.target;

  // Se obtiene el div padre de la card
  const card = boton.parentNode;

  const contenido = card.querySelector('#Experiencias .card-contenido');

  if (contenido.style.maxHeight) {
    contenido.style.maxHeight = null;
    boton.textContent = '➕';
  } else {
    contenido.style.maxHeight = contenido.scrollHeight + 'px';
    boton.textContent = '➖';
  }
}

/* ===== FUNCIONES LA VENTANA MODAL DE TECNOLOGIAS ===== */

const storeStudies = [
  {
    _id: 0,
    name: 'Certificado pendiente en cargar',
    imageName: '',
  },
  {
    _id: 1,
    name: 'argentina progama 4.0',
    imageName: 'arg_programa1.png',
  },
  {
    _id: 2,
    name: 'rolling code school',
    imageName: 'rolling_code.png',
  },
  {
    _id: 3,
    name: 'argentina progama 4.0 Páginas web',
    imageName: 'arg_programa2.png',
  },
  {
    _id: 4,
    name: 'argentina progama 4.0 Aplicaciones móviles',
    imageName: 'arg_programa3.png',
  },
  {
    _id: 5,
    name: 'certificado 5',
    imageName: '',
  },
];

function abrirModal(id) {
  MiModal.classList.add('active');

  const estudio = storeStudies.find(e => e._id === id);
  document.querySelector('#MiModal h3').innerHTML = estudio.name;

  const imagen = estudio.imageName || 'error_certificdo.png'

  document.querySelector('#MiModal img').src = './images/certificados/' + imagen;
}

function cerrarModal() {
  MiModal.classList.remove('active');
}
