(function () {
  var person = {
    buy: function(car){
      console.log("I'm rich");
    }
    // fill code here
  };

  var  car = {
    drive: function(){
      console.log("Vrum Vrum");
    },
    price: Math.round(500+Math.random()*2000)
 // fill code here
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());



(function () {
  var employees =[]
  var workernumber=Math.round(Math.random()*300)
  for(i=0;i<workernumber;i++){
  employees.push({hello: function(){console.log("Hello i work at IBM")}}); // fill code here;
}
  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());