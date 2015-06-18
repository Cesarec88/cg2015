var ex10_a= function(){
	var i,n;
	i=0;
	n=0;
	while(n<1000||n>9999){
		n=Math.round(Math.random()*10000);
	};
	console.log('Il valore creato è: '+n );
	while(n-1000>=0){
		i=i+1;
		n=n-1000;
	};
	while(n-100>=0){
		i=i+1;
		n=n-100;
	};
	while(n-10>=0){
		i=i+1;
		n=n-10;
	};
	while(n-1>=0){
		i=i+1;
		n=n-1;
	};
	console.log('La somma delle sue cifre è '+i);
	return;

};


ex10_a() //a funciton that randomizes a number in range (1000..9999) and calculate the sum of its digits.