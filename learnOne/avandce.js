

// let a = 10

{
    // let a = 11
    {
        {
            console.log(a);
        }
    }
}
// closure : hàm đóng trong js (javascript nâng cao)
// nó được tạo nên khi một function được nằm trong một fuction khác
// và nó sử dụng biến ngoại phạm vi (bên ngoài phạm vi của nó)
// closure :  hàm sẽ ghi nhớ nơi mà nó được tạo ra.


function outer() {
    // phạm vi a
    let i = 10

    function inter() {
         i = i + 1
        return i 
    }
    return inter
}

const variableOuter = outer()

console.log(variableOuter()); 
console.log(variableOuter()); 
console.log(variableOuter()); 
console.log(variableOuter()); 

const variableOuter2 = outer()
console.log(variableOuter2()); 
console.log(variableOuter2()); 
console.log(variableOuter2()); 
console.log(variableOuter2()); 


// Learn Reactjs

(function(age) {
   console.log(age);
})(20)


( (age)=>{console.log(`van nhan - ${age}`);})(20)


