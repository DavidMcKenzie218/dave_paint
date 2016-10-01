var mouseDrag = function(canvas, context, pen, pressed){
  
  canvas.onmousemove = function(event){
    if(pressed){
      draw(event, context, pen)
    }
  }
}

var buttonPress = function(button, size, context, pen){
  pen.changeRadius(size);
}

var radius = function(size){
  var radius = size;
  return radius;
}

var buttonCreate = function(name){
  var button = document.createElement("button");
  button.id = name;
  button.innerText = name;
  return button;
}

var buttonToPage = function(button){
  document.body.appendChild(button);
}

var draw = function(event, context, pen){
    context.beginPath();
    pen.drawFunction(context);
    context.fill();
}

var rubberOff = function(event, context){
  if(!event.shiftKey) context.fillStyle = "black";
}

var rubberOn = function(event, context){
  if(event.shiftKey) context.fillStyle = "white";
}

//WINDOWS ONLOAD

window.onload = function(){
  var canvas = document.querySelector("#main");

  var context = canvas.getContext("2d");

  var pen = new Pen();

  var buttonOne = buttonCreate("10px");
  var buttonFive = buttonCreate("20px");
  var buttonTen = buttonCreate("50px");
  buttonToPage(buttonOne);
  buttonToPage(buttonFive);
  buttonToPage(buttonTen);

  buttonOne.onclick = function(event){
    buttonPress(buttonOne, 10, context, pen);
  }

  buttonFive.onclick = function(event){
    buttonPress(buttonOne, 20, context, pen);
  }

  buttonTen.onclick = function(event){
    buttonPress(buttonOne, 50, context, pen);
  }

  window.addEventListener("keyup", function(event){
      rubberOff(event, context)
    })

  window.addEventListener("keydown", function(event){
      rubberOn(event, context)
    })

  window.addEventListener("keyup", rubberOn)

  canvas.onmousedown = function(){
    mouseDrag(canvas, context, pen, true);
  } 

  canvas.onmouseup = function(){
    mouseDrag(canvas, context, pen, false);
  } 

}