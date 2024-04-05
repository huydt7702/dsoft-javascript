// Làm việc với object
const objectSample = {
  name: 'Huy',
  age: 22,
  address: 'Hue, VN',
};

// 1. Truy cập vào giá trị của thuộc tính 'name'
console.log(objectSample.name);

// 2. Thay đổi giá trị của thuộc tính 'age'
objectSample.age = 23;

// 3. Thêm một thuộc tính mới 'gender' với giá trị 'Male'
objectSample.gender = 'Male';

// 4. Xóa thuộc tính 'address' khỏi object
delete objectSample.address;

// 5. Duyệt qua các thuộc tính của object
for (const key in objectSample) {
  console.log(key, objectSample[key]);
}

// 6. Kiểm tra xem thuộc tính 'age' có tồn tại không
const hasAge = 'age' in objectSample;

// 7. Lấy tất cả các key của object và cho vào 1 array
const keys = Object.keys(objectSample);

// 8. Lấy tất cả các value của object và cho vào 1 array
const values = Object.values(objectSample);

// 9. Sao chép object (Shallow coppy)
const copiedObject = { ...objectSample };

// 10. Kiểm tra xem object có rỗng không
const isEmpty = Object.keys(objectSample).length === 0;

// 11. Kiểm tra xem 'name' có phải là thuộc tính riêng của object không
const isOwn = objectSample.hasOwnProperty('name');

// 12. Lấy số lượng thuộc tính trong object
const propertyCount = Object.keys(objectSample).length;

// 13. Lấy các cặp key/value cho vào 1 array và push vào 1 array tổng (Like this: [Array(2), Array(2), Array(2)])
const entries = Object.entries(objectSample);

// 14. Duyệt qua các cặp key/value trong object:
for (const [key, value] of Object.entries(objectSample)) {
  console.log(`${key}: ${value}`);
}

// 15. Lấy tên của constructor của đối tượng
const constructorName = objectSample.constructor.name;

// 16. Truy cập thuộc tính bằng cách sử dụng cú pháp dấu ngoặc vuông
const propertyName = 'name';
const propertyValue = objectSample[propertyName];

// 17. So sánh hai đối tượng
const object1 = {
  name: 'Huy',
  age: 22,
  address: 'Hue, VN',
};
const object2 = objectSample;
const areEqual = JSON.stringify(object1) === JSON.stringify(object2);

// 18. Làm sâu object để tạo một bản sao độc lập
const deepClone = JSON.parse(JSON.stringify(objectSample));

// 19. Kiểm tra kiểu dữ liệu của thuộc tính 'name'
const isString = typeof objectSample.name === 'string';

// 20. Lấy tên của tất cả các phương thức trong đối tượng
const methodNames = Object.getOwnPropertyNames(objectSample).filter((key) => typeof objectSample[key] === 'function');

// 21. Kiểm tra đối tượng có phải là một instance của Object hay không
const isInstanceOf = objectSample instanceof Object;

// 22. Thiết lập prototype cho đối tượng
const proto = {
  interest: 'Gym exercise',
};
Object.setPrototypeOf(objectSample, proto);

// 23. Kết hợp hai đối tượng thành một đối tượng mới
const additionalInfo = {
  phoneNumber: '123456789',
  hobbies: ['reading', 'coding'],
};
const mergedObject = { ...objectSample, ...additionalInfo };

// 24. Sử dụng Object.freeze để ngăn chặn sự thay đổi các thuộc tính của đối tượng
const frozenObject = Object.freeze(objectSample);
frozenObject.age = 25; // Mặc dù cố gắng thay đổi, nhưng không có thay đổi nào sẽ xảy ra
console.log(frozenObject); // Đối tượng vẫn giữ nguyên

// 25. Tạo một lớp đối tượng (class) từ đối tượng đã cho
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old and lives in ${this.address}.`;
  }
}
const personObj = new Person(objectSample.name, objectSample.age, objectSample.address);

// 26. Sử dụng Object.seal để ngăn chặn thêm hoặc xóa các thuộc tính, nhưng vẫn cho phép thay đổi giá trị của các thuộc tính hiện có
const sealedObject = Object.seal(objectSample);
sealedObject.age = 25; // Thay đổi giá trị thuộc tính 'age'
sealedObject.gender = 'male'; // Không thêm được thuộc tính mới
delete sealedObject.address; // Không thể xóa thuộc tính
console.log(sealedObject); // Đối tượng vẫn giữ nguyên

// 27. Sử dụng Proxy để tuỳ chỉnh hành vi khi truy cập thuộc tính của đối tượng
const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'age') {
      return 'This person is ' + target[prop] + ' years old.';
    } else {
      return target[prop];
    }
  },
};
const proxiedObject = new Proxy(objectSample, handler);
console.log(proxiedObject.name); // Output: 'Huy'
console.log(proxiedObject.age); // Output: 'This person is 22 years old.'
console.log(proxiedObject.address); // Output: 'Hue, VN'

// 28. Sử dụng đối tượng Map để lưu trữ cặp key-value
const mapObject = new Map(Object.entries(objectSample));
console.log(mapObject.get('name')); // Output: 'Huy'
console.log(mapObject.get('age')); // Output: 22

// 29. Chuyển đổi đối tượng thành JSON và ngược lại
const jsonObject = JSON.stringify(objectSample);
const parsedObject = JSON.parse(jsonObject);

// 30. Sử dụng đối tượng Set để lưu trữ các giá trị duy nhất từ các thuộc tính
const uniqueValues = new Set(Object.values(objectSample));
console.log(uniqueValues); // Output: Set { 'Huy', 22, 'Hue, VN' }
