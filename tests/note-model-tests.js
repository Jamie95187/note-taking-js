function testNoteModelToDisplayText(){
  var noteModel = new NoteModel("Test");

  assert.isTrue(noteModel.display() == "Test");
};

testNoteModelToDisplayText();
