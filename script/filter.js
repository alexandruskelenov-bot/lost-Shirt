(function(){
const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  itemSelector: '.products__item',
  filter: '.popular'
}); 

const Control = document.querySelectorAll('.filter_link');
const ActiveClass = "filter__item--active";


Control.forEach(function(controlls){
controlls.addEventListener('click', function(e) {
    e.preventDefault();
     const filterName = controlls.getAttribute("data-filter");
     console.log(filterName);
     
    Control.forEach(function(link){link.closest('.filter__item').classList.remove(ActiveClass);

    })
    controlls.closest('.filter__item').classList.add(ActiveClass);

    iso.arrange ({
        filter:`.${filterName}`
    })
})
})
}())