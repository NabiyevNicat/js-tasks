// task 1

function reqemiTopla() {
    let number=prompt('Reqemi daxil et:');
    let a=0
    for(i=1;i<=number;i++) {
        a+=i
    }
    console.log(`reqemi topla ${a}`);
}

// task 2

function hasiliTap() {
    let hasil = 1;
    for (let i = 1; i <= 5; i++) {
      hasil *= i;
    }
    return hasil;
  }
  
  console.log("Hasil: " + hasiliTap());

  // task 3

  function helloWorld(n) {
    for (let i = 0; i < n; i++) {
      console.log("Hello World!");
    }
  }
  
  let n = prompt("Reqem daxil edin:");
  helloWorld(Number(n));

  // task 4

  function bolme(){
    let x=prompt(" Reqem daxil edin:");
    for(i=1;i<=x;i++){
        if(i%3==0){
            console.log(i);
        }
    }
}

// task 5

function CemiTap(){
    let myNumber=prompt('Reqem Daxil et:');
    let sum=0
    for(i=1;i<=myNumber;i++){
        if(i%3==0){
            sum+=i
        }
    }
    console.log(sum);
}
  
  