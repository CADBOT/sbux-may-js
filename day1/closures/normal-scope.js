var z;
function doWork() {
  var x = 4;
  doOtherWork()
  var y = 10;
  doOtherWork()
  return y;
}

function doOtherWork() {
  var a = 4;
}

z = doWork();
