var [n, k] = [5,3];  //1
var arr = [1,1,3,4,5] // 1

// 5-1 = 4, 4>3{right--},4-1
// 5-1 = 4,4>3(left++) 5-2
var left=0;
var right = n-1;
var flag = false;
while(left<n && right>=0){ //n
     if(arr[right]-arr[left]==k){
         console.log("Yes");
         flag=true;
         break;
     }else if(arr[right]-arr[left]>k){
         right--;
     }else{
         left++;
     }
}

if(!flag){
    console.log("No");
}
   
