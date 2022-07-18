
// let fruits = [3, 4, 10, 1, 12];
// let somaFruits = 0;

// for(let i = 0; i < fruits.length; i += 1){
//     somaFruits += fruits[i]; 
// }if(somaFruits > 15){
//     console.log(somaFruits);
// }else if(somaFruits <= 15){
//     console.log("valor menor que 16");
// }

//  // exercicio 1
// function fatorial(n){
// let a = n;
// let b = 1;
//     for(let i = 0; i < n; i += 1){
//         b = b * a
//         a = a - 1         
//     };
//     console.log(b);    
// };

// fatorial(20)


const fato = (n) => n === 0 || n === 1 ? n : n * fato(n-1);
console.log(fato = 5);