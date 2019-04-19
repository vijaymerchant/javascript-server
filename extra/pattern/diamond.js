process.argv.forEach (function diamond(number){
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
    
    space=0;
    str="";
    for (let i=0;i<=nol-1;i++){
        for (let j=0;j<=space-1;j++){
            str=str+" ";
        }
        space++;
        for(let k=nol-i;k>=1;k--){
            str=str+"* ";
        }
        console.log(str);
        str="";
          
    }
    }
    )