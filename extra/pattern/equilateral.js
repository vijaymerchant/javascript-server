
let number = process.argv[2];
    
let str="", nol, space=1;
if (number>=2 && number <= 10){
        nol=number;

space = nol-1;
for (let i=0;i<=nol;i++){
    for (let j=0;j<=space;j++){
        str=str+" ";
    }
    space--;
    for(let k=0;k<=i-1;k++){
        str=str+"* ";
    }
    console.log(str);
    str="";
}
}
else{
    console.log("Please enter number between 2 to 10")
}
