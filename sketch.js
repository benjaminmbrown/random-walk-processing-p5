

function setup() {
	console.log('setting up');
  createCanvas(710, 600);
  // Create object
  walker = new Walker();
  background(255);

}

function draw() {

  walker.step();
  walker.display();
}

function Walker (){
	console.log('walker constructor');
	this.x = 150;
	this.y = 150;

	this.display = function(){
		stroke(0);
		point(this.x,this.y);
	}
	this.step = function(){
		var choice = Math.floor(Math.random() * (4 - 0)) + 0;

		if (choice == 0){
			this.x++;
		}else if (choice ==1){
			this.x--;

		}
		else if(choice ==2){
			this.y++;
		}
		else {this.y--;}
	}
}