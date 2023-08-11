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
      let currSum = currLeftValue+currRightValue+arr[i];
      if(currSum<target){
         if(Math.abs(target-currSum)< Math.abs(target-closestSum)){
			 closestSum = currSum;
		 };
         left++;
      }	
      else{
         if(Math.abs(target-currSum)< Math.abs(target-closestSum)){
			 closestSum = currSum;
		 };
         right--;
      }	
     }
   }
	return closestSum;
  
}

module.exports = threeSum;
