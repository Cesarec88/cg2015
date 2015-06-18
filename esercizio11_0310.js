var ex11_a= function(){
	var n,i;
	n=0;
	i=0;
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

	if(i-10>0){
		ex11_b(i);
		return;
	}
	console.log('La somma iterata delle sue cifre è '+i);
	return;

};

var ex11_b= function(i){
	var n;
	n=i;
	i=0;

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

	if(i-10>0){
		ex11_b(i);
		return;
	}
	console.log('La somma iterata delle sue cifre è '+i);
	return;

};

ex11_a() //a funciton that randomizes a number in range (1000..9999)
	  	 // and calculate the sum of its digits repeatedly until you reach one digit only