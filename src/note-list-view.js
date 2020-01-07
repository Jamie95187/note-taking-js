'use strict'

function NoteListView(noteList){
  this.noteList = noteList
};

NoteListView.prototype = (function() {
  function htmlString (){
    let array = this.noteList.showList().map((note) => note.display())
    return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>"
  };

  return {
    htmlString: htmlString
  };

})();
