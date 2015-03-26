function Point2D (x,y) {
	this.point=[x,y];

};

function Edge (point1,point2) {
	var i;
	c=[];
	for(i=0;i<2;i++){
		c.push(point2.point[i]-point1.point[i]);
	};
	this.edge=c

};

Edge.prototype.edgeLength = function() {
var i;
var l=0;
for(i=0;i<2;i++){
	l+=this.edge[i]*this.edge[i];
};
return Math.sqrt(l);
};

