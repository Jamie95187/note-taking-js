function testSingleNoteView(){

}
var testNoteList = new NoteList();
testNoteList.add("Test1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ultricies neque, id laoreet lorem rhoncus sit amet.");
testNoteList.add("Test2", "Nulla porta risus et diam consectetur, non consectetur libero maximus. Aliquam varius porttitor ante ac venenatis.");
var testNoteListView = new NoteListView(testNoteList);
var testController = new NoteController(testNoteList, testNoteListView);
console.log(testController);

assert.isTrue(testNoteListView.htmlString().includes("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ultricies neque, id laoreet lorem rhoncus sit amet."))
assert.isTrue(!testSingleNoteView.htmlString().includes("Nulla porta risus et diam consectetur, non consectetur libero maximus. Aliquam varius porttitor ante ac venenatis."))
