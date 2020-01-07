'use strict'

function NoteModelList(){
  this.list = [];
};

NoteModelList.prototype = (function() {
  function add (note){
    return this.list.push(note);
  }

  function showList(){
    return this.list;
  }

  return {
    add: add,
    showList: showList
  };

})();
