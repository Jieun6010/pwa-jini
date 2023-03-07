$(function(){
  $(`.ex1 button`).click(function(){
    $(`.ex1 .box`).hide() // 전부 숨기고 
   var 글자 = $(this).text()
   $(`.ex1 .box${글자}`).show() // show()는 css({'display' : 'block'})이랑 같은 말이다.
  })

  /* ex1 ---------------------------------------------------- */

  $(`.ex2 button`).click(function(){
    $(`.ex2 .box`).not(`.box${글자}`).hide() //클릭한 글자는 빼고 숨긴다.
    var 글자 = $(this).text()
    $(`.ex2 .box${글자}`).toggle()
  })

  /* ex2 ---------------------------------------------------- */

  $(`.ex3 .box`).click(function(){
    $(`.ex3 .box div`).stop().slideUp()
    $(this).children(`div`).stop().slideToggle() //애니메이션 효과 ! slideToggle/sildeDown
  })

  $(`.ex4 .box`).click(function(){
    $(`.ex4 .box div`).stop().fadeOut()
    //fadeIn()서서히 나타나는 기능 / fadeToggle
    $(this).children(`div`).stop().fadeToggle()
  })

  $(`.tap button`).click(function(){
    var n = $(this).val()
    $(`.tap .pane`).hide()
    $(`.tap .pane${n}`).show()
    $(`.tap button`).removeClass()
    $(this).addClass(`active`)
  })
  /* ------------------------------- menu ---------------------------- */

  
  $(`.menu>ul>li>a`).click(function(e){ 
    e.preventDefault() // 항상 첫번째에 써야한다.
    $(`.menu>ul>li>ul`).stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()

    $(`.menu>ul>li>a`).not($(this)).removeClass(`active`)
    $(this).toggleClass(`active`)

  })
})//ready 