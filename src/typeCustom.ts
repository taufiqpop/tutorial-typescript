// TIPE DATA CUSTOM

type TemanType = {
  nama: string;
  isKampret: boolean;
  hutang?: number;
};

let temanKita: TemanType;

temanKita = {
  nama: "ilham",
  isKampret: true,
};

console.log({ temanKita });
