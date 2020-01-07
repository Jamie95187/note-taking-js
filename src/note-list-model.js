(function(exports){
  function NoteModelList(){
    this.list = [];
  };

  NoteModelList.prototype.add = function(note){
    return this.list.push(note);
  };

  NoteModelList.prototype.showList = function(){
    return this.list;
  };

  exports.NoteModelList = NoteModelList;

})(this);
