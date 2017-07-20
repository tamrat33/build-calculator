window.onload = function() {

  var screen,
  output,
  limit,
  zero,
  period,
  operator;

  screen = document.getElementById("result");
  var elem = document.querySelectorAll(".kutir");
  var len = elem.length;
  for(var i = 0; i < len; i++ ) {
    elem[i].addEventListener("click",function() {
      num = this.value;
      output = screen.innerHTML +=num;
      limit = output.length;
    },false);
  }

  document.querySelector("#equal").addEventListener("click",function() {
    if(screen.innerHTML === output) {
      screen.innerHTML = eval(output);
    }
    else {
      screen.innerHTML = "";
    }
  },false);

  document.querySelector("#clear").addEventListener("click",function() {
    screen.innerHTML = "";
  },false);



  var elem1 = document.querySelectorAll(".shufer");
  var len1 = elem1.length;
  for(var i = 0; i < len1; i++ ) {
    elem1[i].addEventListener("click",function() {
      operator = this.value;
      if(screen.innerHTML === "") {
        screen.innerHTML = screen.innerHTML.concat("");
      }

      else if(output) {
        screen.innerHTML = output.concat(operator);
      }

    },false);

  }
}
