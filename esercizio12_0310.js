var ex12_a= function(){
	var que=[];
	var i=2;
	que.push(Math.round(1/(Math.random())),Math.round(1/(Math.random())));
	console.log('I valori creati sono: '+que );
	que.sort(ex12_b);
	while(i<=que[0]){
		if(que[0]%i===0&&que[1]%i===0){
			console.log('Il più piccolo divisore è: '+i);
			return;
		};
		i++;
	};
	console.log('Non hanno divisori comuni.');
};

var ex12_b = function (value1, value2) {
 return value1 - value2;
};


ex12_a() //a funciton that randomizes two numbers and prints the smallest number that is greater than one,
		 // such that both numbers are divided by it with no remainder