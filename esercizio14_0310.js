var ex14_a= function(){
	var que=[];
	var mu,mu2,sigma,s;
	que.push(Math.round(1/(Math.random())),Math.round(1/(Math.random())));
	console.log('I valori creati sono: '+que );
	mu=que[0]+que[1]/2;
	mu2=Math.pow(mu,2);
	s=Math.pow(que[0],2)+Math.pow(que[1],2);
	sigma=Math.sqrt(Math.abs(s/2-mu2));
	console.log("La media è "+mu+" e la deviazione standard è "+sigma);
	return;
};

ex14_a() //a funciton that randomizes two numbers and prints their average and standard deviation