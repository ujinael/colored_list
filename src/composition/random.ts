export const useRandom=()=>{
const getRandomColor = ()=>{
return `rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)})`
}
const getRandomNumber = (min:number,max:number)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
return {
    getRandomColor,getRandomNumber
}
}