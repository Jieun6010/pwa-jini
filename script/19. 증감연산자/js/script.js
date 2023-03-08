// 이렇게 클릭함수 밖에서 변수 선언을 해줘야 한다. 안에서 변수선언을 하면 계속 같은 값만 나옴 
/* 
증감연산은 초기값이 필요함
초기값 선언 위치가 중요함

증감연산자
n += 2 // n = n + 2 둘이 똑같은 말이다 !
n ++ //n += 1  -> n이 1씩 증가한다. / 
++ n // n += 1 

n++ n을 넘겨주고나서 증가한다
++ n 증가한 연산을 끝내고 넘겨준다. 단순히 쓸 때는 문제가 없지만
리턴을 한다던가 값을 다른곳에 넘겨줄때는 반드시 ++n을 써야한다. 

증감 > 검사 > 호출 의 순서로 사용해야한다.
*/




/*
var n = 1
// 클릭할 때마다 1씩 증가 // 5에 도달하면 멈추기.
$(`.ex1 button`).click(function () {
  ++ n // 함수로 묶을때는 이 식을 쓰지 못한다.
  if(n > 5) n = 5
  $(`.ex1 .output`).text(n)
})
*/

$(function () {
  var n = 1
  //fn
  function fn(param) {
    n += param
    if (n > 5) n = 5
    if (n < -5) n = -5
    $(`.ex1 .output`).text(n)
  }
  // 증가버튼
  $(`.ex1 .increase`).click(function () {
    fn(1)
  })

  // 감소버튼
  $(`.ex1 .decrease`).click(function () {
    fn(-1)
  })
})

// 스코프 목적으로 ready이벤트 다시 선언
$(function () {
  var n = 1

  function fn(param) {
    n += param
    if (n > 5) n = 1
    if (n < 1) n = 5
    $(`.ex2 .output`).text(n)
  }

  // 증가버튼
  $(`.ex2 .increase`).click(function () {
    fn(1)
  })

  // 감소버튼
  $(`.ex2 .dicrease`).click(function () {
    fn(-1)
  })
})

$(function () {
  var rdn
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_1 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_1 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_2 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_2 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_3 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_3 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_4 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex3_4 .num2`).val(rdn)


  $(`.ex3 button`).click(function () {

    var num1 = parseInt($(`.ex3_1 .num1`).val())
    var num2 = parseInt($(`.ex3_1 .num2`).val())
    var sum1 = num1 + num2

    var num3 = parseInt($(`.ex3_2 .num1`).val())
    var num4 = parseInt($(`.ex3_2 .num2`).val())
    var sum2 = num3 + num4

    var num5 = parseInt($(`.ex3_3 .num1`).val())
    var num6 = parseInt($(`.ex3_3 .num2`).val())
    var sum3 = num5 + num6

    var num7 = parseInt($(`.ex3_4 .num1`).val())
    var num8 = parseInt($(`.ex3_4 .num2`).val())
    var sum4 = num7 + num8
    
    $(`.ex3 .output`).text(sum1, sum2, sum3, sum4)
  })

  /*
  $(`.ex3 input`).click(function () {
    var num1 = $(`.ex3_1 .num1`).val()
    var num2 = $(`.ex3_1 .num2`).val()
    var num3 = $(`.ex3_2 .num1`).val()
    var num4 = $(`.ex3_2 .num2`).val()
    var sum1 = $(`.ex3_3 .num1`).val()
    var sum2 = $(`.ex3_3 .num1`).val()
    var sum3 = $(`.ex3_4 .num1`).val()
    var sum4 = $(`.ex3_4 .num1`).val()
  })

  $(`.ex3 input`).click(){

  }
  */
}) //ready