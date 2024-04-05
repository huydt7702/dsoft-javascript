// Làm việc với array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

const pop = ['Huy', 'Nguyen', 'Van'];
const push = [1, 2, 3, 4, 5, 6, 7];
const shift = ['Huy', 'Dep', 'Trai'];
const unshift = ['Chuc', 'Mung', 'Nam', 'Moi'];

const arraySample = [1, 2, 3, 4, 5, 6];
const names = ['Huy', 'Hieu', 'Hoang', 'Phong'];
const arrayInArraySample = [1, 2, 3, [5, 3], 5, 6];

// 1. Kiểm tra độ dài của mảng
console.log(numbers.length); // Output: 9

// 2. Biến array thành string
console.log(numbers.toString()); // Output: "1,2,3,4,5,6,7,8,9"
console.log(names.toString()); // Output: "Huy,Hieu,Hoang,Phong"

// 3. Get phần tử trong mảng dựa vào index
console.log(fruits.at(2)); // Output: "Apple"
console.log(names[1]); // Output: "Hieu"

// 4. Nối tất cả các phần tử mảng thành một chuỗi và chỉ định dấu phân cách
console.log(fruits.join(' * ')); // Output: "Banana * Orange * Apple * Mango"
console.log(fruits.join('')); // Output: "BananaOrangeAppleMango"

// 5. Xóa phần tử cuối cùng khỏi một mảng và trả lại chính phần tử đã xóa
console.log(pop.pop()); // Output: "Van"
console.log(pop); // ['Huy', 'Nguyen']

// 6. Thêm phần tử vào cuối mảng và trả về độ dài mới của mảng
console.log(push.push(8)); // Output: 8
console.log(push); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 7. Xóa phần tử ở đầu mảng và trả lại chính phần tử đã xóa
console.log(shift.shift()); // Output: "Huy"
console.log(shift); // Output: ['Dep', 'Trai']

// 8. Thêm phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(unshift.unshift('Huy', 'Dep', 'Trai')); // Output: 9
console.log(unshift); // Output: ['Huy', 'Dep', 'Trai', 'Chuc', 'Mung', 'Nam', 'Moi']

// 9. delete keyword => Xóa phần tử trong mảng
// Warning: việc sử dụng delete keyword sẽ để lại các undefined trong mảng
const hello = ['Hello', 'Anh', 'Em', 'Dsoft'];
delete hello[hello.length - 1];
console.log(hello); // Output: ['Hello', 'Anh', 'Em', empty]
console.log(hello.length); // Độ dài của nó vẫn bằng 4

// 10. Đổi vị trí phần tử trong mảng
[arraySample[0], arraySample[1]] = [arraySample[1], arraySample[0]]; // Hoán đổi vị trí phần tử đầu và thứ hai
console.log(arraySample); // Output: [2, 1, 3, 4, 5, 6]

// 11. Đổi array thành object
const objectFromArray = Object.assign({}, arraySample);
console.log(objectFromArray); // Output: {0: 2, 1: 1, 2: 3, 3: 4, 4: 5, 5: 6}

// 12. Replace (thay thế phần tử):
arraySample[3] = 10; // Thay thế phần tử ở index 3 bằng giá trị 10

// 13. Tính tổng các phần tử trong mảng
const sum = arraySample.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 27

// 14. Sắp xếp mảng theo thứ tự tăng dần
arraySample.sort((a, b) => a - b);

// 15. Truy cập vào phần tử trong mảng lồng nhau
const nestedElement = arrayInArraySample[3][1];

// 16. Flatten mảng lồng nhau
const flattenedArray = arrayInArraySample.flat(); // Biến đổi mảng lồng nhau thành mảng 1 chiều
console.log(flattenedArray); // Output: [1, 2, 3, 5, 3, 5, 6]

// 17. Xóa phần tử ở vị trí index 2
arraySample.splice(2, 1);

// 18. Tìm phần tử lớn hơn 3
const found = arraySample.find((element) => element > 3);

// 19. Nhân đôi từng phần tử trong mảng
const newArray = arraySample.map((element) => element * 2);

// 20. Kiểm tra xem có phần tử chẵn không
const hasEven = arraySample.some((element) => element % 2 === 0);

// 22. Kiểm tra xem tất cả các phần tử có phải là số chẵn không
const allEven = arraySample.every((element) => element % 2 === 0);

// 23. Lọc ra các số chẵn
const evenNumbers = arraySample.filter((element) => element % 2 === 0);

// 24. Kiểm tra xem số 5 có tồn tại trong mảng không
const includes = arraySample.includes(5);

// 25. Trích xuất các phần tử từ chỉ mục 1 đến 3
const slicedArray = arraySample.slice(1, 4);

// 26. Tìm chỉ mục của phần tử có giá trị là 3
const index = arraySample.findIndex((element) => element === 3);

// 27. Điền giá trị 0 cho tất cả các phần tử trong mảng
const filledArray = arraySample.fill(0);

// 28. Nối mảng gốc với mảng khác
const newArrayConcat = arraySample.concat([7, 8, 9]);

// 29. Sao chép các phần tử từ vị trí 3 đến vị trí 5 và chèn vào từ vị trí 0
const copiedArray = arraySample.copyWithin(0, 3, 5);

// 30. Cắt 2 phần tử từ vị trí 2 và thêm 'a' và 'b' vào vị trí đó
const splicedArray = arraySample.splice(2, 2, 'a', 'b');
