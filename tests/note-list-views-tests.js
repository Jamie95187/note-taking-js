function testNoteListViewToDisplayListAsHtml(){
  var noteModel = new NoteModel("Favourite food: steak")
  var noteModelList = new NoteModelList();
  noteModelList.add(noteModel);

  var noteListView = new NoteListView(noteModelList);

  assert.isTrue(noteListView.htmlString() == "<ul><li><div>Favourite food: steak</div></li></ul>")
};

testNoteListViewToDisplayListAsHtml();
