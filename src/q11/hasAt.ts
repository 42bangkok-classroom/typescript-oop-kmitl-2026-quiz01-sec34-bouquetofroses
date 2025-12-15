const myInput = process.argv[2];
if (myInput === undefined)process.exit();
const hasAt = "@";

if(myInput.includes("@")){
    console.log("Has @");
}
else {
    console.log("No @");
    process.exit(0);
}