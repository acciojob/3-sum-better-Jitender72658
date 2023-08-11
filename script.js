function threeSum(arr, target) {
arr.sort((a,b)=>a-b);
 let start= 0;
 let size = arr.length;
   let closestSum = Number.MAX_SAFE_INTEGER;
   for(let i =start;i<size-2;i++){
     let startValue = arr[i];
     let left = i+1;
     let right = size-1;
     while(left<right){
      let currLeftValue = arr[left];
      let currRightValue = arr[right];
      if(currLeftValue+currRightValue<target-arr[i]){
         closestSum= Math.min(closestSum, Math.abs(currLeftValue+currRightValue+arr[i]));
         left++;
      }	
      else{
         closestSum= Math.min(closestSum, Math.abs(currLeftValue+currRightValue+arr[i]));
         right--;
      }	
     }
   }
	return closestSum;
  
}

module.exports = threeSum;
