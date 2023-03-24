const elLi = document.querySelectorAll('#gnb > ul > li')
const elMenu = document.querySelectorAll('#gnb > ul > li > a')
const elBar = document.querySelector('.bar');

elLi.forEach(function(aa){ 
   aa.onmouseover = function(){console.log('sadsda')
      elBar.style = `width:${this.offsetWidth}px;
         left:${this.offsetLeft}px`;
   }
   aa.onmouseout = function(){
      elBar.style = `width:0px;
                    left:${this.offsetLeft}px`
    }
})

/* elLi.forEach(function(bb){
   bb.onmouseover = function(){
      if(bb.children[1])
         bb.children[1].style.display = 'block';
      }
      bb.onmouseout = function(){
         if(bb.children[1])
         bb.children[1].style.display = 'none';
                       // if(this.children[1]) this.children[1].style.display = 'none';
   }
}) */


//jQuery
const jLi = $('#gnb > ul > li');
jLi.on('mouseenter',function(){
   $(this).children('.sub').stop().fadeIn(500)
 })
 jLi.on('mouseleave',function(){
   $(this).children('.sub').stop().fadeOut(100)
 })