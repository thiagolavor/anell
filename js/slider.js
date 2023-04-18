var sliderItems = document.querySelectorAll('.slider-item');
var sliderBulletsContainer = document.querySelector('.slider-bullets');
var sliderPrevButton = document.querySelector('.slider-prev');
var sliderNextButton = document.querySelector('.slider-next');
var currentImage = 0;
var sliderInterval = setInterval(nextSlide, 3000);

// Cria as bolinhas indicadoras
for (var i = 0; i < sliderItems.length; i++) {
  var bullet = document.createElement('div');
  bullet.classList.add('slider-bullet');
  if (i === currentImage) {
    bullet.classList.add('active');
  }
  bullet.addEventListener('click', function() {
    currentImage = i;
    setSlide(currentImage);
  });
  sliderBulletsContainer.appendChild(bullet);
}

function nextSlide() {
  currentImage++;
  if (currentImage >= sliderItems.length) {
    currentImage = 0;
  }
  setSlide(currentImage);
}

function prevSlide() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = sliderItems.length - 1;
  }
  setSlide(currentImage);
}

function setSlide(slideIndex) {
  sliderItems.forEach(function(item, index) {
    if (index === slideIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  document.querySelectorAll('.slider-bullet').forEach(function(bullet, index) {
    if (index === slideIndex) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
}


// $(document).ready(function(){
//   $('.slick-slider').slick({
//     slidesToShow: 3, // número de imagens visíveis simultaneamente
//     slidesToScroll: 1, // número de imagens que o carrossel percorre ao avançar ou retroceder
//     autoplay: true, // ativa o modo autoplay
//     autoplaySpeed: 2000, // velocidade de transição automática entre as imagens em milissegundos
//     arrows: true, // ativa as setas de navegação
//     prevArrow: '<button type="button" class="slick-prev">Previous</button>', // personaliza o botão de voltar
//     nextArrow: '<button type="button" class="slick-next">Next</button>', // personaliza o botão de avançar
//     responsive: [
//       {
//         breakpoint: 768, // breakpoint para telas menores
//         settings: {
//           slidesToShow: 2 // número de imagens visíveis simultaneamente para telas menores
//         }
//       },
//       {
//         breakpoint: 576, // breakpoint para telas ainda menores
//         settings: {
//           slidesToShow: 1 // número de imagens visíveis simultaneamente para telas ainda menores
//         }
//       }
//     ]
//   });
// });
