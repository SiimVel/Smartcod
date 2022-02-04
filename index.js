// kuidas muutujaid sättida:
// console.log(foo);
var bar;
console.log(bar);

let foo = 'FOO'; // 'foo', 'bar', 'baz' jne on väljendid, mida kasutatakse näidetena; need ei tähenda mitte midagi
console.log(foo);
var bar = 'bar'; // "var-i" ei maksa tänapäeval enam kasutada, tuleks kasutada "let-i".
bar = 'bar'; // see on 'hoisting'

const baz = 'afaf'; // 'const' on 'muutumatu väärtus', seda muuta ei saa (vt allpool kui märkida baz = 'gasdasd', siis annab Errori, sest 'baz' on kui 'const' muutumatuna määratud.)
console.log(baz);
// baz = 'gasdasd'; // see on error :)

let text = 'asdasd' + baz + foo; // nii saab tekste liita JS-is.

let text2 = 'fakaza' + baz + foo;


// tekstiga liitmine
console.log(text[3]);
console.log(typeof baz); //"typeOf" näitab, mis elemendiga tegemist on (string, object, array vms)"
console.log(text.length); // ".length" näitab pikkust
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.substring(3, text.length-2));

let array1 = [1, 2, 3, 4, 5];
console.log(array1);
array1.push(6); // kuidas lisada array-sse väärtusi
console.log(array1);
array1.push(7, 8, 9);
console.log(array1);
console.log(array1.pop()) // pop - eemaldab viimase väärtuse; kuna käsklus on koos console.log-iga, prindib vastuse ka välja




// FUNKTSIOONID
// (ehk kuidas taaskasutada koodi st et ei peaks sama/sarnase asja tegemiseks koodi copy-pasteda)

function sayHello(){
    console.log("Hello!!!")
}

sayHello();  // nii saab seda (korduvalt, vt järgmine rida) välja kutsuda
sayHello();

let sayName = function (){ // kuna sellel ei ole sulgudes väärtust, nimetatakse seda "anonüünseks funktsiooniks"

}

let sayName1 = function (name){
    console.log("Hello " + name);
}

sayName1('Siim')
sayName1('Kris')
sayName1('Vellemaa')

// let sayAge = (age) => {
//     if(age > 1){
//         console.log("you are " + age + " years old")
//     } else {
//         console.log("you are " + age + " years old")       
//     }
// }

// let age = prompt('How old are you?');
// sayAge(age);
// alert('asdfasdfads');

// let hello = "hello";
// function example1(){
//     console.log(hello);
// }

function example1(){
    console.log(this);
}

let person = {
    age: 24,
    getAge(){
        console.log(this);
    }
}
person.getAge();

person = {
    age: 35,
    getAge(){
        return this.age;
    }
}

let age = person.getAge();
console.log(age);
console.log(person.getAge());


// LOOP, veel üks: 
function recursive(i){
    console.log(i);
    if(i<10){
        recursive(i+1);      
    }
} 
recursive(0);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let people = [
    {
        name: 'Siim',
        age: 37
    },
    {
        name: 'Kris',
        age: 42
    },
    {
        name: 'Kaarel',
        age: 17
    },
    {
        name: 'Viola',
        age: 10
    },
    {
        name: 'Harald',
        age: 8
    },
    {
        name: 'Solveig',
        age: 2
    },
]

let evenNumbers = numbers.filter(num => num%2===0);
console.log(evenNumbers);

let underagedPersons = people.filter(person => person.age < 18);
console.log(underagedPersons);

let sexyPersons = people.filter(person => person.age > 18);
console.log(sexyPersons);

let poweredNumbers = numbers.map(num => num*num);
console.log(poweredNumbers);

let ageSum = people.reduce((sum, person) => sum+=person.age, 0);
console.log(ageSum);

let sorted = people.sort((personA, personB) => personA.age-personB.age);
console.log(sorted);

people.forEach(value => {
    console.log(value.name);
})

let num = 2;

let num2 = num;

num2 = 3;
console.log(num2);
console.log(num);

let obj = {
    num: 2
}

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.num = 3;

console.log(obj);
console.log(obj2);

console.log(window);
// window.location = "https://google.com";  --> sellega saab suunata muule leheküljele (antud juhul nt google.com)
console.log(document);

let h1El = document.getElementsByTagName('h1');
console.log(h1El);
console.log(h1El[0].inner.innerText);

h1El[0].innerText = "Some much cooler text here!"