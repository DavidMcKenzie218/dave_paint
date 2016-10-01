var Pen = function(){
  this.size = 20;
}

Pen.prototype = {
  draw: function(context){
    return this.drawCircle(context);
  },
  drawCircle: function(context){
    console.log(this.draw);
    return context.arc(event.layerX, event.layerY, this.size, 0, Math.PI * 2, true);
  }, 
  drawSquare: function(context){
    return context.fillRect(event.layerX, event.layerY, this.size, this.size);
  },
  changeRadius: function(size){
    this.radius = size;
  }
}