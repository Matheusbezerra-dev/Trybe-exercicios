let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 200, 27];
// exercício 1
// console.log(numbers);

// exercício 2
// let somaArray = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     somaArray += numbers[i];
//  };
//  console.log(somaArray)

// exercício 3
// let media = 0;
//  for(let i = 0; i < numbers.length; i += 1){
//      media += numbers[i] / numbers.length;
//  };
// console.log(media)

// exercício 4
// let media= 0;
//  for(let i = 0; i < numbers.length; i += 1){
//      media += numbers[i] / numbers.length;
//  }if(media > 20){
//      console.log("valor maior que 20")
//  }else if(media <= 20){
//      console.log("valor menor ou igual a 20");
//  };

// exercício 5
// let numberBigger = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] > numberBigger){
//         numberBigger = numbers[i]
//     };
// };
// console.log(numberBigger)

// exercício 6
// let oddNumbers = 0;
// for(let i = 0; i < numbers.length; i += 1){    
//     if(numbers[i] % 2 === 1){
//         oddNumbers.push(numbers[i]) 
//     }else{
//         oddNumbers = 'nenhum valor ímpar encontrado'
//     };
// };
// console.log(oddNumbers)

// exercício 7
let smallestNumber = null;
for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i];
    };
};
console.log(smallestNumber)