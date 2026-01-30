/* 
let a=[10,20,30,40,50];
function sumofarray(){
    let sum=0;
    for(i=0;i<a.length;i++){
        sum=sum+a[i];
    }
    return sum;
}
console.log(sumofarray());
 */
/* let b=[1,2,3,4,5];
function findmaxNum(){
    let max=b[0];
    if(i=1,i<b.length,i++){
        if(b[i]>max){
            max=b[i];
        }
    }
    return max;
}
console.log(findmaxNum(b)); */
/* console.log(fun());
function fun(name="Guest"){
    return User;
}
console.log(fun());
console.log(fun("Aditya")); */

/* creata a arry funtion in which in which a=10, b=5, in which sumof if any input not givne pint the given defualt value */
/* 
function sumOf(a = 10, b = 5) {
    console.log(a + b);
}
sumOf();        
sumOf(20, 10); 
sumOf(7);  */

/* const funCal=(a,b,mul)=>{
    return mul(a,b);
}
console.log(funCal(10,5,mul))
 */

/* function showmsg(msg,callback){
    setTimeout(()=>{
        console.log("hell",msg);
        callback();
    }, 1000);
}
showmsg("Aditya",()=>{
    console.log("hi");

}); */

/* let arr=[1,5,10,8];
let newArr=arr.map((value)=>{
    return value*2;
});
console.log(newArr); */

/* let arr=[1,5,10,8];
let newArr=arr.filter((value)=>{
    return value%2===0;
});
console.log(newArr); */


/* const arr=["aditya","rohit","pandey"];
const newArr=arr.map((value=>{
    return value.toUpperCase();
}));
console.log(newArr); */

/* function outerFunction(){
    let val = 10;
    return fucntion();{
        console.log(val);
    }
}
for (var i=0;i<5; i++){
    setTimeout(()=>{
        console.log(j)
    },1000)
}

function printName() {
    var Name = "ADITYA";

    setTimeout(function () {
        console.log(Name);
    }, 1000); 
}

const printName = () => {
    var name = "ADITYA";
    setTimeout(() => console.log(name),1000);
};
printName();

function */

/* function createAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function (amount) {
            balance += amount;
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
            } else {
                console.log("Gareeb ho tum, itna paisa nahi hai!");
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}
const account = createAccount(1000);
account.deposit(0);
account.withdraw(1001);
console.log(account.getBalance()); */

const promise = new Promise((resolve, reject)=>{
            const flag=false;
            setTimeout(()=>{
                if(flag){
                    resolve("reslove state");
                }else{
                    reject("reject state");
                }
            }, 1000);
        })

        .then((data)=> console.log(data))
        .catch((err)=> console.log(err));

        