'use strict'

function NoteController(noteList = new NoteList){
  this.noteListView = new NoteListView(noteList);
  this.noteList = noteList;
  this.noteList.add("Favourite drink", "Seltzer");
};

NoteController.prototype = (function(){
  function displayNote(note){
    console.log(document);
    document.getElementById('full_note').innerHTML = `<div><div>${note.title}</div><div>${note.body}</div></div>`
  };
  function listToApp(){
    var lists = document.getElementById('note_summary')
    lists.innerHTML = this.noteListView.htmlString();
    console.log(lists)
  };
  function displayFullNote(title){
    var selectedNote = this.noteList.showList().find(note => note.getTitle() === title);
    this.displayNote(selectedNote);
  };
  return {
    listToApp: listToApp,
    displayFullNote: displayFullNote,
    displayNote: displayNote
  };

})();
