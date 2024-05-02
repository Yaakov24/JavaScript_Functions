console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(7);
function printOdds(count) {
  for (let i = 0; i < count; i++) {
    if (count % 2 != 0) {
      console.log(`${count}`);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
checkAge("Jimmy", 15);
function checkAge(userName, age) {
  if (age >= 16) {
    console.log(`Congrats ${userName}, you can drive!`);
  } else if (age < 16) {
    console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
  }
}
console.log("EXERCISE 3:\n==========\n");
quadrant(-3, -5);
function quadrant(x, y) {
  if (x > 0 && y > 0) {
    console.log(`${x} & ${y} are on side I`);
  } else if (x > 0 && y < 0) {
    console.log(`${x} & ${y} are on side II`);
  } else if (x < 0 && y < 0) {
    console.log(`${x} & ${y} are on side III`);
  } else if (x < 0 && y > 0) {
    console.log(`${x} & ${y} are on side IV`);
  }
}

console.log("EXERCISE 4:\n==========\n");
triangle(10, 10, 10);
function triangle(left, right, bottom) {
  if (left == right && bottom == left && bottom == right) {
    console.log(
      `sides ${left}, ${right}, ${bottom} make an Equilateral Triangle`
    );
  } else if (left == right || left == bottom || right == bottom) {
    console.log(`sides ${left}, ${right}, ${bottom} make a Isoceles Triangle`);
  } else if (left != right && right != bottom && bottom != left) {
    console.log(`sides ${left}, ${right}, ${bottom} make a Scalene Triangle`);
  }
}
console.log("EXERCISE 5:\n==========\n");
dataPlan(500, 6, 200);
function dataPlan(planLimit, day, usage) {
  let periodLength = 30;
  let projectedAverage = planLimit / periodLength;
  let currentAverage = usage / day;
  let remainingDays = periodLength - day;
  let projectedUsage = remainingDays * currentAverage;
  let statusMSG;

  if (currentAverage > projectedAverage) {
    statusMSG = "EXEEDING";
  } else if (currentAverage < projectedAverage) {
    statusMSG = "BELOW";
  } else {
    statusMSG = "AT";
  }

  console.log(` ${day} days used, ${remainingDays} days remaining`);
  console.log(`Average daily use: ${projectedAverage}GB/day`);

  console.log(
    `You are ${statusMSG} your average daily use by (${currentAverage} GB/day)`
  );
  console.log(
    `continuing this high usage, you'll end up using up ${
      periodLength - (usage + projectedUsage)
    }GB from your daily limit.`
  );
}
