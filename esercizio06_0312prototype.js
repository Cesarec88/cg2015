(function() {

  function MusicBox () {
    this.albumcollection=[];

  };

  function Album (group,name) {
    this.group=group;
    this.name=name;
    this.listenedcounter=0;
  };

  MusicBox.prototype.addAlbum = function(album) {
    this.albumcollection.push(album);
    // body...
  };
  MusicBox.prototype.addAlbum = function(){
    for(i=0;i<arguments.length;i++)
      this.albumcollection.push(arguments[i]);

  };

  Album.prototype.play = function() {
    console.log('Playing '+this.name+' - '+this.group);
    this.listenedcounter++;
    // body...
  };

  MusicBox.prototype.favoriteAlbum = function() {
    var favorite,i;
    favorite=0;
    for(i=0;i<albumcollection.length;i++){
      var a=box.albumcollection[i];
      if(favorite<a.listenedcounter)
        favorite=a.listenedcounter;

      };

    return favorite;
  }


  var box =new MusicBox();
  var a1 =new Album("The Who", "Tommy");
  var a2 =new Album("Tom Waits", "Closing Time");
  var a3 =new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("the favorite album is the n°" +(favorite+1)); 
}());