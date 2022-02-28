for (var i = 0; i < 5; i++) {
    console.log(i);
}
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
///////////////////////
var sports = ["golf", "cricket", "tennis", "swimming"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
sports.push("Baseball");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "cricket") {
        console.log(tempSport + " << My Favorite!");
    }
    else {
        console.log(tempSport);
    }
}
