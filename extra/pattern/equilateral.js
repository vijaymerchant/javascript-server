process.argv.forEach (function equilateral(number){
let str="", nol=number, space=1;
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
)