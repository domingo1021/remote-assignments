function twoSum(nums, target) {
  // your code here
  let record = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (Object.keys(record).includes(nums[i].toString())) {
      return [record[`${nums[i]}`], i];
    }
    record[`${difference}`] = i;
  }
  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 26));
console.log(twoSum([1, 1, 1, 1], 2));
console.log(twoSum([-1], 10));

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
