export function Simon() {
  this.commands = [],
  this.responses = []
}

Simon.prototype.addCommand = function(){
  var num = Math.ceil(Math.random()*4);
  this.commands.push(num);
}

Simon.prototype.addResponse = function(resp){
  this.responses.push(resp);
}

Simon.prototype.compareSequences = function(){
  var success = true;
  for(var i = 0; i < this.commands.length; i++){
    if(this.commands[i] !== this.responses[i]){
      success = false;
    }
  }
  return success;
}
