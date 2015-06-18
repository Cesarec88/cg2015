var ex13_a= function(){
	var que=[];
	var i=2;
	var mcd=1;
	var mcm;
	que.push(Math.round(1/(Math.random())),Math.round(1/(Math.random())));
	console.log('I valori creati sono: '+que );
	que.sort(ex13_b);
	if(ex13_c(que[0],que[1])===1){
		console.log('Il loro Massimo Comun Moltiplicatore è: '+que[0]*que[1]);
		return;
	}
	ex13_c(que[0],que[1]);
	mcm=(que[0]*que[1])/mcd;
	console.log('Il loro Massimo Comun Moltiplicatore è: '+mcm);
	return;
};

var ex13_b = function (value1, value2) {
 return value1 - value2;
};

var ex13_c=function(n,m){
	var i;
	i=2;
	while(i<=n){
		while(n%i===0&&m%i===0){
			mcd=mcd*i;
			n=n/i;
			m=m/i;
		};
		i++;
	};
	return(mcd);
};


ex13_a() //a funciton that randomizes two numbers and prints their least common multiplication of them
