/*
Given an array nums. We define a running sum of an
array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

********************************************************/

// const runningSum = function (nums) {

//     let output = [];
//     let count = 1;

//     while (count < nums.length + 1) {
//         let result = 0;

//         for (let i = 0; i < count; i++) {
//             let num = nums[i];
//             result += num;
//         }
//         output.push(result);
//         count++;
//     }
//     return output;
// };

let results = [];
let runningSum = function (nums) {
    if (!nums.length) {
        return results;
    }
    let summed = nums.reduce((sum, num) => {
        return sum + num;
    });
    results.unshift(summed);
    return runningSum(nums.slice(nums.length - 1));
};

console.log(runningSum([1, 2, 3, 4, 5]))
// test
