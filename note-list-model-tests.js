function testNoteModelListToDisplayList(){
  var noteModelList = new NoteModelList();
  var noteModel = new NoteModel("Test");
  noteModelList.add(noteModel);
  assert.isTrue(noteModelList.showList()[0] == noteModel)
};

testNoteModelListToDisplayList();
