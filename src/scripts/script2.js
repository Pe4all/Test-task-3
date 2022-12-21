const item = document.getElementsByClassName('menu__list-item');


item[0].addEventListener('click', function(e) {

  item[0].classList.add('active');

  item[1].classList.remove('active');
  item[2].classList.remove('active');
})

item[1].addEventListener('click', function(e) {

    item[1].classList.add('active');

    item[2].classList.remove('active');
    item[0].classList.remove('active');
  })

  item[2].addEventListener('click', function(e) {

    item[2].classList.add('active');

    item[1].classList.remove('active');
    item[0].classList.remove('active');
  })