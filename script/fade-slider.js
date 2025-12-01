(function(){
    const slides = document.querySelectorAll('.fade-slider__item');
    const ActiveClass = "fade-slider_item-visible";
    let index = 0;
    
    setInterval(function() {
        slides[index].classList.remove(ActiveClass);
        index++;

        if (index + 1 > slides.length){
            index = 0;
        }
         slides[index].classList.add(ActiveClass);
    }, 5000)
}())