const maps=(A)=> {return A.map((i)=> i*2)}
const red=(A)=>A.reduce((acc,cur)=> acc+cur)

function reds(A){
      return A.reduce(function(arr,cur){
            return arr+cur
      })
}
function mapss(A){
     return  A.map(function (i){
         return i*2
     })
}

console.log(Date())
let A=[3,6,9,8,4,5,2,3]
x=maps(A)
xx=mapss(A)
y=red(A)
yy=reds(A)
console.log(yy)