function 더하기(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1 )
  var 숫자2 = parseInt(숫자2)
  var 결과 = 숫자1 + 숫자2
  //$('.ex1 .div1 .output').html(결과)
  return 결과
}
//return 뒤엔 아무것도 적으면 안됨 / 리턴은 이제 함수가 아무것도 할 일이 없다는 뜻
//기본값은 val / html은 
//더하기함수


function 곱하기(숫자1, 숫자2) {
  var 결과 = 숫자1 * 숫자2
  return 결과
} //곱하기함수

function 빼기(숫자1, 숫자2) {
  var 결과 = 숫자1 - 숫자2
  return 결과
} //빼기함수

function 나누기(숫자1, 숫자2) {
  var 결과 = 숫자1 / 숫자2
 return 결과
} //나누기함수

$('.ex1 .div1 button').click(function () {
  var 숫자1 = $('.ex1 .div1 .num1').val()
  var 숫자2 = $('.ex1 .div1 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div1 .output').html(더하기결과+' '+곱하기결과)
})

  $('.ex1 .div2 button').click(function () {
  var 숫자1 = $('.ex1 .div2 .num1').val()
  var 숫자2 = $('.ex1 .div2 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 빼기결과 = 빼기(숫자1, 숫자2)
  $('.ex1 .div2 .output').html(더하기결과+' '+빼기결과)
})

$('.ex1 .div3 button').click(function () {
  var 숫자1 = $('.ex1 .div3 .num1').val()
  var 숫자2 = $('.ex1 .div3 .num2').val()
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  var 빼기결과 = 빼기(숫자1, 숫자2)
  $('.ex1 .div3 .output').html(곱하기결과+' '+빼기결과)
})

$('.ex1 .div4 button').click(function () {
  var 숫자1 = $('.ex1 .div4 .num1').val()
  var 숫자2 = $('.ex1 .div4 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 나누기결과 = 나누기(숫자1, 숫자2)
  $('.ex1 .div4 .output').html(더하기결과+' '+나누기결과)
})


function 계산(수1, 수2) {
  var 수1 = parseInt(수1)
  var 수2 = parseInt(수2)
  var 더하기 = 수1+수2
  var 빼기 = 수1-수2
  var 곱하기 = 수1*수2
  var 나누기 = (수1+수2).toFixed(2)
  var 객체 = {
    더하기, //더하기 : 더하기 = 키값과 변수명이 동일할 때 
    빼기,
    곱하기,
    나누기,
  }
  return(객체)
  //return값에는 하나밖에 넣지 못한다.
}

$('.ex2 .div1 button').click(function() {
  var 숫자1 = $('.ex2 .div1 .num1').val()
  var 숫자2 = $('.ex2 .div1 .num2').val()
  //var 객체 = 계산(숫자1,숫자2)
  var {더하기,곱하기} = 계산(숫자1,숫자2) // 변수 {} 는 객체가 다 포함되어있다는, 분해했다는 뜻!
  $('.ex2 .div1 .output').html(객체.더하기+','+객체.곱하기)

})


function 총점(숫자1, 숫자2) {
  var 숫자1 = parseInt(숫자1)
  var 숫자2 = parseInt(숫자2)
  var 결과 = 숫자1 + 숫자2
  return 결과
}

function 평균(숫자1, 숫자2) {
  var 결과 = (총점/2).toFixed(2)
  return 결과
}

/*$('.ex1 .div1 button').click(function () {
  var 숫자1 = $('.ex1 .div1 .num1').val()
  var 숫자2 = $('.ex1 .div1 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div1 .output').html(더하기결과+' '+곱하기결과)
})*/

$('.ex3 .div1 button').click(function() {
var 숫자1 = $('.ex3 .div1 .sum1').val()
var 숫자2 = $('.ex3 .div1 .sum2').val()
var 총점결과 = 총점(숫자1, 숫자2)
var 평균결과 = 평균(숫자1, 숫자2)
$('.ex3 .div1 .output').html(총점결과+' '+평균결과)
})

  

  
 