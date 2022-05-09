// 迭代二维数组
function printMatrix(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }

    }
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
printMatrix(arr)

// 多维数组

let matrix3x3x3 = []
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = []
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = []
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z

        }

    }

}
console.log(matrix3x3x3);