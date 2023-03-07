$(function () {
  $(`.ex1 button`).click(function () {
    var 글자 = $(this).text() // 클릭한 버튼을 가져온다
    var 색상 = $(this).siblings(`.box${글자}`).attr('data-c') //클릭한 버튼의 색상을 가져온다.
    $(this).siblings(`div`).css({ 'background': 'none' })
    $(this).siblings(`.ex1 .box${글자}`).css({ 'background': 색상 }) //클릭한 버튼의 형제 몇번째 박스냐!
  })

  /* ex1 -------------------------------------------------- */

  $(`.ex2 div`).click(function () {
    $(this).siblings(`div`).removeClass('active')
    $(this).addClass('active') // 스타일이 여러개가 바뀌니까 addClass를 씀 / 하나바꾸는게 아니니까!
  })

  /* ex2 -------------------------------------------------- */

  $(`.ex3 button`).click(function () {
    $(this).siblings('button').css({ 'color': 'black' })
    $(this).css({ 'color': 'red' })
  })

  /* ex3 -------------------------------------------------- */

  $(`.ex4 button`).click(function () {
    $(this).siblings('button').removeClass('active')
    $(this).toggleClass('active')
  })

  /* ex4 -------------------------------------------------- */

  $(`.ex5 button`).click(function () {
    $(`.ex5 button`).css({ 'color': '#000' })
    $(this).css({ 'color': 'red' })
  })

  /* ex5 -------------------------------------------------- */

  $(`.ex6 button`).click(function () {
    $(`.ex6 button`).not(this).removeClass('active')
    $(this).toggleClass('active')
  })

  /* ex6 -------------------------------------------------- */

  $(`.ex7 button`).click(function () {
    var num = $(this).val()
    // 클릭한 것의 밸류를 찾는다.
    $(`.ex7 .num${num} button`).not($(this)).removeClass('active')
    // 
    $(this).toggleClass(`active`)
  })

  /* ex7 -------------------------------------------------- */

  $(`.ex8 button`).click(function () {
    $(this).parents('.cont').find('button').not($(this)).removeClass('active')
    // parents()는 조상을 찾는것 / 조상을 다 찾는다. 위까지 다! 다른 조상들까지 안걸리게 가까운 조상에 클래스를 줘서 범위를 좁혀서 찾자!
    // parents를 쓸때 태그를 쓰는건 위험하다. 다 찾아버리기때문에 ! 클래스를 주자.
    // find()는 손주들을 다 찾는것 / 안쪽까지
    $(this).toggleClass(`active`)
  })
  // this, prev, next, prevAll, nextAll, children, siblings, parents, find

  /* ex8 -------------------------------------------------- */


  /* css,
  addClass(`active1 avtive2 active3 ), removeClass, toggleClass
  이렇게 여러 클래스를 넣을 수도 있다. */

  $(`.ex9 button`).click(function () {
    var 글자 = $(this).text()
    $(`.ex9 div`).show()
    // show는 다 나타내는 명령어
    $(`.ex9 .box${글자}`).hide()
    // hide는 숨기는 명령어
  })

  /* ex9 -------------------------------------------------- */

  $(`.ex10 button`).click(function () {
    $(`.ex10 div`).hide()
    // 먼저 박스를 다 숨기자.
    var 글자 = $(this).text()
    // 클릭한 글자의 값을 찾자
    $(`.ex10 .box${글자}`).show()
  })

  /* ex10 -------------------------------------------------- */

  $(`.ex11 button`).click(function () {
    var 글자 = $(this).text()
    $(`.ex11 div`).not(`.box${글자}`).hide()
    $(`.ex11 .box${글자}`).toggle()
    // 토글하고 토글클래스 쓸때만 not을 쓴다.
  })

  /* ex11 -------------------------------------------------- */

  $(`.ex12 button`).click(function () {
    var 글자 = $(this).text() // 바꿔야 할 박스번호, 클래스번호
    
    $(`.ex12 div`).not(`.box${글자}`).removeClass(`active1 active2 active3`)
    $(`.ex12 .box${글자}`).toggleClass(`${글자}`)
    
    

  $(`.ex13 button`).click(function(){
    var 글자 = $(this).text()
    $(`.ex13 div`).not(`.box${글자}`).removeClass(`active`)
    $(`.ex13 .box${글자}`).toggleClass(`active`)
  })




    // 클릭한 글자 빼고 다 사라지기

    // 토글하고 토글클래스 쓸때만 not을 쓴다.
  })

})







