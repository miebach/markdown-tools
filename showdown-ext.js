function run() {
  //create a converter to use it later
  var converter = new Showdown.converter();
  
  //get some parts of the document:
  var body = document.getElementById("body1");
  var pre1 = document.getElementById("pre1");
  var pre_src = pre1.innerHTML;

  //convert the pre1 source to markdown
  var tx = converter.makeHtml(pre_src);

  //create a new div... 
  var new_div = document.createElement("div");
  //.. and insert the markdown markup as it's inner html:
  new_div.innerHTML=tx;

  //remove the old inenrHTMl of pre1:
  pre1.innerHTML = "";

  //insert @ beginning:
  body.insertBefore(new_div,pre1);

 
}
