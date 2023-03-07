$(document).ready(function () {
  /* 변수 ---------------------------------------------------------
  var // scope, 변수를 사용할 범위를 설정, 함수 레벨 스코프다.  
  var a = 1 // 변수를 선언(만든다)
  
  ● 숫자형 변수
  a = '1', 
  a + 1  //'11' = 문자열과 숫자가 이어붙여진다. 결과적으로 문자형이 된다.
  a - 1 // 0 = 원래는 나오면 안되는데 자바스크립트가 너무 유연해서 이렇게 나오기도 한다. 이런걸 타파하기위해 나온게 타임스크립트다.
  
  ● 문자형 변수
    var a = 'a1' // paseInt가 앞에 문자는 뜯어내지못하기때문에 Nan을 출력했어
    var b = '1a' // 숫자가 먼저 나왔기때문에 parseInt가 뒤에 글자를 뜯어내고 1을 출력했어
    parseInt(a) ->  NaN
    parseInt(b) ->
  
  
  ● 문자와 변수 연결 문법
    a = 5
    b = 3
    console.log(5+'+'+3+'='+8);
    console.log(`$(a)+3=8`) // 빽틱 안에서 달러 중괄호가 나오면 제이쿼리가 아닌 그냥 변수를 찾겠다는 문법임. 제이쿼리랑 아무 관련 X
    빽틱 = 템블릿 문법

   ● 객체 (변수에 여러개의 값을 넣을 수 있고 찾기도 편하다.)
    var 홍길동 = {
      성 : '홍',
      이름 : '길동',
      나이 : '23',
      성별 : '여',
    } 
    
    console.log(홍길동.이름) // 길동
    console.log(홍길동.성별) // 남
    이렇게하는게 번거로우니까
    var {이름, 성별} = 홍길동 //구조분해
    이름
    성별

    ● boolean형 ( true / false만 넣게 되어있음.)
    true 혹은 false의 값만 가지는 변수이다.
    var a = true

    ● 자바스크립트를 작성할 때는!
    언제, 무엇(요소, 변수)를 이용해서, 
    어떤일을 할지

    ● 이벤트!


  val // 밸류는 폼요소에만 쓸 수 있다.
  버튼에 밸류를 넣는 경우가 있다. 안넣는 경우도 있다. 사용자가 칸에 글자를 입력할 수 있는 경우에는 밸류를 안 넣어도 된다.
  인풋에 밸류를 넣으면 초기값 설정이 된다.
  $('쿼리셀렉터').click()
  
  
  
  ● 함수
  반복되는 유사 코드를 리팩토링 하는 목적

  ● $(this) //event target(이벤트를 당하는 타켓)
  이벤트를 줄이는 목적 
  */
  
  function fn1(num1){
    
      var 첫번째수 = parseInt($(`.ex1 article:${num1}-child input:first-child`).val())
      var 두번째수 = parseInt($(`.ex1 article:${num1}-child input:last-of-type`).val())
      var 결과 = 첫번째수 + 두번째수
      $(`.ex1 article:${num1}-child p`).text(결과)
 
  }

  $('.ex1 article:first-child button').click(function(){
    fn1('first')
  })
  
  $('.ex1 article:last-child button').click(function(){
  
   fn1('last')
  })
  ///fn1

  
  function fn2(num2){
    var 성 = $(`.ex2 ${num2} .first-name`).val()
    var 이름 = $(`.ex2 ${num2} .last-name`).val()
    var 결과 = 성 + 이름
    $(`.ex2 ${num2} p`).text(결과)

  }


  $('.ex2 .div1 button').click(function(){
   fn2('.div1')
  })

  $('.ex2 .div2 button').click(function(){
   fn2('.div2')
  })

 /// fn2


  
  function fun3(number){
    var 숫자1 = parseInt($(`.ex3 ${number} .num1`).val())
    var 숫자2 = parseInt($(`.ex3 ${number} .num2`).val())
    var 결과 = 숫자1 + 숫자2
    $(`.ex3 ${number} p`).text(결과)
  }

  
  $('.ex3 .cont1 input').bind('input', function () {
    fun3('.cont1')
    
  })


  $('.ex3 .cont1 button').click(function () {
    fun3('.cont1')
  })
  
  $('.ex3 .cont2 input').bind('input', function () {
    fun3('.cont2')
  })
  
  $('.ex3 .cont2 button').click(function () {
    fun3('.cont2')
  })
/// fn3



/* ex4 */
// this라는 객체는 콜백함수에서만 쓸 수 있으니까 파라미터를 받아서 this자리에 넣어준다. ㄱ

function fn4(param){
  var 번호 = param // 클릭한 것의 값을 넣겠다.
  var 글자 = $(`.ex4 .cont${번호} input`).val()
  $(`.ex4 .cont${번호} p`).text(글자)
}



$('.ex4 button').click(function(){
  fn4( $(this).val() )
  
})

$('.ex4 input').bind('input',function(){
  fn4($(this).attr('data-n'))
  /*
  var 변호1 = $(this).attr('data-n')
  var 글자 = $(`.ex4 .cont${번호} input`).val()
  $(`.ex4 .cont${번호} p`).text(글자)
  */
})





})