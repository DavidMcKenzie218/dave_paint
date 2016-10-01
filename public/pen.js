var Pen = function(){
  this.size = 20;
  this.shape = "circle";
}

Pen.prototype = {
  draw: function(context){
    if(this.shape === "circle") return this.drawCircle(context);
    if(this.shape === "square") return this.drawSquare(context);

  },
  drawCircle: function(context){
    return context.arc(event.layerX, event.layerY, this.size, 0, Math.PI * 2, true);
  }, 
  drawSquare: function(context){
    return context.fillRect(event.layerX, event.layerY, this.size, this.size);
  },
  changeRadius: function(size){
    this.size = size;
  },
  changeShape: function(shape){
    console.log(shape);
    this.shape = shape;
  }
}