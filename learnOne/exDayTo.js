/* Bài 3:  Tìm chuỗi con dài nhất không lặp lại trong một chuỗi: 
Viết một hàm nhận vào một chuỗi và trả về độ dài của chuỗi con dài nhất mà không có ký tự nào lặp lại. 
Ví dụ: với chuỗi "abcabcbb", kết quả sẽ là 3 ("abc").*/

const subStringLengthEst = (str) =>{
    let longestSubString = ""
    let currentSubString = ""

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const indexChart = currentSubString.indexOf(char)
        if (indexChart === -1) {
            currentSubString += char
        }else{
            if (currentSubString.length > longestSubString.length) {
                longestSubString = currentSubString
            }
            currentSubString= currentSubString.slice(indexChart+1) +char
        }
        
    }
    if (currentSubString.length > longestSubString.length) {
        longestSubString = currentSubString
    }

    return longestSubString
}

console.log(subStringLengthEst("abcabcbb"));


// Bài 4:  Viết một hàm nhận vào một chuỗi và trả về chuỗi mới với chữ cái đầu tiên của mỗi từ được viết hoa. (ví dụ : "hello word" -> "Hello Word".

const capWordStart = (str) =>{
    const arrayStr = str.split(' ')

    const capArrayStr = arrayStr.map((word) => word.charAt(0).toUpperCase() + word.slice(1))

    return capArrayStr.join(" ")
}

console.log(capWordStart("hello word"));

