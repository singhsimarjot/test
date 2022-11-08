function train_sort(n: number , trains: number[]){
    let trainStack:Array<number> = [];
        for (let index = 0; index < n; index++) {
            if(trainStack.length){
               if(trainStack[0] < trains[index] ) {
                        trainStack = [ trains[index],...trainStack]
               }
               else if(trainStack[trainStack.length-1] > trains[index] ){
                trainStack = [ ...trainStack,trains[index]]
               }
            }
            else{ 
              trainStack = [ trains[index]]
            }
          }
         return trainStack.length
    }