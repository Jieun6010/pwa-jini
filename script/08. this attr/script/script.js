$(document).ready(function(){
  
  function fn1(el){
    var 숫자 = el.val()
    var 알파벳 = el.attr('data-n')// 속성의 값을 찾겠다는 명령어
    alert(`${숫자} ,${알파벳} `)
  }//fn1


  $('.ex1 button').click(function(){
    fn1($(this))
  })//click

  /* -----------------------------*/
  function fn2(el, con){
    $(`.ex2 .con${con} button`).not(el).css({'colo' : '#000'})
    el.css({'color' : '#F00'})
  } //fn2



  $('.ex2 button').click(function(){
    var con = $(this).val()
    fn2($(this),2)
     
  }) // this(클릭한애)빼고 까매져라!!
  

  /* -----------------------------------------------*/
  
  function fn3(el, con){
    var con = el.attr('data-con')
    
    el.css({'color' : 'red'})
    $(`.ex3 .con${con} span`).not(el).css({'color' : 'blue'})

  }
  
  
  $('.ex3 span').click(function(){
    fn3($(this))
    
  })



/*------------------------------------------------*/


function fn4(){

  var n = $(this).val()//클릭한 버튼의 번호를 가져오겠다. ()안에 무언가라도 넣으면 그 글자를 다 지우고 이걸 넣겠다.
  var bg = $(`.ex4 .con1 .box${n}`).attr('data-bg') //클릭한 번호에 해당하는 박스

  $(`.ex4 .con1 .box${n}`).css({'background' : bg})
  $('.ex4 .con1 div').not($(`.box${n}`)).css({'background' : 'none'})


}



$('.ex4 .con1 button').click(function(){

  var n = $(this).text()//클릭한 버튼의 번호를 가져오겠다. ()안에 무언가라도 넣으면 그 글자를 다 지우고 이걸 넣겠다.
  var bg = $(`.ex4 .con1 .box${n}`).attr('data-bg') //클릭한 번호에 해당하는 박스

  $(`.ex4 .con1 .box${n}`).css({'background' : bg})
  $('.ex4 .con1 div').not($(`.box${n}`)).css({'background' : 'none'})

  
}) // click .ex4 .con1

$('.ex4 .con2 button').click(function(){

  var n = $(this).val()//클릭한 버튼의 값을 가져오겠다. 
  var bg = $(`.ex4 .con1 .box${n}`). //클릭한 번호에 해당하는 박스

  $(`.ex4 .con2 .button${n}`).css({'background' : bg})
  $('.ex4 .con2 .div').not($(`.box${n}`)).css({'background' : 'none'})

  
}) // click .ex4 .con1


$('.ex4 .con1 button').click(function(){
  fn4()
})//con1 버튼 클릭했을때

$('.ex4 .con2 button').click(function(){
  fn4()
})//con2 버튼
















})