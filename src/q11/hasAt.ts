const myInput = process.argv[2];
const hasAt = myInput.includes("@")

if(hasAt){
    console.log("Has @");
}
else {
    console.log("No @");
}