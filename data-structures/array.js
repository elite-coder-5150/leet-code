const cars = ['ford', 'gmd', 'SSC'];

const printArray = () => {
    let str = '';

    for (let i = 0; i < cars.length; i++) {
        str += this.cars[i] + ' ';
    }

    return str;
}

let arr = printArray();
console.log(arr);