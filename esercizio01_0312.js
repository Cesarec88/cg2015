(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    };
  };
  function X(){
    this.size=3;

  };
  function Y(){
    this.size=5;

  };
  var x = new X(); // write code here
  var y = new Y(); // write code here

  larger(x, y);    
}());