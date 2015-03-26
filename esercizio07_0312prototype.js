(function () {

  function PhotoAlbum (string) {
    this.photos=[];

  };

  function Photo (string) {
    this.name=string;
    this.tags=[];

  };

  PhotoAlbum.prototype.addPicture = function (photoname) {
    this.photos.push(photoname);
    // body...
  };

  Photo.prototype.tag = function (name) {
    this.tags.push(name);
  };

  Photo.prototype.showTags = function () {
    console.log(this.tags);
  };

  PhotoAlbum.prototype.showPictures = function (tagname) {
    var pic,i,j,flag;

    console.log(tagname+' è stato taggato in:\n')

    for(i=0;i<this.photos.length;i++){

      pic=this.photos[i];

      for(j=0;j<pic.tags.length;j++){

        if(pic.tags[j]===tagname){

          console.log(pic.name);
        };
      };
    };
  };

  // Code goes here

  var album =new PhotoAlbum();
  var p;

  p =new Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p =new Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p =new Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());