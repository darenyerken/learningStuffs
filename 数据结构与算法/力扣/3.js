// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// var rotate = function(nums, k) {
//     const len = nums.length
//     const nums2 = []
//     for(let i = 0;i < len; i++) {
//         nums2[(i+k)%len] = nums[i]
//     }
//     for(let i = 0;i < len; i++) {
//         nums[i] = nums2[i]
//     }
// };

var rotate = function(nums, k) {
    const len = nums.length
    let nums2 = nums.reverse().slice(0,k%len).reverse()
    let nums3 = nums.slice(k%len).reverse()
    let nums4 = nums2.concat(nums3)
    for(let i = 0;i< len;i++) {
        nums[i] = nums4[i]
    }
};
 
const  arr = [1,2,3,4,5]
rotate(arr,8)
console.log(arr)