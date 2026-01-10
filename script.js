function initHeroSlider(){
  let slides = document.querySelectorAll(".slider img");
  let dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i){
    slides.forEach(s=>s.classList.remove("active"));
    dots.forEach(d=>d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  showSlide(0); 

  setInterval(()=>{
    index = (index+1)%slides.length;
    showSlide(index);
  },4000);

  dots.forEach((dot,i)=>{ dot.onclick=()=>{ index=i; showSlide(i); } })
}

function initProdukSlider() {
  const slider = document.getElementById("sliderProduk");
  window.slideLeft = function(){ slider.scrollBy({ left: -220, behavior:'smooth' }); }
  window.slideRight = function(){ slider.scrollBy({ left: 220, behavior:'smooth' }); }
}
}
}

