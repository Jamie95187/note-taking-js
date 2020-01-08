function testCanDisplayListOntoPage(){

  var element = {innerHTML: "unchanged"}
  function NoteListDouble(){};


  NoteListDouble.prototype = {
    add: function(){

    },
    showList: function(){
      return [new NoteModel("Test1"), new NoteModel("Test2")]
    }
  };

  var notecontroller = new NoteController(NoteListDouble);
  
  noteController.listToApp(element);

  assert.isTrue(element.innerHTML == "<ul><li><div>Test1</div></li><li><div>Test2</div></li></ul>")
}

testCanDisplayListOntoPage();
