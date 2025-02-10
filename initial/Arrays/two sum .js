function twoSum(arr,target){
      for(let i=0;i<arr.length;i++){
            let diff=target-arr[i]
            if (arr.includes(diff)&& arr.indexOf(diff)!==i){
                  return [arr[i],diff]
            }
           
      }
      return null
   
}

let arr=[0,-1,2,-3,1]
let target=2 
console.log(twoSum(arr,target))