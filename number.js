// Làm việc với number
const age = 22;

// 1. Thực hiện phép cộng
const result = age + 10;

// 2. Thực hiện phép trừ
const difference = age - 5;

// 3. Thực hiện phép nhân
const product = age * 2;

// 4. Thực hiện phép chia
const quotient = age / 2;

// 5. Kiểm tra xem age có lớn hơn 20 không
const isGreaterThanTwenty = age > 20;

// 6. Kiểm tra xem age có bằng 22 không
const isEqualsToTwentyTwo = age === 22;

// 7. Kiểm tra xem age có khác 30 không
const isNotEqualToThirty = age !== 30;

// 8. Chuyển đổi số thành chuỗi
const ageString = age.toString();

// 9. Làm tròn số
const roundedAge = Math.round(age);

// 10. Làm tròn lên
const ceilAge = Math.ceil(age);

// 11. Làm tròn xuống
const floorAge = Math.floor(age);

// 12. Lấy giá trị tuyệt đối của số
const absoluteValue = Math.abs(age);

// 13. Tạo một số ngẫu nhiên trong phạm vi từ 0 đến 99
const randomAge = Math.floor(Math.random() * 100);

// 14. Kiểm tra xem age có phải là số nguyên không
const isInteger = Number.isInteger(age);

// 15. Kiểm tra xem age có phải là số vô hướng không
const isFiniteNumber = Number.isFinite(age);

// 16. Kiểm tra xem age có là NaN không
const isNaNValue = isNaN(age);

// 17. Tính bình phương của số
const squaredAge = Math.pow(age, 2);

// 18. Tính lập phương của số
const cubedAge = Math.pow(age, 3);

// 19. Chuyển đổi số thành chuỗi với 2 chữ số thập phân
const formattedAge = age.toFixed(2);

// 20. Kiểm tra tính chẵn của số
const isEven = age % 2 === 0;

// 21. Kiểm tra tính lẻ của số
const isOdd = age % 2 !== 0;

// 22. Tính tổng các chữ số trong số
const sumOfDigits = Array.from(age.toString()).reduce((acc, digit) => acc + parseInt(digit), 0);

// 23. Tổng của các số từ 1 đến age
let sum = 0;
for (let i = 1; i <= age; i++) {
  sum += i;
}

// 24. Giai thừa của age
let factorial = 1;
for (let i = 1; i <= age; i++) {
  factorial *= i;
}
