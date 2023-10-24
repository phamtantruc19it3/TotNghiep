for(i=0; i<100;i++){
   if(i==Arr100[i])
   console.log(i)
}
///
var Arr1=[]
var Arr2=[]
for(i=1; i<55;i++){
    for(j=0; j<95;j++){

        if(i+Arr95[j] ===100){
            Arr1.push(Arr95[j])
        }
        else {
            Arr2.push(100-i)
            
        }
    }
}
console.log(Arr2)
