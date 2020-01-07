(function(exports){
  function NoteModel(text){
    this.text = text;
  };

  NoteModel.prototype.display = function(){
    return this.text;
  }

  exports.NoteModel = NoteModel;
})(this);
