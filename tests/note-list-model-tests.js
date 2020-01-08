function testNoteModelListToDisplayList(){
  var noteModelList = new NoteList();
  noteModelList.add("Test");
  assert.isTrue(noteModelList.showList()[0].display() === "Test")
};

testNoteModelListToDisplayList();
