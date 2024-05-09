type CoreCount = 2 | 4 | 8 | 12;
type CoreName = 'dual core' | 'quad core';
type Core = CoreCount | CoreName;

interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost: boolean;
}

function createAMD (processor: AMD): void {
    console.log(`
        Terima Kasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:
        nama base model : ${processor.baseModel}
        nama model: ${processor.modelName}
        kecepatan clock: ${processor.clockSpeed}
        total core: ${processor.coreTotal}
        precision boost enable? ${processor.precisionBoost ? processor.precisionBoost : "Tidak Ada"}
    `);
}

function createIntel (processor: Intel): void {
    console.log(`
        Terima Kasih ${processor.brand}, anda telah berhasil membuat processor dengan detail berikut:
        nama base model : ${processor.baseModel}
        nama model: ${processor.modelName}
        kecepatan clock: ${processor.clockSpeed}
        total core: ${processor.coreTotal}
        turbo boost enable? ${processor.turboBoost}
    `);
}

const corei5: Intel = {
    brand: 'Intel',
    baseModel: 'Core i5',
    modelName: 'i5-11350F',
    clockSpeed: 4,
    coreTotal: "dual core",
    turboBoost: true,
};

const ryzen3: AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: 'r-5570x',
    clockSpeed: 6,
    coreTotal: 4,
    precisionBoost: true,
};

createIntel(corei5);
createAMD(ryzen3);