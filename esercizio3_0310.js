var ex03a_1 =function(str){
	var word;
	if(str!==undefined){
	word=str.split("");
	word[0]=word[0].toUpperCase();
	word=word.reduce(ex03a_2);
	return(word);
}
return
}

var ex03a_2=function(prev,cur){
	return prev+cur;
}

var ex03b_1 =function(str){
	var words;
	words=str.split(" ");
	words.forEach(ex03b_2);
	words=words.reduce(ex03b_3);

	return(words);

}

var ex03b_2 =function(elem,ind,arr){
	if(elem!==(" "||"")){
		arr[ind]=ex03a_1(elem);
		return;

	}
	return;
}

var ex03b_3=function(prev,cur){
	return prev+" "+cur;
}

m='parola';
ex03a_2(m) //rilascia in output la parola maiuscola
v="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
 deserunt mollit anim id est laborum.";
 ex03b_1(v) //rilascia in output il testo con le prime lettere maiuscole
