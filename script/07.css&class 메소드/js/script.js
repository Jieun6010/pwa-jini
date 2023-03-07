$(document).ready(function () {
  $('.ex1 button').click(function () {
    $('.ex1 button').css({ 'color': 'red' })
  })//click 

  $('.ex2 button').click(function () {
    $('.ex2 .box').css({
      'width': '100px',
      'height': '100px',
      'background': 'red',
      'border-radius': '50%',
      'text-align': 'center',
      'line-heigth': '100px',
      'color': 'white'
    })
  })//click

  $('.ex3 .btn1').click(function(){
    $('.ex3 .box').addClass('tt')
  })//click

  $('.ex3 .btn2').click(function(){
    $('.ex3 .box').removeClass('tt')
  })//click

  $('.ex3 .btn3').click(function(){
    $('.ex3 .box').toggleClass('tt')
  })//click

  $('.ex4 .b').click(function(){
    $('.ex4 .bt1').css({
      'position' : 'relative',
      'top' : '0px',
      'left' : '0px'
    })

    $('.ex4 .bt2').css({
      'position' : 'relative',
      'top' : '-100px',
      'left' : '100px'
    })

    $('.ex4 .bt3').css({
      'position' : 'relative',
      'top' : '-200px',
      'left' : '200px'
    })
  }) // 일렬로

 /* $('.ex4 .a').click(function(){
    $('.ex4 .bt1').css({
      'position' : 'relative',
      'top' : '0px',
      'left' : '0px'
    })

    $('.ex4 .bt2').css({
      'position' : 'relative',
      'top' : '100px',
      'left' : '100px'
    })

    $('.ex4 .bt3').css({
      'position' : 'relative',
      'top' : '200px',
      'left' : '200px'
    }) */

    

  



})//ready