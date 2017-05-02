var isGrey = true;

$(document).ready(function(){
    gridSize(16);
});

function gridSize(number){
    var size = number*number;
    var j = 640/number;
    console.log(j);
    console.log(number);
    console.log(size);
    for(var i=0; i<size; i++){
      $(".container").append("<div class=cell></div>");
    }
    $('.cell').height(j);
    $('.cell').width(j);
    if(isGrey){
      gridGrey();
    }else{
      randomColour();
    }

$("#buttonReset").click(function(){
  $('.container').empty();
  var newNumber = prompt('Enter new grid size,1-100');
  $('.cell').css("background-color", "black");
  gridSize(newNumber);
})

$("#buttonGrey").click(function(){
  $('.cell').mouseenter(function(){
    $(this).css("background-color","grey")
  })
})

function randomColour(){
  isGrey=true;
  $("#buttonRandom").click(function(){
    $('.cell').mouseenter(function  (){
      var colour = '#'+Math.floor(Math.random()*16777215).toString(16);
      $(this).css("background-color", colour);
  })
})
}

function gridGrey(){
  isGrey=false;
  $('.cell').mouseenter(function(){
    $(this).css("background-color", "grey");
})
}
gridGrey();
randomColour();
}
