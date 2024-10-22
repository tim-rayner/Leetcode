const nums = [3, 2, 4],
  target = 7;

export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x];
      }
    }
  }
  return [];
}

twoSum(nums, target); // [0, 2=]
