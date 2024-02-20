// const fileConvert =require("./fileconvert.js")

// function topMatchesInCity(matchData) {
    
//     const result=matchData.reduce((acc,curr)=>{

//         const city=curr.city;

//         if(!city){
//             return acc;
//         }
//         if(!acc[city]){
//             acc[city]=0;
//         }
//         acc[city]++;

//         return acc;
//     },{})

//     // console.log(result);

//     const maxCity=Object.keys(result).reduce((acc,curr)=>{
//         return result[curr] > result[acc] ? curr : acc;
//     },Object.keys(result)[0]);
    

//     console.log(maxCity);
// }

// fileConvert.getSingleData("matches",topMatchesInCity);



// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on. 
// Write a function to convert the given strings into their equivalent numeric format 
// without any precision loss - 100.45, 1002.22, -123 and so on. There could be typing mistakes
//  in the string so if the number is invalid, return 0.



function getNumbers(data){
    let result="";
    for(let index of data){
        if((index>='0' && index<='9') || index==='.' || index==='-'){
            result+=index;
        }
        
    }

    return result;
}

const result=getNumbers("-123");

console.log(result)