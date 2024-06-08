const hasSubarraySum = (arr, target) => {
 let currentSum = 0;
 let left = 0;
 for (let right = 0; right < arr.length; right++) {
  currentSum += arr[right];
  while (currentSum > target) {
   currentSum -= arr[left];
   left++;
  };
  if (currentSum === target) {
   console.log(true);
   return true;
  }
 }
 console.log(false);
 return false;
};
module.exports = hasSubarraySum;