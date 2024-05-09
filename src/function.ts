// FUNCTION
function creates(): number {
    return 2;
}

// Arrow Function
const create2 = (): string => "Hello World";

const result = create2();
// console.log(result);

function add (x: number, y: number): void {
    const z: number = x + y;
    console.log("Hasilnya adalah: " + z);
}

add(10, 20);