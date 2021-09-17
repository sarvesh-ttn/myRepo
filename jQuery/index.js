$(document).ready(function () {
  // console.log("hello");      qstn 1
  
  // $("#name").addClass("load")   qstn 2

  // qstn 3
  // $("h2[class$=-new]").click(function(){
  //     console.log("eh");
  //     $(this).css('color','red')
  // })

  // $("#qstn4").attr('disabled',true)    qstn 4
  //   $('#main').click(function(){       qstn 5
  //       $(this).find(".target").css({"font-size":"xx-large","color":"blue"})
  //   })

  // qstn6
  //  var textContent = $("p").text();
  //  $("div.qstn6").text(textContent);

  // qstn 7
  // $("#qstn7").click(() => {
  //     $("#click").append("<p>Click me again</p>");
  //     $("p").on("click", () => {
  //       $("#click").append("<span>Click third time </span>");
  //     });
  //   });

  // qstn8
  //  $("#qstn8").on("click",function(){
  //      $(this).parent(".qstn8").css({"color":"red"})
  //  })

  //  qstn 9
  // $( "select" )
  // .change(function () {
  //   var str = "";
  //   $( "select option:selected" ).each(function() {
  //     str += $( this ).text() + " ";
  //   });
  //   $( "div.qstn9" ).text( str );
  // })
  // .change();

  // qstn 10
  // $(".button").hover(function(){
  //     $(".dropdown").slideToggle();
  //     });

  // qstn 11
  // $("a").click(function(e){e.preventDefault()})

  // qstn 12
  $('div.qstn12').click((e)=>{
    $('span#qstn12').append("hey grandparent in child");
})
$('p.q12').click((e)=>{
    e.stopPropagation();
    $('span#qstn12').append("hey child again");
})

  //  qstn 13
  // $(".panel").each(function(){
  //     console.log($(this).height());
  // })

  // qstn 14
  // $('.cell').each(function(i, n) {
  //     if($(n).text() >= 10)
  //        $(n).css('color', 'red').css('background-color','gray');})

  // qstn15
  // $("#ajaxBtn").click(function(){
  //     console.log("hello");
  //     $.get('https://jsonplaceholder.typicode.com/posts/1',function(data,textStatus){
  //         console.log(data);
  //         $("p.qstn15").append(data.title);
  //     })
  // })

  // Question 16
  // $(":button").click(function(){
  // 	bid=$(this).attr("id");
  //     console.log(bid);
  // 	bid="#row"+bid;
  //     console.log(bid);
  // 	$.ajax({url:"https://jsonplaceholder.typicode.com/posts/1",success: function(result){
  // 		$(bid).remove();
  // 	}});
  // });

  //  Question 17
  // var carArray =["./c1.jpeg","./c2.jpeg","/c3.jpeg","/c4.jpeg","/c5.jpeg"]
  // var i=0;
  //  $(".qstn17").css("background-image","url(" + carArray[i] +")");
  //  $("#qst")
  //  setInterval(function(){
  //      i++;
  //      if(i== carArray.length){
  //          i=0;
  //      }
  //      $(".qstn17").fadeOut("slow",function(){
  //          $(this).css("background-image","url("+ carArray[i]+")");
  //          $(this).fadeIn("slow");
  //      });
  //  },5000)
});
