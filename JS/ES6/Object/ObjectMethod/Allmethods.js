/*
    Object.create()
    Object.keys()   - return an array and it contains all tha object keys
    Object.values() - retyrn an array its contactins alll the object values
    Object.assign() - copy the key:value pairs/... - es 6
                    - extract and copy
    ...
*/
let one = { one: 1, hundered: 100 };
let two = { two: 2 };

let all = Object.assign(one, two);
console.log(all);
