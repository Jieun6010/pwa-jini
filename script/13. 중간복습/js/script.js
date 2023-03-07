$(function(){

  function fn1(number){
    var 번호 = parseInt($(`.ex1 .cont${number} .num1`).val())
    var 번호2 = parseInt($(`.ex1 .cont${number} .num2`).val())
    var 결과 = 번호 + 번호2
    $(`.ex1 .cont${number} p`).text(결과)
  }


  $(`.ex1 .cont1 button`).click(function(){
    /*
    var 번호 = parseInt($(`.ex1 .cont1 .num1`).val())
    var 번호2 = parseInt($(`.ex1 .cont1 .num2`).val())
    var 결과 = 번호 + 번호2
    $(`.ex1 .cont1 p`).text(결과)*/  
    fn1(1)
  })
  $(`.ex1 .cont2 button`).click(function(){
    /*
    var 번호 = parseInt($(`.ex1 .cont2 .num1`).val())
    var 번호2 = parseInt($(`.ex1 .cont2 .num2`).val())
    var 결과 = 번호 + 번호2
    $(`.ex1 .cont2 p`).text(결과)*/
    fn1(2)
  }) 


  $('.ex1 button').click(function(){
    var N = $(this).val()
    fn1(N)
    /*
    fn1($(this).val)*/
  })


  
})

