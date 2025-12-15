const myInput = process.argv[2];
const hasAt = "@";

if(myInput.includes("@")){
    console.log("Has @");
}
else {
    console.log("No @");
    process.exit();
}