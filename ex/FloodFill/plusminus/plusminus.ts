//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr: number[]): void {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let length = arr.length;
    arr.forEach((num) => {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else {
            zero++;
        }
    });
    console.log((positive / length).toFixed(6));
    console.log((negative / length).toFixed(6));
    console.log((zero / length).toFixed(6));
}
