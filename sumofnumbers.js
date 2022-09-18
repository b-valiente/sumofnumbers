const testNums = [1, 2, 3, 4, 5];

function sumFor(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];
  console.log(sum);
}
sumFor(testNums);

function sumWhile(num) {
  let sum = 0;
  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  console.log(sum);
}

sumWhile(testNums);

function sumRecursion(num) {
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return num + memo; }, 0);
}
console.log(sumTheSimpleWay(testNums));
