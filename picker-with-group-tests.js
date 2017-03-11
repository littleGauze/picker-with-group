// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by picker-with-group.js.
import { name as packageName } from "meteor/littlegauze:picker-with-group";

// Write your tests here!
// Here is an example.
Tinytest.add('picker-with-group - example', function (test) {
    test.equal(packageName, "picker-with-group");
});
