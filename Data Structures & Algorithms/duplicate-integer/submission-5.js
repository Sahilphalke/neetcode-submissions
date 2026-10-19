class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const seen = new Set();

        // for (let num of nums) {
        //     if (seen.has(num)) {
        //         return true;
        //     } else {
        //         seen.add(num);
        //     }
        // }
        // return false;

        const newnum = new Map();

        for(let num of nums){
            if(newnum.has(num)){
                return true
            }else {
                newnum.set(num, true)
            }
        }
        return false
    }
}
