'use strict'

function NoteList() {
  this.list = [];
};

NoteList.prototype = (function() {
  function add(title, body){
    let noteObj = new NoteModel(title, body);
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
