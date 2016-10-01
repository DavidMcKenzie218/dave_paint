var mouseDrag = function(canvas, context, pen, pressed){
  
  canvas.onmousemove = function(event){
    if(pressed){
      draw(event, context, pen)
    }
  }
}

var changeSize = function(size, pen){
  pen.changeRadius(size);
}

var changeColour = function(context, colour){
  context.fillStyle = colour;
}

var buttonChangePenShape = function(shape, pen){
  pen.changeShape(shape);
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
    pen.draw(context);
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

  var pen = new Pen(context);

  var buttonOne = buttonCreate("10px");
  var buttonFive = buttonCreate("20px");
  var buttonTen = buttonCreate("50px");
  var buttonSquare = buttonCreate("Square");
  var buttonCircle = buttonCreate("Circle");
  var buttonBlue = buttonCreate("Blue");
  var buttonGreen = buttonCreate("Green");
  var buttonBlack = buttonCreate("Black");
  var buttonRed = buttonCreate("Red");
  var buttonPurple = buttonCreate("Purple");
  buttonToPage(buttonOne);
  buttonToPage(buttonFive);
  buttonToPage(buttonTen);
  buttonToPage(buttonSquare);
  buttonToPage(buttonCircle);
  buttonToPage(buttonGreen);
  buttonToPage(buttonBlue);
  buttonToPage(buttonBlack);
  buttonToPage(buttonRed);
  buttonToPage(buttonPurple);

  buttonOne.onclick = function(event){
    changeSize(10, pen);
  }

  buttonFive.onclick = function(event){
    changeSize(20, pen);
  }

  buttonTen.onclick = function(event){
    changeSize(50, pen);
  }

  buttonSquare.onclick = function(event){
    buttonChangePenShape("square", pen);
  }

  buttonCircle.onclick = function(event){
    buttonChangePenShape("circle", pen);
  }

  buttonGreen.onclick = function(event){
    changeColour(context, "green");
  }

  buttonRed.onclick = function(event){
    changeColour(context, "tomato");
  }

  buttonBlue.onclick = function(event){
    changeColour(context, "blue");
  }

  buttonBlack.onclick = function(event){
    changeColour(context, "black");
  }

  buttonPurple.onclick = function(event){
    changeColour(context, "purple");
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