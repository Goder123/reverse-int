module.exports = function reverse (n) {
  if (n < 0) {
    n = n * -1;
  }
    var m = n.toString().split("");
    var v = m.reverse();
    var p = v.join("");
    return p;

}
