$(document).ready(function () {
  /*   $('button').click(function(){
      alert()
    }) */

  function fn1(num1, num2) {
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var sum = num1 + num2
    var multi = num1 * num2
    var sub = num1 - num2
    var divi = (num1 / num2).toFixed(2)
    var obj = {
      sum,
      multi,
      sub,
      divi,
    }
    return obj
    //console.log(num1,num2);
  }//fn1

  $('.section1 .article1 button').click(function () {
    var num1 = $('.section1 .article1 .p1 input:checked').val()
    var num2 = $('.section1 .article1 .p2 input:checked').val()
    var obj = fn1(num1, num2)
    $('.section1 .article1 .output').text(`${obj.sum}, ${obj.multi}, ${obj.divi}, ${obj.sub}`)
  })

  $('.section1 .article2 button').click(function () {
    var num1 = $('.section1 .article2 .p1 input:checked').val()
    var num2 = $('.section1 .article2 .p2 input:checked').val()
    var { sum, sub, multi, divi } = fn1(num1, num2)
    $('.section1 .article2 .output').text(`${sum}, ${sub}, ${multi}, ${divi}`)
  })

  /* -- 2 -------------------*/
  $('.ex2 input').bind('input', function () {
    var num1 = $('.ex2 .num1').val()
    var num2 = $('.ex2 .num2').val()
    var sum = parseInt(num1) + parseInt(num2)
    $('.ex b').text(sum)
  })

  /* 3---------------------------------------------------*/
  function fn3() {
    var num1 = parseInt($('.ex3 .num').val())
    var num2 = parseInt($('.ex3 .radio input:checked').val())
    var num3 = parseInt($('.ex3 select').val())
    var sum = num1 + num2 + num3
    $('.ex3 .output').text(sum)
  }//fn3

  $('.ex3 .num').bind('input', function () {
    fn3()
  }) //input
  $('.ex3 .radios input, .ex3 select').change(function () {
    fn3()
  })

})//ready