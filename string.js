// Làm việc với string
const fullName = 'Nguyen Van Huy';

// 1. Truy cập vào ký tự đầu tiên của chuỗi
const firstChar = fullName[0]; // or fullName.charAt(0)

// 2. Lấy độ dài của chuỗi
const length = fullName.length;

// 3. Chuyển đổi chuỗi thành chữ hoa
const upperCase = fullName.toUpperCase();

// 4. Chuyển đổi chuỗi thành chữ thường
const lowerCase = fullName.toLowerCase();

// 5. Tìm vị trí của chuỗi 'Van' trong chuỗi
const indexOfSubstring = fullName.indexOf('Van');

// 6. Tìm vị trí cuối cùng của ký tự 'n' trong chuỗi
const lastIndexofSubstring = fullName.lastIndexOf('n');

// 7. Cắt chuỗi từ index 0 đến index 5 (không bao gồm index 6)
const firstName = fullName.slice(0, 6);

// 8. Cắt chuỗi từ index 7 đến hết chuỗi
const lastName = fullName.slice(7);

// 9. Thay thế chuỗi 'Nguyen' bằng 'Tran'
const replacedString = fullName.replace('Nguyen', 'Tran');

// 10. Chia chuỗi thành mảng các từ, tách bằng khoảng trắng
const nameArray = fullName.split(' ');

// 11. Kiểm tra xem chuỗi có bắt đầu bằng 'Nguyen' không
const startsWith = fullName.startsWith('Nguyen');

// 12. Kiểm tra xem chuỗi có kết thúc bằng 'Huy' không
const endsWith = fullName.endsWith('Huy');

// 13. Loại bỏ khoảng trắng không cần thiết từ đầu và cuối chuỗi
const trimmedString = fullName.trim();

// 14. Nối chuỗi của biến fullName với các chuỗi khác
const fullNameWithMiddleName = fullName.concat(' Quoc', ' Jr');

// 15. Kiểm tra xem chuỗi có chứa chuỗi 'Van' không
const containsSubstring = fullName.includes('Van');

// 16. Trích xuất một phần của chuỗi từ index 7 với độ dài 3 ký tự
const extractedSubstring = fullName.substr(7, 3);

// 17. Đảo ngược chuỗi
const reversedString = fullName.split('').reverse().join('');

// 18. Sử dụng template literals để kết hợp chuỗi với các biểu thức JavaScript
const formattedString = `My name is ${fullName}`;

// 19. Kiểm tra xem chuỗi có phải là một số không
const isNumeric = !isNaN(fullName);

// 20. Kiểm tra xem chuỗi có phải là một chuỗi palindrome không (chuỗi đối xứng)
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
const isPalindromeResult = isPalindrome(fullName);

// 21. Tạo một chuỗi mới bằng cách lặp lại chuỗi ban đầu một số lần nhất định
const repeatedFullName = fullName.repeat(3);

// 22. Chuyển đổi chuỗi thành dạng slug (thường được sử dụng trong URL) bằng cách thay thế khoảng trắng bằng dấu gạch ngang
const slug = fullName.replace(/\s+/g, '-').toLowerCase();
console.log(slug); // Output: 'nguyen-van-huy'

// 23. Chuẩn hóa chuỗi để loại bỏ dấu tiếng Việt
const normalizeVietnamese = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
const normalizedFullName = normalizeVietnamese(fullName);
console.log(normalizedFullName); // Output: 'Nguyen Van Huy'

// 24. Đếm số lần xuất hiện của một từ hoặc một ký tự trong chuỗi
const countOccurrences = (str, search) => {
  return str.split(search).length - 1;
};
console.log(countOccurrences(fullName, 'n')); // Output: 2
