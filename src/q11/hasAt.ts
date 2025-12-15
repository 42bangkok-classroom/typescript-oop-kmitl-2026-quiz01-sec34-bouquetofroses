const myInput = process.argv[2];
const hasAt = "@";

if(hasAt){
    console.log("Has @");
}
else {
    console.log("No @");
    process.exit(0);
}