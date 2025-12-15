let size1 = Number(process.argv[2]);

for ( let i = 0 ; i < size1 ; i++ ){
    let result1 = "";
    for ( let j = 0 ; j <= i ; j++){
        result1 += "*";
    }
    console.log(result1);
}

