function run() {
  srce = document.getElementById("pre1").innerHTML;
  converter = new Showdown.converter();
  tx = converter.makeHtml(srce);
  document.getElementById("body1").innerHTML=tx;
}
