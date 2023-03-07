$(function () {

  
  
  function fn1(conN,btnN,bg){
    $(`.ex1 .cont${conN} div:nth-of-type(${btnN})`).css({ 'background': bg })
    $(`.ex1 .cont${conN} div`).not($(`div:nth-of-type(${btnN})`)).css({'background' : 'none'})
  }//fn1
  
  $(`.ex1 .cont1 button`).click(function () {
    var btnN = $(this).text() // 클릭한 버튼 번호를 btnN에 넣기
    var bg = $(`.ex1 .cont1 div:nth-of-type(${btnN})`).attr('data-bg')
    // div:nth-of-type() 클릭한 번호가 들어가게되니까 
    // div:nth-of-type()원래 이 괄호 안에 숫자가 들어가야 하는데 저기에 btnN(클릭한 번호)를 넣어서 클릭하면
    // bg(red,yellow,blue)도 같이 변하게!
    // 클릭한 버튼에 해당하는 박스의 data-bg속성 값이 출력된다. red, blue, yellow
    //한놈을 정확히 꼽아야하니까 div뒤에 이렇게 적어주자
    $(`.ex1 .cont1 div:nth-of-type(${btnN})`).css({ 'background': bg }) //클릭한 버튼의 번호 1, 2 , 3 중 하나
    $(`.ex1 .cont1 div`).not($(`div:nth-of-type(${btnN})`)).css({'background' : 'none'})
    //클릭한 버튼 빼고! 
    fn1(1,btnN,bg)
  }) // cont1

  $(`.ex1 .cont2 button`).click(function () {
    var btnN = $(this).val() //클릭한 버튼의 번호
    var bg = $(`.ex1 .cont2 div:nth-of-type(${btnN})`).text()   
    $(`.ex1 .cont2 div:nth-of-type(${btnN})`).css({ 'background': bg }) //1. div 색을 일단 다 바꾸자
    $(`.ex1 .cont2 div`).not($(`div:nth-of-type(${btnN})`)).css({'background' : 'none'})
    fn1(2,btnN,bg)
  }) //cont2




  function fn2(contN,el){
    $(`.ex2 .cont${contN} div`).css({'background' : `none`})
    el.css({'background' : `red`})
  }




  $(`.ex2 .cont1 button`).click(function(){
    var el = $(this).next()
    fn2(1,el)
    //.next() 이런걸 node찾기라고 함 오로지 하나만 찾음

    //첫번째 방법 $(`.ex2 .cont1 div`).not($(this).next()).css({'background' : `none`})
  }) //click 

  
  $(`.ex2 .cont2 button`).click(function(){
    fn2(2,$(this).prev())
  })//click
  // ------ ex2 --------


  /* ex3-----------------------------------------------------------------------------------*/
  


  function fn3(conN,el){
    $(`.ex3 .cont${conN} div`).not(el).removeClass('t')
    el.toggleClass('t')
  } //fn3 


  $('.ex3 .cont1 div').click(function(){
     fn3(1,$(this))
  })


  $('.ex3 .cont2 div').click(function(){
    fn3(2, $(this))
  })

  // 토글클래스일때는 절대로 다 끄면 안됨 / 


  /* ex4-------------------------------------------------------------------------- */

  $('.ex4 .cont1 div').click(function(){
    $(this).prevAll('div').addClass('a')
  })

  $('.ex4 .cont2 div').click(function(){
    $(this).nextAll('').addClass('a')
  })

})//ready