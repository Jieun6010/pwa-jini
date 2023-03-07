//$는 jQuery의 약어 / 객체를 찾고 싶을땐 ''를 넣어야함.
//이벤트는 특정 시점(때)를 나타냄 / 클릭을 했을 때! /클릭이 완료 됐을때! click(funtion(){})
// funtion(){}은 콜백 함수임 !
// evente 와 callback funtion(){}은 무조건 짝꿍!
$('.ex1 button').click(function () {
  var number1 = parseInt($('.ex1 .num1').val())
  var number2 = parseInt($('.ex1 .num2').val())
  var sum = number1 + number2
  alert(sum)
})

$('.ex2 button').click(function () {
  var number1 = parseInt($('.ex2 .num1').val())
  var number2 = parseInt($('.ex2 .num2').val())
  var sum = number1 + number2
  alert(sum)
})

$('.ex3 button').click(function() {
 var 상품가격 = $('.ex3 input:checked').val()
 var 상품개수 = $('.ex3 .cnt').val()
 var 총가격 = 상품가격 * 상품개수
 alert(총가격)
})

/* $('.ex4 button').click(function() {
  var 숫자1 = parseInt($('.ex4 .num1').val())
  var 숫자2 = parseInt($('.ex4 .num2').val())
  var 더하기 =  숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 = (숫자1 / 숫자2).toFixed(2)
  alert(숫자1+'+'+숫자2+'='+더하기+','+숫자1+'-'+숫자2+'='+빼기+','+숫자1+'*'+숫자2+'='+곱하기+','+숫자1+'/'+숫자2+'='+나누기)

  //console.log(숫자1, 숫자2);
}) */

$('.ex4 button').click(function() {
 var 숫자1 = parseInt($('.ex4 .num1').val())
 var 숫자2 = parseInt($('.ex4 .num2').val())
 사칙연산(숫자1,숫자2)
})

$('.ex5 button').click(function() {
  var 숫자1 = parseInt($('.ex5 .num1').val())
  var 숫자2 = parseInt($('.ex5 .num2').val())
  사칙연산(숫자1,숫자2)
})

function 사칙연산(a,b) {
  var 숫자1 = a
  var 숫자2 = b
  var 더하기 =  숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 = (숫자1 / 숫자2).toFixed(2)
  alert(숫자1+'+'+숫자2+'='+더하기+','+숫자1+'-'+숫자2+'='+빼기+','+숫자1+'*'+숫자2+'='+곱하기+','+숫자1+'/'+숫자2+'='+나누기)
}

/* function 청소(장소) {
  장소 쓸기
  장소 닦기
}
 */
/* function sum(a,b) {
  alert(a+b)
}
sum(1,2) */

$('.ex6 button').click(function(){
  var number1 = parseInt($('.ex6 .num1').val())
  var number2 = parseInt($('.ex6 .num2').val())
  var number3 = parseInt($('.ex6 .num3').val())

  var number4 = number1 - (number2 * number3) / 2 -1

  alert(number4)

})





