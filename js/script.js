
function  changed (value){
  const target = document.querySelectorAll('[data-anime]');
  target.forEach(function(element){element.classList.remove("animate")})
  if ( value == "option-history"){
    document.getElementById("human").style.display = "none"
    document.getElementById("history").style.display = "block"
    document.getElementById("terra").style.display = "none"
    window.location.href='#history'
  }
  else if (value == "option-human"){
    document.getElementById("human").style.display = "block"
    document.getElementById("history").style.display = "none"
    document.getElementById("terra").style.display = "none"
    window.location.href='#human'
  }
  else if (value == "option-terra"){
    document.getElementById("human").style.display = "none"
    document.getElementById("history").style.display = "none"
    document.getElementById("terra").style.display = "block"
    window.location.href='#terra'
  }
  
}



document.addEventListener("DOMContentLoaded",() => {      
    const target = document.querySelectorAll('[data-anime]');
    target 
    const animationClass = 'animate';
    
    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 3.95) / 4);
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
        } 
      })
    }
    
    animeScroll();
    
    if(target.length) {
      window.addEventListener('scroll',function(){animeScroll()});
    }


})

