## Injection
| Attacker sẽ chỉnh sửa nôi dung request được gửi đến server


## Kịch bản tấn công
### Step tấn công
* Step 1: Attacker sẽ gửi một request đúng và capture request này lại
* Step 2: Sau khi attacker đã capture được request thành công thì họ bắt đầu chỉnh sửa nội dung của request
* Step 3: Check response trả về
### Cầu hình tools
* Cấu hình proxy cho Firefox (ở đây chung ta sẽ sử dụng cổng 8888)
* Cấu hình Burp Suite
```
1. Chuyển trang thái **Intercept off**
2. Capture port 8888
```
* Chúng ta cũng có thể  sử dụng Bure Suite để capure những request bằng https
### Demo cuộc tấn công
* Step 1:
    1. Truy cập vào trang web: http://zero.webappsecurity.com/feedback.html
    2. Nhập đầy đủ thông tin và gửi một feedback
    3. Nếu không nhập field name thì sẽ không gửi được form feedback
    4. Kiểm tra kết quả với form điền đúng
* Step 2:
    1. Chỉnh sửa nội dung request của field name từ "hacker viet" sang ""
    2. Send repeater lại request vửa chỉnh sửa
* Step 3:
    1. Kiểm tra nội dung trả vể sau khi đã chỉnh sửa request
    ```
     Thank you for your comments, hacker viet.
            They will be reviewed by our Customer Service staff and given the full attention that they deserve.
    ```
* Step 4:
    1. Với kịch bản tấn công này thì cho ta thấy được, việc validate dữ liệu thì đang chỉ được validate ở client và phía server không validate lại dữ liệu của client gửi nên.
### Các tools sử dụng
* Firefox
* Burp Suite

## Kịch bản tấn công vơi SQL Injection
### Kịch bản tấn công
* Attacker sẽ injection các câu lệnh sql url
* Đối với test case này thì chúng ta chỉ cần test xem hệ thống có bị lỗi SQL Injection
```
Thêm 1'
```
### Tài liệu tham khảo
* Demo lỗi SQL Injection: https://sangbui.com/blind-sql-injection-at-testphp-vulnweb-com/

## Cách phòng chống
* Với lỗi Injection này thì chúng ta cần validate ở cả 2 phía: Client và Server