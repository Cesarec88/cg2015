var ex07_a= function(){
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
	for(i=0;i<=40-n;i++){
		que.push(40-i);
	}
	console.log('Il numeri dopo '+n+', partendo da 40 sono:\n'+que);
	return;
};



ex07_a() //randomizes a number in range (0..100), then prints all the odd numbers from 40 to that one. 
		 //If the number was smaller than 40, print all the numbers down to the randomized one