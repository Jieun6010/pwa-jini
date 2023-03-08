$(function () {

  $(`.ex1 .btn1`).click(function () {
    var n = 1
    var a = n++
    //호출이 먼저 되니까 출력이 먼저되고 그 다음에 값이 변한다.
    $(`.ex1 .output`).text(a)
  })

  $(`.ex1 .btn2`).click(function () {
    var n = 1
    var a = ++n
    //값이 증가하고 난 후 호출을 한다. 
    $(`.ex1 .output`).text(a)
  })


  function fn() {
    var n = 1
    return ++n

  }
  $(`.ex1 .btn3`).click(function () {
    fn()
    $(`.ex1 .output`).text(fn)
  })
  // n을 먼저 호출하고 증가할건지 , 증가된 값을 호출할건지의 차이다.

}) //ready


$(function () {
  var n = 10
  // 증감연산자를 사용할땐 꼭 초기값을 어디서 설정해야하는지 잘 생각하자. 
  // 꼭 이벤트 밖에서 설정해야한다. 이벤트 안에서 클릭해버리면 계속 10으로 되돌아옴.

  $(`.ex2 button`).click(function () {

    $(`.ex2 .output`).text(++n)
  })


})//ready



$(function () {
  var n = 1

  $(`.ex3 button`).click(function () {
    n++
    if (n > 5) n = 5
    $(`.ex3 .output`).text(n)
  })

})


//문제 제출 ---------------------------------------------------------------------
$(function () {

  function fnSet(exN) {
    var rdn
    rdn = Math.floor(Math.random() * 10)
    $(`.ex4_${exN} .num1`).val(rdn)
    rdn = Math.floor(Math.random() * 10)
    $(`.ex4_${exN} .num2`).val(rdn)
  }//fnSet

  /*
  var rdn
  rdn = Math.floor(Math.random() * 10)
  $(`.ex4_1 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex4_1 .num2`).val(rdn)


  var rdn
  rdn = Math.floor(Math.random() * 10)
  $(`.ex4_2 .num1`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  $(`.ex4_2 .num2`).val(rdn)
  rdn = Math.floor(Math.random() * 10)
  */

  fnSet(1)
  fnSet(2)

  //점수 체크 --------------------------------------------------

  var point

  function fnCheck(exN) {
    var num1 = parseInt((`.ex4_${exN} .num1`).val())
    var num2 = parseInt((`.ex4_${exN} .num2`).val())
    var num3 = parseInt((`.ex4_${exN} .num3`).val())

    if (num3 === num1 + num2) {
      point++ //1점 증가
    } //if

  }//fnCheck


  $(`.ex4 button`).click(function () {
    point = 0
    fnCheck(1)
    fnCheck(2)
    $(`.ex4 .output`).text(point)

  })

})


/* ex5 ------------------------------------------------------------ */
$(function () {
  // 문제 출제 -----------------------------------------------------//
  $(function () {

    function fnSet(exN) {
      var rdn
      rdn = Math.floor(Math.random() * 10)
      $(`.ex5_${exN} .num1`).val(rdn)
      rdn = Math.floor(Math.random() * 10)
      $(`.ex5_${exN} .num2`).val(rdn)
    }//fnSet
    fnSet(1)
    fnSet(2)

    // 점수 체크 -------------------------------------------------------- //

    function fnCheck(exN) {
      var num1 = parseInt((`.ex5_${exN} .num1`).val())
      var num2 = parseInt((`.ex5_${exN} .num2`).val())
      var num3 = parseInt((`.ex5_${exN} .num3`).val())
      var result = (num3 === num1 + num2) ? 1 : 0
      return result // 1번 예제가 정답이면 1 / 오답이면 0을 뱉어냄.
    }//fnCheck  



    $(`.ex5 button`).click(function () {
      //fnCheck(1)+fnCheck(2)+fnCheck(3) 
      // 이 코드는 나중에 반복문에 적용을 할 수 없다.

      var result = 0
      result += fnCheck(1) //정답 1 증가
      result += fnCheck(2) //정답 1 증가
      result += fnCheck(3) //정답 1 증가
    })
    $(`.ex5 .output`).text(result)
  })
})//ready



// ex6 carousel ------------------------------------------------------ //
// 클릭할때마다 1.2.3.4.5 
$(function () {

  var n = 1

  // 함수 만들기

  function fnChange() {
    if (n > 5) n = 1
    if (n < 1) n = 5
    $(`.ex6 img`).hide() // 다 숨기고
    $(`.img${n}`).show() // 필요한 사진만 보여준다.
    $(`.ex6 .indicator button`).removeClass('active') // 모든 버튼 다 끄고 
    $(`.btn${n}`).addClass('active')
  }

  //번호 증가
  $(`.next`).click(function () {
    n++
    /*
    if (n > 5) n = 1 // n이 6이 되면 다시 1을 보여줘
  
    
    $(`.ex6 img`).hide() // 다 숨기고
    $(`.img${n}`).show() // 필요한 사진만 보여준다.
    $(`.ex6 .indicator button`).removeClass('active') // 모든 버튼 다 끄고 
    $(`.btn${n}`).addClass('active')
    */
    fnChange()
  }) //click


  //번호 감소
  $(`.prev`).click(function () {
    n--
    /*
    if (n < 1) n = 5 // n이 1이 되면 다시 5를 보여줘
    $(`.ex6 img`).hide() // 다 숨기고
    $(`.img${n}`).show() // 필요한 사진만 보여준다.
    $(`.ex6 .indicator button`).removeClass('active') // 모든 버튼 다 끄고 
    $(`.btn${n}`).addClass('active')
    */
    fnChange()
  })// click


  // 버튼을 클릭하면 해당하는 이미지로 이동
  $(`.indicator button`).click(function () {
    n = parseInt($(this).text())
    /*
    $(`.ex6 img`).hide() // 다 숨기고
    $(`.img${n}`).show() // 필요한 사진만 보여준다.
    $(`.ex6 .indicator button`).removeClass('active') // 모든 버튼 다 끄고 
    $(`.btn${n}`).addClass('active')
    */
    fnChange()
  })// click

})//ready

/* ex7 ------------------------------------------------------------------------ */
$(function(){
  $(`.ex7 button`).click(function(){
    $(`.ex7 .output`).append(',1')
  })
  
})//ready