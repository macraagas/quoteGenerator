
	function changeColor() {
	var newColor = makeColor();
	document.getElementById('body').style.backgroundColor = newColor;
	document.getElementById('quote').style.color = newColor;
	document.getElementById('author').style.color = newColor;
	document.getElementById('getQuote').style.backgroundColor = newColor;
	document.getElementById('tweet').style.color= newColor;
}

function makeColor() {
	var arr = [];

	for(i = 0; i < 3; i++) {
		var num = Math.floor(Math.random() * 256);
		arr.push(num);
	}

	var newRgb = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
	return newRgb;
}


$(document).ready(function() {
  //changes quote on click
  var url ="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  var tweetUrl;

   $("#getQuote").on("click", function(){

    $.getJSON(url, function(json){

      $("#quote").html(json.quoteText);
      $("#author").html(json.quoteAuthor); 
    });

    	document.getElementById('quote').style.fontStyle = "italic";


                    });
   
   $("#tweet").on("click", function(){
   	var tweetUrl = 
    window.open('https://twitter.com/intent/tweet?text=' + "'" + $("#quote").text() + "' -" + $("#author").text());

   })

   $("#fb").on("click", function(){
     window.open("https://www.facebook.com/mackychumz");
   })
   $("#fcc").on("click", function(){
   	window.open("https://www.freecodecamp.org/fccfc44ad16-e625-4f36-a0e0-bd5a998f86e1");
   })

});