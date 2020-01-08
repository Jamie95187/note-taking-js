'use strict'

function NoteController(noteList){
  this.noteListView = new NoteListView(noteList)
  noteList.add("Favourite drink: Seltzer")
};

NoteController.prototype = (function(){

  function listToApp(element){
    element.innerHTML = this.noteListView.htmlString();
  };
  return {
    listToApp: listToApp
  };

})();
