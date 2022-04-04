Describe Places();

Test: "It should construct places object
code: let home = new Places("home", ["kitchen", "bathroom", "living room", "bedroom"], "morning", "no place like home");
Expected Output: home = {"home", ["kitchen", "bathroom", "living room", "bedroom"], "morning", "no place like home"}

Describe Destinations.prototype.addPlace()
Test: "It should add a place object to Destinations"
code: Destinations.addPlace(home);
Expected Output: Destinations.home = {"home", ["kitchen", "bathroom", "living room", "bedroom"], "morning", "no place like home"}

Describe Destinations.prototype.assignId();
Test: "it should assign an ID to a newly created place object"

Described Destinations.prototype.deletePlace();
Test: "It should delete a place object from the destinations object using the unique ID"