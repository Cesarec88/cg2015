function Point2D (x,y) {
	this.point=[x,y];

};

function Edge (point1,point2) {
	var i;
	var c=[];
	for(i=0;i<2;i++){
		c.push(point2.point[i]-point1.point[i]);
	};
	this.edge=c;

};

Edge.prototype.edgeLength = function() {
var i;
var l=0;
for(i=0;i<2;i++){
	l+=this.edge[i]*this.edge[i];
};
return Math.sqrt(l);
};

function Triangolo (point1,point2,point3) {
	this.edge1=[];
	this.edge2=[];
	this.edge3=[];
	var spigolo1=0;
	var spigolo2=0;
	var spigolo3=0;

	for(var i=1;i<3;i++){
		this.edge1[i]=point2.point[i-1]-point1.point[i-1];
		spigolo1+=(point2.point[i-1]-point1.point[i-1])*(point2.point[i-1]-point1.point[i-1]);
		this.edge2[i]=point3.point[i-1]-point2.point[i-1];
		spigolo2+=(point3.point[i-1]-point2.point[i-1])*(point3.point[i-1]-point2.point[i-1])
		this.edge3[i]=point1.point[i-1]-point3.point[i-1];
		spigolo3+=(point1.point[i-1]-point3.point[i-1])*(point1.point[i-1]-point3.point[i-1])
		this.edge1[i+2]=point1.point[i-1];
		this.edge1[i+4]=point2.point[i-1];
		this.edge2[i+2]=point2.point[i-1];
		this.edge2[i+4]=point3.point[i-1];
		this.edge3[i+2]=point3.point[i-1];
		this.edge3[i+4]=point1.point[i-1];
		

	};

	this.edge1[0]=Math.sqrt(spigolo1);
	this.edge2[0]=Math.sqrt(spigolo2);
	this.edge3[0]=Math.sqrt(spigolo3);



};

Triangolo.prototype.perimetro = function() {
	var perimetro = this.edge1[0]+this.edge2[0]+this.edge3[0];
	return perimetro;
};

Triangolo.prototype.area = function() {
	var p,a,b,c,area;
	a=this.edge1[0];
	b=this.edge2[0];
	c=this.edge3[0];
	p=(a+b+c)/2;
	area=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	return area;

};

