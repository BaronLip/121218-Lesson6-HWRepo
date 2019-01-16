/*
var articleList = $('.article');

var list = ['a', 'b', 'c'];

for(var i = 0;
    i < 3, 
    i++)
    {var toggle = list[i];}

for(var i = 0;
    i < list.length, 
    i++){
    }
*/

/*var options = {
    duration: 2000, 
    specialEasing: 'ease-in-out'
    };
    // toggle.addEventListener('click', function(){
    $('.toggle').on('click', function(){
    
        $('.para').slideToggle(options);
    
    });
*/

/*function myFunction() {
    var x = document.getElementById
    ("para");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }
  */

  //https://www.w3schools.com/howto/howto_js_read_more.asp//
  function myFunction() 
  {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") 
    {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    
    else 
    {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 