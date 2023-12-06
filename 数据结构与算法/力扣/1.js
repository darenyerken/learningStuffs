var removeDuplicates = function(nums) {
    for(let i = 0; i<nums.length; i++) {
        let j = i+1
        while(j<nums.length) {
            if( nums[i] === nums[j]) {
                j++
            } else break
        }
        nums.splice(i+1,j-i-1)
    }
    return nums.length
};

let arr = [0,0,1,1,1,2,2,3,3,4]
let res = removeDuplicates(arr)
console.log(res,'   ',arr)

//删除数组中的重复元素并返回数组长度