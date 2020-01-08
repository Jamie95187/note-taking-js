'use strict'

function NoteList(){
  this.list = [];
};

NoteList.prototype = (function() {
  function add(note){
    let noteObj = new NoteModel(note);
    return this.list.push(noteObj);
  }

  function showList(){
    return this.list;
  }

  return {
    add: add,
    showList: showList
  };

})();
