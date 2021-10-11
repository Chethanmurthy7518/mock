let obj = {
    Name:"CHETHAN",
    Age:26,
    Qualification:"B.E",
    Designation:"Developer"
}
console.log(obj)
for (const val in obj) {
    console.log(`${val}: ${obj[val]}`)
}