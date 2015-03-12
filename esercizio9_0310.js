var ex08_a= function(){
	var que =[];
	var i,n;
	n=Math.round(Math.random()*100);
	console.log('Il valore creato è: '+n );
	for(i=0;i<n;i++){
		que.push(Math.round(Math.random()*n));
	};
	console.log('Di '+n+' valori compresi tra 0 e '+n+' quelli creati sono:\n'+que);
	que.sort(ex08_b);
	console.log('il valore più grande è: ');
	return(que[n-1]);
};

var ex08_b = function (value1, value2) {
 return value1 - value2;
};


ex08_a() //randomizes a number n in range 0..100. 
		 //Now randomizes n more numbers in that range, printing the largest of them