function space(s) {
  return s.split('').join(' ');
}

function titleStyle(s) {
  return "[" + s.toLocaleUpperCase() + "]";
}

function restyleHeader(s) {
 return space(titleStyle(s));
}

function setHeader() {
  document.getElementById("h1").innerHTML = restyleHeader("North Circular");
}