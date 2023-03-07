$(function () {
  //var a = Math.floor(Math.random() * (6 - 4) ) + 4 // 0.000001 ~ 4.999999

  // 4 - 6 까지 범위를 설정하고 랜덤으로 만들어보자.
  // var a = Math.floor(Math.random()*3) + 4
  // 100 - 150 var a = Math.floor(Math.random()*51) + 100

  function fnsetNum() {
    return Math.floor(Math.random() * 10) // 에서 9까지 구한다는것
  }//setNum 숫자세팅


  function fnSetQuestion(contN) {
    $(`.ex1 .cont${contN} .num1`).text(fnsetNum)
    $(`.ex1 .cont${contN} .num2`).text(fnsetNum)
    $(`.ex1 .cont${contN} .num3`).text(fnsetNum)
  }//fnSetQuestion 문제세팅

  fnSetQuestion(1)
  fnSetQuestion(2)  // 여기서 숫자는 머를 의미하는거야??

  /* 이거 함수로 만드러보자 숙제 !
  function fn1(a){
    
    var n1 = parseInt($(this).siblings('.num1').text())
    var n2 = parseInt($(this).siblings('.num2').text())
    var n3 = parseInt($(this).siblings('.num3').text())
    var input = parseInt($(this).siblings('input').val())
    var oper = $(this).val()
    var calc = (oper === 'plus')? n1+n2+n3 : n1-n2-n3
    var cls = (input === calc)? 'green' : 'red'
    el.parent().removeClass(')
    $(this).parent().css({'background' : 'cls'
  }*/

  
  $('.ex1 button').click(function(){
    var n1 = parseInt($(this).siblings('.num1').text())
    var n2 = parseInt($(this).siblings('.num2').text())
    var n3 = parseInt($(this).siblings('.num3').text())
    var input = parseInt($(this).siblings('input').val())
    var oper = $(this).val()
    var calc = (oper === 'plus')? n1+n2+n3 : n1-n2-n3 // 가져온 값이 'plus'면 n1+n2+n3를 리턴해주고 'minus'면 n1-n2-n3이걸 리턴.
    var cls = (input === calc)? 'green' : 'red' //(input === calc)
    //(input === calc)? 1 : 2 //삼항연산자  //이 값이 트루일때 1이 나오고 faluse면 2를 내뱉는다.//(조건)?참일때값:거짓일때값
    
    

    $(this).parent().addClass(cls)
    

  })
 
 
 
 
 
 
  // ex2 번 문제 ! 
  //19세 이하는 뭐를 입력하더라도 미성년자는 구입하실 수 없습니다 ! 메세지가 뜨면 됨.
  //나이가 19세 이상일 시, 선택하면 가격이 나오면 됨


}) //ready