/* 
 
  비교 연산자 종류 (비교 연산자 결과로는 true / false 만 나온다.)
    === 같다 !== 다르다     >    <    >=     <= 
 
  (!(2===2)) = !느낌표는 트루 폴스의 결과를 반대로 뒤집는다.

  논리연산자 종류(비교 연산자를 두개 이상 사용할 경우 논리연산자로 연결한다)
  &&(and, 면서)   모든 비교연산이 true일 경우 최종 true
  ||(or, 또는)    하나만 true어도 최종 true

  console.log(1>2 && 2>1)    


  
  조건문(if문)

  if(n)n이 정상적일때!
  in(!n)n이 NaN이나 
  if(){}
  if(){}else{}
  if(){}else if(){}else if(){}else if(){}else if(){}else if(){}
  -----------------------------------------------------------------------------

*/
$(function () {
  $(`.ex1`).submit(function (e) { //전송하는 이벤트 / form 에서만 발생하는 이벤트다!
    // 이벤트 리스너라고 한다.
    e.preventDefault()
    var result
    var n = parseInt($(`.ex1 input`).val())
    if (n > 0) {       //if(결과값이)) 트루면 실행되고 폴스만 실행 안됨
      result = '정답입니다'
    } else { //위에 if가 false일때 실행된다.
      result = '오답입니다'
    }//if
    $(`.ex1 .output`).text(result)

  }) // click

  $(`.ex2`).submit(function (e) {
    e.preventDefault()

    var n = $(`.ex2 input`).val()
    var result
    if (n === '1') {
      result = 'one'
      $(`.ex2 .output`).text('one')
    } else if (n === '2') {
      result = 'two'

    } else if (n === '3') {
      result = 'three'
    } else {
      alert('잘못된 숫자입니다.')
      return false
      // 여기에 걸리는 순간 펑션 안쪽을 중지! 이 아래쪽은 중지가 됨. 이 아래쪽은 실행안하겠다는 뜻
    }
    $(`.ex2 .output`).text(result)
  })
  /* ----------------------------------------------------------------------------*/

  $(`.ex3 button`).click(function () {


    var n = parseInt($(this).val())
    if (n === NaN) { alert('숫자만 입력해주세요'); return false }

    var result

    if (n >= 3 && n <= 7) {
      result = '정답입니다.'
    } else {
      result = '오답입니다.'
    }
    $(`.ex3 .output`).text(result)
  })

  /* ex4 ------------------------------------------------------------------*/


  /* ex5 ------------------------------------------------------------------*/
    $(`.ex5 button`).click(function () {
      var n = parseInt($(`.ex5 input`).val())
      if (!n && n !== 0) {
        alert('입력오류')
        return false
      }
      if (n % 2 === 0) {
        $(`.ex5 .output`).text('정답')
      } else {
        $(`.ex5 .output`).text('오답')
      }

    })









  })