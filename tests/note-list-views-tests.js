function testNoteListViewToDisplayListAsHtml(){
  var noteModelList = new NoteList();
  noteModelList.add("Favourite food: steak");

  var noteListView = new NoteListView(noteModelList);

  assert.isTrue(noteListView.htmlString() === "<ul><li><div>Favourite food: steak</div></li></ul>")
};

testNoteListViewToDisplayListAsHtml();
