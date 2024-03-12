let Slideindex = 0
autoSlide = () => {
    let i
    let slides = document.getElementsByClassName('mySlides')
    // console.log(slides.length)
    for(i = 0; i < slides.length;i++) {
        // console.log(slides[i])
        slides[i].style.display = 'none'
    }
    Slideindex += 1
    if (Slideindex > slides.length) { // ถ้า Slideindex > ความยาว slide ทั้งหมด
        Slideindex = 1// จับ Slideindex = 0
    }
    slides[Slideindex - 1].style.display = 'block' //slide ตำแหน่งล่าสุด
    dot()
    // console.log(slides[1])
    setTimeout(autoSlide,5000)
},autoSlide()

function dot() {
    let i
    let dots = document.getElementsByClassName('dot')
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[Slideindex-1].className += " active";
}