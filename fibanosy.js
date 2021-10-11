let number = 10, val1=0, val2=1,nextval;
for(let i=1;i<=number;i++){
    console.log(val1);
    nextval = val1 + val2;
    val1 = val2;
    val2 = nextval;
}

