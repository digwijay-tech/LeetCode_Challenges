/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums1[i] < nums1[j]) {
        [nums1[i], nums1[j]] = [nums1[j], nums1[i]];
        console.log(nums1);
      }
    }
  }
};