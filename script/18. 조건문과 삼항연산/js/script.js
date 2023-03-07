$(function () {
  // ex1 ----------------------------------------------------------------- 
  $(`.ex1 button`).click(function () {
    var num1_1 = $(`.ex1 .num1_1`).val() //input이니까 val()
    var num1_2 = $(`.ex1 .num1_2`).val()
    var num1 = parseInt(num1_1 + num1_2)
    // 글자를 이어붙인거니까 숫자로 바꿔주기
    var num2_1 = $(`.ex1 .num2_1`).val()
    var num2_2 = $(`.ex1 .num2_2`).val()
    var num2 = parseInt(num2_1 + num2_2)
    var oper = $(`.ex1 select option:selected`).text()
    // 밸류가 없는 옵션에서 바로 가져올땐 :selected(가상클래스) 를 붙여줘야한다. 또한 문자열이다!

    // 



    // 빈칸이 있을 시 경고 출력
    if(!num1_1 || !num1_2 || !num2_1 || !num2_2 || !(num1_1-num1_2)){
      alert('입력오류')
      return false
    }
    
    
    // 나누기에 0을 넣으면  경고 출력
    if (oper === '/' &&  num2 === 0) {
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
})