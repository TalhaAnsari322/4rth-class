

                  //ITERATORS JAVASCRIPT
                  //Exapmle



function createRangeIterator (min = 0,  max = Infinity, step = 1)  {
    let nextNum = min;
    let numCount = 0;

    const rangeIterarotor ={
        next: function () {
            let result;
            if (nextNum < max)  {
                result = {value: nextNum, done: false };
                nextNum += step;
                numCount++;
                return result;
            }
                return  { value: numCount, done: true }
        },
    };

    return rangeIterarotor;
} 

const useCase = createRangeIterator(2, 8, 2);

let result = useCase.next();

while (!result.done) {
    console.log(result.value);
    result = useCase.next ();
}




               // GENRATORS JAVASCRIPT
               // Example


function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
//Expected output: 10

console.log(gen.next().value);
//Expected output: 20 