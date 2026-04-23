function func1(test){

  console.log("This is func 1");
  
  let x = 20;

  test();

}


let z = function(){
  console.log("This is func2");
  let y = 30;
  console.log(x);
  
}

func1(z);
