var select=function(data,key,value){
	var j,l;
	l=data.length;
	var newdata=[];
	for(j=0;j<l;j++){
		if(find(key,value,j,data)!==undefined){
			newdata.push(find(key,value,j,data));
		}
	}
	return(newdata);

}

var find=function(key,value,index,data){
	var i,k;
	k=value.length;
	for(i=0;i<value.length;i++){
		if(data[index][key]===value[i]){
			return(data[index]);

		}

	}
	return;
}

var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];
select(data, key, values); //returns the array of the objects where the property key
							// is equal to one of the values in values