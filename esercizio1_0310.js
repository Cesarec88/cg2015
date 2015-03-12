

var ex01a =function(n){
	var i;
	var number=[];
	for(i=1;i<n+1;i++) {
		number.push(i);
	}
	return number;

}

var ex01b =function(item){
	if(item%2===0){
		return(item);
	}

}

var ex01c=function(item){
	return (item*2);
}

var ex01e=function(item){
	if(item%4===0){
		return (item);
	}
}
var ex01f=function(prev,cur){
	return prev+cur;
}

    n=ex01a(8)      //crea un array fatto da 8 elementi tutti i numeri da 1 a 8
	n.filter(ex01b) //prende il sottoarray di valori divisibili per 2
	n.filter(ex01b).map(ex01c) //prende il sottoarray di valori divisibili per 2 e li mappa in loro stessi moltiplicandoli per 2
	n.filter(ex01e) //prende il sottoarray di valori divisibili per 4
	n.reduce(ex01f) //somma i termini dell'array 
