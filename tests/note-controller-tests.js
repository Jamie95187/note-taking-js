function testCanDisplayListOntoPage(){

  var element = {innerHTML: "unchanged"}
  var NoteListDouble = {
    add: function(){

    },
    showList: function(){
      return [new NoteModel("Food", "Prawns"), new NoteModel("Beverage", "Tea")]
    },
  };

  var noteController = new NoteController(NoteListDouble);

  noteController.listToApp();

  var noteListOnPage = document.getElementById('note_summary');
  console.log(noteListOnPage)
  assert.isTrue(noteListOnPage.innerHTML == "<ul><li><div>Food: Prawns</div></li><li><div>Beverage: Tea</div></li></ul>")
}

testCanDisplayListOntoPage();
