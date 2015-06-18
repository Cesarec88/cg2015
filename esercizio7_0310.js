var ex06_a= function(){
	var que =[];
	var i,n;
	n=Math.round(Math.random()*100);
	console.log('Il valore creato è: '+n );
	if (n-40>0) {
		for(i=n-40;i<=n;i++){
			if(i%2===1){
			que.push(i+40);
			};
		};
		console.log('Tutti i numeri dispari maggiori di '+40+' sono:\n'+que)
		return
	};
	console.log('Il numero '+n+' non è maggiore di 40');
	return;
};


ex06_a() //crea e stampa un numero random n tra 0 e 100 e
         // se è maggiore di 40 ne stampa un array di tutti valori dispari