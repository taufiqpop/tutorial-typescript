interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
}

function create (processor: IProcessor): void {
    console.log(`
        Terima Kasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:
        nama base model : ${processor.baseModel}
        nama model: ${processor.modelName}
        kecepatan clock: ${processor.clockSpeed}
    `);
}

const intelCoreI5 = {
    brand: 'Intel',
    baseModel: 'Core i5',
    modelName: 'i5-11350F',
    clockSpeed: 4,
};

create(intelCoreI5);