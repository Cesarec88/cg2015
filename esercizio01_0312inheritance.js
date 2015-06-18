function Door(state){
this.state=state || 'closed';
};

Door.prototype.open = function() {
	this.state='opened';
	console.log('Door opened');
	return;// body...
};

Door.prototype.closed = function () {
	this.state = 'closed';
	console.log('Door closed');
	return;// body...
};

//inheritance

function SecurityDoor (state,state2) {
	Door.call(this,state);
	this.state2 =state2 || 'unlocked';
};

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

SecurityDoor.prototype.lock = function () {
	this.state='closed';
	this.state2='locked';
	console.log('Door locked')
};

SecurityDoor.prototype.unlock = function () {
	this.state2='unlocked';
	console.log('Door unlocked and closed')
};

//overriding

SecurityDoor.prototype.open = function() {
	if(this.state2==='locked'){
		console.log('The Door is locked. I can\'t open it!')
		return
	};
	this.state='open'
};




