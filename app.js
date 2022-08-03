
let menu = document.querySelector(".nav-link");
let  hams = document.querySelector(".navbars");
let burger = document.querySelector(".burger");
burger.addEventListener('click',()=>{
    menu.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

})





const accordion = document.getElementsByClassName('contentBx');

      for(i=0; i<accordion.length; i++){
        accordion[i].addEventListener('click', function(){
          this.classList.toggle('active')
        })
      }