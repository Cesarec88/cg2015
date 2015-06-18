var ex02a =function(n){
	var i;
	var rdmnumber=[];
	for(i=1;i<n+1;i++) {
		rdmnumber.push(Math.floor(1/Math.random()));
	}
	return rdmnumber;

}

var ex02b =function(item){
		return(item%2);
}

var ex02c =function(value1,value2){
	return (value1-value2);
}

    n=ex02a(8); //crea un array di otto numeri pseudocasuali
	n.filter(ex02b); //prende il sottoarray di numeri dispari
	n.sort(ex02c);   //ordina il sottoarray in ordine crescente

