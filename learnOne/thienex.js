function count(str) {
    let maxLength = 0
    let arrayStr = []
    let lengthStr = str.length
    for (let i = 0; i < lengthStr; i++) {
        let text =  ''
        for (let j = i; j <= lengthStr; j++) {
            if (text.indexOf(str[j]) == -1 && j != lengthStr) {
                text += str[j]
            }
            else{
                arrayStr.push(text)
                break
            }
        }
    }
    let lengthArray = arrayStr.length
    for(let i = 0; i < lengthArray; i++){
        if(arrayStr[i].length > maxLength){
            console.log(arrayStr);
            maxLength = arrayStr[i].length
        }
    }
    return maxLength
}
let strThree = 'abcabcbb'
console.log(`Độ dài chuỗi con lớn nhất bằng ${count(strThree)}`);