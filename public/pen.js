var Pen = function(){
  this.radius = 20;
}

Pen.prototype = {
  drawFunction: function(context){
    return context.arc(event.layerX, event.layerY, this.radius, 0, Math.PI * 2, true);
  }, 
  changeRadius: function(size){
    this.radius = size;
  }
}