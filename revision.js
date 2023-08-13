
// let Hello=()=>{
//     document.write("Hello");
// }

// Hello();

// (function Hello(){
//     document.write("Hello");
// })();

//let,const and var

// var str="hello";

// if(5===5){
//     str="hello1";
// }

// document.write(str);

// document.write(x);
// let x=5;

const actor={
    name:"Salman Khan",
    Payment:"300 Cr",
    Movie:"Tiger-3",
    age:56
}

// actor={
//     Office:"Bandra"
// }
actor.name="Shahrukh Khan";
document.write(actor.name+"\n");





const arr=[8,6,4,3,2];

const func=(num)=>{
    return num*10;
}

const tenarr=arr.map(func);
document.write(arr+"\n");
document.write(tenarr+"\n");



const brr=[8,6,4,3,2];

const func1=(num)=>{
    return num%2==0;
}

const evenarr=arr.filter(func1);
document.write(brr+"\n");
document.write(evenarr+"\n");