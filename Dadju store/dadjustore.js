
window.addEventListener("resize", function(){
    var banner = document.querySelector('.banner');
    var banner2 = document.querySelector('.banner-1');

    var x = window.matchMedia("(max-width: 500px)")
    myFunction(x)


    function myFunction(x){
        if(x.matches){
            banner.style= "display: none"
            banner2.style = "display: block"
            banner2.classList.add('banner')
        }   
         else{
            banner.style= "display:block"
            banner2.style = "display: none"
            banner2.classList.remove('banner')
         }
         
    }
    

});

let screen = window.matchMedia("(max-width:500px");
var banner = document.querySelector('.banner');
var banner2 = document.querySelector('.banner-1');

screen.addEventListener("change", function(e){
    if(screen.matches){
                banner.style= "display: none"
                banner2.style = "display: block"
                banner2.classList.add('banner')
            } 
     else{
                banner.style= "display:block"
                banner2.style = "display: none"
                banner2.classList.remove('banner')
             }
             
});


var hambuger = document.querySelector('.hamburger');
var sidebar = document.querySelector('.sidebar');
var close = document.querySelector('.close');

hambuger.addEventListener('click', e =>{
    sidebar.classList.toggle("left");
    sidebar.classList.remove("close");
})

close.addEventListener('click', e => {
    sidebar.classList.toggle("close");
})