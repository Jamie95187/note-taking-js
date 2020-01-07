'use strict'

function NoteModel(text){
  this.text = text;
};

NoteModel.prototype = (function(){
  function display(){
    return this.text;
  };

  return {
    display: display
  };

})();
