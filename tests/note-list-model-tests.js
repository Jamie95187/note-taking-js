function testNoteModelListToDisplayList(){
  var noteModelList = new NoteList();
  noteModelList.add("Food", "Prawns");
  assert.isTrue(noteModelList.showList()[0].display() === "Food: Prawns")
};

testNoteModelListToDisplayList();
