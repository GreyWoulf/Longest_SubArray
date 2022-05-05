class Solution {
    constructor(arr) {
      this.arr = arr;
    }
    longestSubArrayNoRepeat() {
      let arrInt = [];
      for(let i = 0; i < (this.arr).length; i++){
        if(arrInt.indexOf((this.arr)[i]) === -1){
          arrInt.push((this.arr)[i]);
        }
      }
      console.log(arrInt);
      return "Is a valid solution. The maximum length is : " + arrInt.length;
    }
  }
  
  const subArray1 = new Solution([2, 5, 6, 2, 3, 1, 5, 6])
  console.log(subArray1.longestSubArrayNoRepeat());
  console.log(subArray1);