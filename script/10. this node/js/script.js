$(function () {
  /* 1---------------------------------------------------------*/
  function func1(contN, el1, el2) {
    $(`.ex1 .cont${contN} div`).removeClass('active')
    el1.addClass('active')
    el2.addClass('active')
  }

  $('.ex1 .cont1 div').click(function () {
    func1(1,$(this),$(this).prev('div'))
  }) //click cont1

  $('.ex1 .cont2 div').click(function () {
    func1(2,$(this),$(this).next('div'))
  }) //click cont2

  $('.ex1 .cont3 div').click(function () {
    $('.ex1 .cont3 div').not($(this)).removeClass('active')
    $(this).toggleClass('active')
    
    
  }) //click cont3

  /* -----------------------------------------------------------*/

  $(`.ex2 cont1 button`).click(function(){
    //$(`.ex2 cont1 button`).not($(this))
    $(`.ex2 .cont1 button`).css({'color' : 'black'})
    $(this).siblings('button').css({'color' : 'red'}) // nextAll / prevAll 합친 말
  }) // cont1 click


  $('.ex2 .cont2 button').click(function(){
    $(this).siblings.not($(this)).css({'color' : 'red'})
  })

  /* ex2 ---------------------------------*/
  /* ex34 ---------------------------------*/

  
  function fn3(col){
    $(this).parent().siblings('article').children('button').css({'color' : 'red'})
  } 
  

  
  $('.ex3 button').click(function(){
    $('.ex3 button').css({'color' : '#000'})
    $(this).parent().siblings('article').children('button').css({'color' : 'red'}) //부모는 둘이 될 수 없기 때문에 아무것도 안적어도된다.
  })
  // 형제찾기



  $('.ex4 button').click(function(){
    $('.ex4 button').css({'font-weight' : 'bold'})
    $(this).parent().siblings('article').children('button').css({'font-weight' : 'bold'})
  })
}) //ready
