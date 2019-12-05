/*№ - 1*/
const obj = {
  className: 'open menu'
}
addClass(obj, "new");
console.log(obj.className);

/*№ - 2*/
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

/*№ - 3*/
removeClass(obj, 'new');
console.log(obj.className);

/*№ - 4*/
var arr = [5, 3, 8, 1];
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);

/*№ - 5*/
var num = 5;
var arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];
var result = [];
find(deleteRepeat(arr), num);
console.log(result);

/*№ - 6*/
var arr1 = ['Капуста', 'Капітал'];
var arr2 = ['Ракета', 'Ракушка','Рак'];
var res1 = startingSubstring(arr1);
var res2 = startingSubstring(arr2);

console.log(res1); 
console.log(res2); 

/*№ - 7*/
var array = [0,1,2,3,4,5,6,7,8,9];
console.log(array);

/*№ - 8*/
var litmir = [
    { name: 'Jhon', age: 23},
    { name: 'Bill', age: 18},
    { name: 'Donald', age: 6}
    ];
    litmir.sort(compare);
 
 
    for(var i = 0; i < litmir.length; i++) {
      console.log(litmir[i].name,litmir[i].age); 
    }
/*№ - 9*/
let strings = ["C++", "C#", "C++","C", "C++", "JavaScript", "C++", "JavaScript"
];

console.log(unique(strings));