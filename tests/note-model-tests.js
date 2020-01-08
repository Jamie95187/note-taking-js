function testNoteModelToDisplayText(){
  var noteModel = new NoteModel("Test", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

  assert.isTrue(noteModel.display() === "Test: Lorem ipsum dolor si");
  assert.isTrue(noteModel.getBody() === "Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
  assert.isTrue(noteModel.getTitle() === "Test")
};

testNoteModelToDisplayText();
