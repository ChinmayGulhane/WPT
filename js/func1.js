var i=0;

function doJob(f1){
    while(i<=2){
 console.log("Tom &");
  f1();
  //test();
  i++;
    }

    f1()
}

doJob(function f1(){
    console.log("Jerry");
})
console.log("-----------------")

doJob(()=>{console.log("Oggy")})


doJob(()=>{console.log("Cockroach")})
function test(){
    console.log("test");
}
doJob(test);
doJob(test);

let v=function(){
    console.log("variable function");
}
doJob(v);

