function addClass(obj, cls) {
    cls = cls.replace(/\s/g, "");

    let regExp = RegExp(cls);

    if (!regExp.test(obj.className)) {
        obj.className += " " + cls;
    }
}


function camelize(str) {
    let a = str.split(/\-/g);
    let b = "";
    let string = a[0];

    for (let i = 1; i < a.length; i++) {
        b = a[i];

        string += b.charAt(0).toUpperCase() + b.slice(1);
    }
    
    return string
}


function removeClass(obj, cls) {
    let a = obj.className.split(/ /g);
    let b = " ";

    cls = cls.replace(/ /g, "");

    for(let i=0; i<a.length; i++) {
        if (a[i] !== '' && a[i] !== '' && a[i] !== cls){
            b += a[i] + " ";
        }
        obj.className = b;
    }
}


function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (val < a || val > b) {
          arr.splice(i--, 1);
        }
    }
    
}


function deleteRepeat(array) { 
    var obj = {};

    for (var i = 0; i < array.length; i++) {
        var str = array[i];
        obj[str] = true;
    }

    return Object.keys(obj);
}

function find(array, number) { 
    var x = null,
        y = null;
    array.forEach(function (i, value) {
        if(number - value < number) {
            x = number - value;

            array.forEach(function (j, value2) {
                if(x == value2 && j > i) {
                    y = value;

                    result.push(y +'+' + x);
                }
            })
        }
    });
}


function startingSubstring(arr) {

    let result = "";

    const str1 = arr[0];
    const str2 = arr[1];

    for (let i = 0; i < str1.length; i++) {
        while (str1[i] === str2[i]) {
            result += str1[i];
            break;
        }
    }

    return result;

}


function shuffle() {
    return 0.5 - Math.random();
  }


var litmir = [
    { name: 'Jhon', age: 23},
    { name: 'Bill', age: 18},
    { name: 'Donald', age: 6}
    ];
 
 function compare(a,b)
  {
   if (a.age < b.age)
     return -1;
   if (a.age > b.age)
     return 1;
   return 0;
  }
 
 litmir.sort(compare);
 
 
 for(var i = 0; i < litmir.length; i++) {
   console.log(litmir[i].name,litmir[i].age); 
 }


 function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
 