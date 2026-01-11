let userName = "Abin";
console.log(userName);

let age = 25;
console.log(age);

let isStudent ;
console.log(isStudent);

let score ;
console.log(score);

let a = 10, b = 20, c = 30, d  = 40;
console.log(a, b, c, d);

let qas = 12345;
console.log(qas);

//9. Store a string in a variable.

let ab = "Hello, World!";
console.log(ab);

//10. Store a boolean value in a variable.

let isActive = true;
console.log(isActive);

//11. Store null in a variable.

let data = null;
console.log(data);

//Store undefined explicitly in a variable.

let result = undefined;
console.log(result);

//Store a floating-point number in a variable.

let x = 0.2;
console.log(x);

//14. Store a negative number in a variable

let y = -3;
console.log(y);

//Print a variable value to the console.

let firstName = "John";
console.log(firstName);

//16. Declare a variable using var.

var city = "New York";
console.log(city);

//17. Declare a variable using let

let abin = "Vw";
console.log(abin);

//18. Declare a variable using const.

const aby = "abin";
console.log(aby);

//Reassign a let variable

let country = "USA";
console.log(country);
country = "Canada";
console.log(country);

//Redeclare a variable using var

var fruit = "Apple";
var fruit = "Banana";   // Redeclare
console.log(fruit);

//Declare a const variable for PI.

const P = 3.14159;
console.log(P);

//Use let for a value that changes.

let radius = 5;
 radius = 10;
console.log(radius);

//28. Use const for a fixed value
  
  const CONNTRY = "India";
  const  PI = 3.14;
  const TAX_RATE = 0.07;
  console.log(CONNTRY);
  console.log(PI);
  console.log(TAX_RATE);
  
//Write a valid camelCase variable name

  const abNvk = "Vw";       // totalMarkas
  console.log(abNvk);       // isLoggedIn
                            // userEmail     // camelCase 
                            // itemCount
                            // firstName

  const user_name = "Abin"; 
  const total_marks = 95;                         // snake_case
  const is_logged_in = true;
  const user_email = "abin@example.com";

    console.log(user_name);
    console.log(total_marks);
    console.log(is_logged_in);
    console.log(user_email);

    const name = "Abin";       // valid
    const userEmail = "abin@example.com";

    console.log(name);
    console.log( userEmail);

    //Store a number and check its type.

    const agee = 30;
    const namee = "Abin";
    console.log(typeof agee);   // number
    console.log(typeof namee);  // string

//let isActive = true;

   let isActiv = true;
console.log(typeof isActiv);

//Store null and check its type.

let nll = null;
console.log(typeof nll);  // object

//55. Store undefined and check its type.

let undef;
console.log(typeof undef);  // undefined

//Store NaN and check its type.

let z = 10;
console.log( typeof z);

//Store an empty string and check its type.

let number= "";
console.log(typeof number);  // string

//Store 0 and check its type.

let an = 0;
console.log(typeof an);  // number

//Store true as a string and check its type.

let as = "true";
console.log(typeof as);  // string

//Compare number 10 and string '10'.

let r = 10;
let s ="10";

console.log(r==s); // true
console.log(r === s); // false
console.log(typeof r);
console.log(typeof s);

//Store a BigInt value.

let bigIntValue = 9007199254741991n;
console.log(bigIntValue);
console.log(typeof bigIntValue);  // bigint

//Store a Symbol value.

let id = Symbol("userId");
console.log(id);

console.log(typeof id); // symbol

let g = Symbol("id");
let h = Symbol("id");

console.log(g === h); // false

// Which data types are primitive?

 let num = 42;               // number
 let str = "Hello";           // string
 let bool = true;          // boolean
 let nllValue = null;     // null
 let undefValue;      // undefined
 let bigIntNum = 9007199254741991n;  // bigint
 let sym = Symbol("sym");   // symbol       
    console.log(typeof num);    
    console.log(typeof str);
    console.log(typeof bool);
    console.log(typeof nllValue);
    console.log(typeof undefValue);
    console.log(typeof bigIntNum);
    console.log(typeof sym);

//Declare a global variable.

let siteName = "MyWebsite"; // global variable

function showSite() {
  console.log(siteName); // access inside function
}

console.log(siteName); // access outside function
showSite();

//68. Declare a block-scoped variable

if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // accessible here
  }

  //Access var before declaration.

   console.log(i);  // undefined
  var i = 10;

  // Access let before declaration.
   
    // error console.log(j);   
    let j = 20;

    //• 82. Access let before declaration.

   // error console.log(cc);
    const cc = 30;

// Swap two numbers using third variable
    let vc = "Hello";
    let cv = "World";

    let temp = vc;
    vc = cv;
    cv = temp;

    console.log(vc); // World
    console.log(cv); // Hello

    //Swap two numbers without third variable

    let p = 5;
    let q = 10;

    let tempa = p;
    p = q;
    q = tempa;
    console.log(p); // 10
    console.log(q); // 5


   let m = "";
   let n = "";

   let tempb = m;
    m = n;
    n = tempb;
    console.log(m);
    console.log(n);

