'use strict'

function NoteListView(noteList){
  this.noteList = noteList
};

NoteListView.prototype = (function() {
  function htmlString(){
    let array = this.noteList.showList().map((note) => note.display())
    return `<ul><li><div><a id=''>` + array.join(`</a></div></li><li><div><a>`) + `</a></div></li></ul>`
  };

  return {
    htmlString: htmlString
  };

})();
