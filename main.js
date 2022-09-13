$(document).ready(function(){
    function F(){
         $('.block').css({ "transform": "rotateY(180deg)" })
    }
    F()
   setTimeout(F,2000 )
   function F2(){
    $('.block').css({ "transform": "rotateZ(180deg)" })
}

setTimeout(F2,4000 )
})