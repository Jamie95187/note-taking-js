'use strict'

function NoteModel(title, body){
  this.title = title;
  this.body = body;
};

NoteModel.prototype = (function(){
  function display(){
    return `${this.title}: ${this.body.slice(0, 20)}`;
  };
  function getTitle(){
    return this.title;
  };
  function getBody(){
    return this.body;
  };
  return {
    display: display,
    getTitle: getTitle,
    getBody: getBody
  };

})();
