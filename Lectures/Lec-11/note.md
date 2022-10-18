## **Phạm vi của biến**
* Biến bên ngoài thì sẽ có thể được sử dụng trong blog (if, else, while)
* Biến ở bên trong các block bao bởi ngoặc {} như if else, for, while sẽ k thể được sử dụng bên ngoài.

## **Biến toàn cục, biến cục bộ**

![Biến toàn cục cục bộ](https://i.imgur.com/yhbEMcx.png)

## **Tham trị, tham chiếu**

Cách lưu biến

Stack & Heap

Stack chỉ có thể lưu biến 1 giá trị
Heap có khả năng mở rộng có thể lưu object, array

khi lưu thì sẽ lưu 1 địa chỉ và tham chiếu từ stack sang heap
![tham chiếu](https://i.imgur.com/cQnKQ2Z.png)

Const sẽ cố định giá trị chứ k phải tham chiếu của nó.

```javascript
Const arr = [1,2,3]

arr.push(4);

console.log(arr);
```
Kết quả là:
```javascript
arr = [1,2,3,4];
```
Do arr chỉ là hằng lưu địa chỉ, không phải lưu tham chiếu.