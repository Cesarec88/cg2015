var ex05_a= function(){
	var que=[];
	que.push(Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100));
	console.log('I valori creati sono: '+que );
	que.sort(ex05_b);
	console.log('il valore più piccolo è: ');
	return(que[0]);
};

var ex05_b = function (value1, value2) {
 return value1 - value2;
};



ex05_a() //stampa un vettore di 3 elementi random compresi tra 0 e 100 e ne stampa il più piccolo