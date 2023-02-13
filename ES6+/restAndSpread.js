// trying out the given examples

const restExample = (a, ...left) => {
    console.log(a, "and the rest are ", left)
}

restExample(2, 3, 4, 5, 66, 6, 4, 66, 55);

// making the use of spread in the above function

const spreadWithRest = (a, ...left) => {
    console.log(a, left);
    console.log(...left);
    const arr = left;
    arr.push(a)

    console.log(arr);
}

spreadWithRest(2, 3, 4, 5, 66, 6, 4, 66, 55);

//lets try one more variation of spread opreator

const spreadExample = (a, b, ...others) => {
    console.log(a, others, b)
    const array = [4, 5, 6, ...others];
    console.log(array);
}

spreadExample(100, 101, 102, 103, 104, 105, 106);

//mix example of rest and spread

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const spreadExample2 = ([first, second, ...rest]) => { // array as parameter
    console.log(first, second, rest); // the rest is another array that binds the rest of the item made with rest parameter
}

console.log(spreadExample2(array)); // will console the first and second value differently and the third will be all the left outs packed in an array


// rest with spread
console.log(spreadExample2([...array, 11, 12, 13])); // here all the items of array variable is laid out and then other items are added this is the use of spread operator
