function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  
  Animal.prototype.sayVoice = function() {
    console.log(`This animal is called: ${this.name}`);
  };
  
  Animal.prototype.changeKind = function(newKind) {
    this.kind = newKind;
    console.log(`The kind of this animal is now: ${this.kind}`);
  };
  

  const myAnimal = new Animal('Leo', 'Lion');
  

  myAnimal.sayVoice(); 
  myAnimal.changeKind('Tiger'); 