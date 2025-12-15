let  size2 = Number(process.argv[2]);

for ( let i = 0 ; i < size2 ; i++ ){
    let result2 = "";
    let row = "";
    if (i%2 === 0){
        result2 += "1";
    }
    else {
        result2 += "0";
    }
    for ( let j = 0 ; j < size2 ; j++ ){
        row += result2;
    }
    console.log(row);
}