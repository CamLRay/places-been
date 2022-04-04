// Business logic Destinations
function Destinations() {
  this.places = {};
  this.currentId = 0;
}

Destinations.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
};

Destinations.prototype.assignId = function() {
  this.currentId ++;
  return this.currentId;
}

Destinations.prototype.deletePlace = function(id) {
  if (this.place[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// business logic Places
function Places(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

Places.prototype.breakdown = function() {
  return this.landmarks.join(", ") + " time: " + this.time + " notes: " + this.notes;
};

let vacation1 = new Destinations();
let myHome = new Places("home", ["kitchen", "bathroom", "living room", "bedroom"], "morning", "no place like home");
vacation1.addPlace(myHome);


$(document).ready(function() {
  $("#destinations").append("<p>" + myHome.location.toString() + "</p>" + "<p class='hidden'>"+ myHome.breakdown() + "</p>");
  $(this).click(function(){
   $("p").next().toggleClass("hidden");
  });
});