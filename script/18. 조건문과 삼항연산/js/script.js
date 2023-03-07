$(function () {
  // ex1 ----------------------------------------------------------------- 
  $(`.ex1 button`).click(function () {
    var num1_1 = $(`.ex1 .num1_1`).val() //input이니까 val()
    var num1_2 = $(`.ex1 .num1_2`).val() // ''문자열이 들어올거야!
    var num1 = parseInt(num1_1 + num1_2)
    // 글자를 이어붙인거니까 숫자로 바꿔주기
    var num2_1 = $(`.ex1 .num2_1`).val()
    var num2_2 = $(`.ex1 .num2_2`).val()
    var num2 = parseInt(num2_1 + num2_2)
    var oper = $(`.ex1 select option:selected`).text()
    // 밸류가 없는 옵션에서 바로 가져올땐 :selected(가상클래스) 를 붙여줘야한다. 또한 문자열이다!


    // if (!false){return false}

    //  !true

    // 
    if (
      (!(num1_1 - num1_2) && num1_1 - num1_2 !== 0)
      ||
      (!(num2_1 - num2_2) && num2_1 - num2_2 !== 0)
    ) { // 0이 아니면서 이상할때...
      alert('입력오류')
      return false
    }


    // 나누기에 0을 넣으면  경고 출력
    if (oper === '/' && num2 === 0) {
      alert('0으로는 나눌 수 없어요')
      return false
    }


    // 조건 만들기 !
    var result
    if (oper === '+') {
      result = num1 + num2
    } else if (oper === '-') {
      result = num1 - num2
    } else if (oper === '*') {
      result = num1 * num2
    } else {
      result = (num1 / num2).toFixed(1)
    }
    $(`.ex1 .output`).text(result)
  })

  $(`.ex2 button`).click(function () {
    var number = parseInt($(`.ex2 input`).val())

    // 빈칸이나 한글을 넣었을 때 경고창 출력
    if (!number && number !== 0) {
      // 숫자가 아니면서 0은 아닐때
      alert('숫자만 입력해주세요')
      return false
    }


    /*
    // 정답 / 오답 조건 만들기
    var result
    if (number > 10 && number % 2 === 0) {
      result = '정답입니다.'
    } else {
      result = '오답입니다.'
    }
    $(`.ex2 .output`).text(result)
    })
    */

    // 정답 / 오답같은 간단한 식은 이렇게 하는게 편하다.
    //위의 식을 삼항연산으로 바꾸면 이렇게 간단한 식이 된다.
    var result = (number > 10 && number % 2 === 0) ? `정답입니다` : `오답입니다.`
    // True일땐 앞쪽 : flase일땐 뒷쪽
    $(`.ex2 .output`).text(result)
  })


  /* ex3 ----------------------------------*/

  var rnd = Math.ceil(Math.random() * 3)
  // 랜덤함수 만들기
  $(`.ex3 b`).text(rnd)
  // 문제에 랜덤숫자 출력

  // ex3의 버튼을 클릭했을때의 조건 
  $(`.ex3 button`).click(function () {
    var txt = $(`.ex3 input`).val()

      
    var result = ((txt === 1 && txt === 'one')||(txt === 2 && txt==='two')||(txt === 3 && txt === 'three')) ? `정답입니다` : `오답입니다.`
    $(`.ex3 .output`).text(result)
  })
/* ex4 ----------------------------------------------------------- */
  $(`.ex4 input`).click(function(){
    var str = ($(this).val()==='o')?'x':'o'
    console.log(str);
    $(this).val(str)
  })


})