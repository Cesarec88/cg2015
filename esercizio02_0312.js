(function() {
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  var music =[];
  var numberplaylist=Math.round(1/Math.random());
 function Compilation(){
    this.playlist;
    this.played;
  }
  for(i=0;i<numberplaylist;i++){
    music.push(new Compilation());
    music[i].playlist=Math.round(Math.random()*30);
    music[i].played=Math.round(Math.random()*100);
  }// write code here

  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  console.log( fav );
}());