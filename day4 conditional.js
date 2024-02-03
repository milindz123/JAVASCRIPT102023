//conditinal statemenet
//// single input ==> mutiple outcome

//10>2  >true (1 outcome)  false (1 outcome)

//if
//if - else
//if- else if -else
//switch case

//syntax==> if

// if(condition){
//     //statemenet
// }

if (10 < 2) {
    console.log('hello')
}
else {
    console.log('bye')
}

//100 => if(false)

//ticket

//1-5 ==> 10 % discount
//6-10 ==> 20 % discount
//>10 ==> 30 % discount


let ticketcount = -1
if (ticketcount>0 && ticketcount<=5)
{
    console.log('10% discount')
}
else if(ticketcount >5 && ticketcount<=10)
{
    console.log('20% disocunt')
}
else if (ticketcount>10)
{
    console.log(30% discount)
}
else{
    console.log('invalid output')
}



//marks

let marks= 91
if (marks>90) //92>60
{
console.log('1st division')
}
else if(marks>70)//92<70
{
    console.log('2nd divison')
}
else if(marks>60)//92>90
{
    console.log('3rd division')
}
else{
    console.log('Fails')
}

//ex
let a=100
let b=200
if (a>b)
{
    console.log('a is greater')
}
else{
    console.log('b is greater')
}

let a1=1000
let b1=20000
let c1=30000
if (a1>b1 && b1>c1)
{
console.log('A1 is greater')
}
else if(b1>a1 && b1>c1)
{
console.log('B1 is greater')
}
else{
    console.log('C1 is greater')
}