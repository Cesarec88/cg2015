var secretnumber=Math.round(Math.random()*9+1);

function Bingo(){
	this.bingonumber=Math.round(Math.random()*9+1);
	this.guess=function(secretnumber){
		if(this.bingonumber===secretnumber){
			return true;
		}
		return false;
	}
	return;
}
 
var bn=new Bingo()
bn.guess();

