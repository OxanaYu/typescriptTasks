// 1) Первое задание
//Первое так:
// let first: number;
// let second: string;
// let third: boolean;

//Либо так:
// let first: number = 23;
// let second: string = "hi";
// let third: boolean = true;

// 2) Второе задание

type FunctionArea = (pnum: number, radius: number) => number;

const calculateArea: FunctionArea = (pnum, radius) => {
  const area = pnum * radius ** 2;
  return area;
};
console.log(calculateArea(3.14, 20));

type FunctionDensity = (m: number, v: number) => number;

const calculateDencity: FunctionDensity = (m, v) => {
  const p = m / v;
  return p;
};

console.log(calculateDencity(100, 40));

//3) Третье задание
type TypeProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const tv: TypeProduct = {
  id: 343,
  title: "tvSet",
  description: "HDTV 5K",
  price: 75000,
  colors: ["black", "silver"],
};

const phone: TypeProduct = {
  id: 375,
  title: "Iphone15",
  description: "Newest Smartphone",
  price: 105000,
  colors: ["navy blue", "pink"],
};

const earphones: TypeProduct = {
  id: 981,
  title: "airpods",
  description: "wireles earphones",
  price: 9000,
  colors: ["white", "brown"],
};

const arrProduct: TypeProduct[] = [tv, phone, earphones];
console.log(arrProduct);
