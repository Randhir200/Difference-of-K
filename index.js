function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let [n,k] = input[line].trim().split(" ").map(Number);
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
       let found = false;
       for(let i=0;i<n;i++){
            if(isPresent(i)){
                console.log("Yes")
                found=true;
                break;
                }
          }
  
          function isPresent(i){
              for(let j=0;j<arr.length;j++){
                  if(i!=j){
                      if(arr[i]+k == arr[j]){
                          return true;
                      }
                  }
              }
              
              return false;
          }
               
       if(!found){
           console.log("No")
       }
       
       
       
        
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  