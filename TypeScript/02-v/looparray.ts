for (let i=0; i < 5; i++){
  console.log(i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
for (let i=0; i< reviews.length; i++){
  console.log(reviews[i]);
  total += reviews[i];
}
let average: number = total / reviews.length; 

console.log("Review average = " + average);
///////////////////////
let sports: string[] = ["golf", "cricket", "tennis", "swimming"];
for (let i = 0; i < sports.length; i++){
  console.log(sports[i]);
}
sports.push("Baseball");

for (let tempSport of sports){
  if(tempSport == "cricket"){
    console.log(tempSport + " << My Favorite!");
  }else {
    console.log(tempSport);
  }
}

