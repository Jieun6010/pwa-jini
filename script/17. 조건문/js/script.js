$(function () {
  /* ex1 --------------------------------------------------------- */

  /*
  $(`.ex1 button`).click(function () {
    var kor = parseInt(('.ex1 .kor').val())
    var eng = parseInt(('.ex1 .eng').val())
    var math = parseInt(('.ex1 .math').val())
    var total = kor + eng + math
    var avg = (total / 3).toFixed(1)

    if (!total) {
      alert('입력이 잘못 되었습니다.') // total이 정상이 아니라면 ! 
    return false
    }

    var result
    if (avg >= 90) {
      result = 'A'
    } else if (avg >= 80 && avg < 90) {
      result = 'B'
    } else if (avg >= 70 && avg < 80) {
      result = 'C'
    } else { // avg > 70
      result = 'D'
    }

    $(`.ex1 .output`).text(`총점은 ${total}점, 평균은 ${avg}점, 등급은 ${result}`)
  })*/
  /* ex2 ----------------------------------------------------------------- */
  $(`.ex2 button`).click(function () {
    var age = parseInt($(`.ex2 .age`).val())
    var point = parseInt($(`.ex2 .point`).val())

    if (!age || !point) {
      alert('입력오류');
      return false;
    }

    var result
    //논리연산자가 and or가 섞였을때는 괄호를 써야한다.

    if ((age >= 19 && point >= 90) || (age < 19 && point >= 80)) {
      result = 'A'
    } else if (
      (age >= 19 && point >= 80 && point < 90)
      ||
      (age < 19 && point >= 70 && point < 80)
    ) {
      result = 'B'
    } else if (
      (age < 19 && point >= 70 && point < 80)
      ||
      (age < 19 && point >= 60 && point < 70)
    ) {
      result = 'C'
    } else {
      result = 'D'
    }
    $(`.ex2 .output`).text(`결과는 ${result} 입니다.`)
  })
  /* ex3 가위바위보 게임 ------------------------------------------------------ */
  $(`.ex3 button`).click(function () {
    var com = Math.ceil(Math.random() * 3)
    if (com === 1) {
      com = '가위'
    } else if (com === 2) {
      com = '바위'
    } else {
      com = '보'
    }
    var user = $(`.ex3 input:checked`).val()
    var result

    if (
      (com === '가위' && user === '가위')
      ||
      (com === '바위' && user === '바위')
      ||
      (com === '보' && user === '보')
 
    ) { //비기는 조건
      result = '비겼어요'

    } else if (
      (com === '바위' && user === '보')
      ||
      (com === '가위' && user === '바위')
      ||
      (com === '보' && user === '가위')

    ) { // 사용자가 이기는 조건
      result = '이겼습니다.'
    } else { // 사용자가 지는 조건
      result = '졌습니다.'
    }
    

    $(`.ex3 .output`).text(`컴퓨터:${com}, 사용자:${user}, 결과${result}`);
  })

  /* ex4 계산기 만들기 ----------------------------------------------- */
  $(`.ex4 button`).click(function(){

    var num1 = ($(`.ex4 .num1-1`).val())
    var num2 = ($(`.ex4 .num1-2`).val())
    var num3 = ($(`.ex4 .num2-1`).val())
    var num4 = ($(`.ex4 .num2-2`).val())
    var 더하기 = $(``)
    console.log(더하기)
  

  })






  /* ex5 BMI 계산기 --------------------------------------------------- */
  $(`.ex5 button`).click(function(){
    var 성별 = $(`.ex5 input:checked`).val()
    var 신장 = (($(`.ex5 .num1`).val()) / 100) /*1.7 */
    var 몸무게 = parseInt($(`.ex5 .num2`).val()) /*70*/
    var BMI = (몸무게 / (신장 * 신장)).toFixed(2)
    console.log(BMI);

    if (!성별 || !신장 ||!몸무게 ) {
      alert('입력오류');
      return false;
    }
    var result
    if((성별==='man' && BMI<15)  ||   (성별 ==='woman' && BMI<20)){ // 남성이 15미만 이거나  여성이 20 미만
      result = '마름'
    }else if((성별==='man' && BMI>15 && BMI<20) || (성별==='woman' && BMI>20 && BMI<25)){ //남성이 15이상~20미만 이거나 여성이 20이상 25미만일 때
      result = '적정'
    }else if((성별==='man' && BMI>20 && BMI<25) || (성별==='woman' && BMI>25 && BMI<30)){ // 남성이 20이상 ~ 25미만 이거나 여성이 25이상~30미만일 때
      result = '약간 비만'
    }else{
      result = '비만'
    }
    $(`.ex5 .output`).text(`당신의 bmi결과값은 ${BMI}로, ${result}입니다.`)

  }) 


}) // ready 