var ex06_a= function(){
	var que =[];
	var i,n;
	n=Math.round(Math.random()*100);
	console.log('Il valore creato è: '+n );
	for(i=0;i<=n;i++){
		if(i%2===0){
			que.push(i);
		};
	};
	console.log('Tutti i numeri pari minori di '+n+' sono:\n'+que);
	return;
};

ex06_a() //crea un valore random tra 0 e 100, n e stampa un vettore con tutti i numeri pari minori di n