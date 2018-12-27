## Broken Authentication
| Attacker sẽ tấn công vào việc chứng thực của hệ thống và từ đó có thể lấy ra được các thông tin của user
### Một số lỗi cần chú ý
* Mật khẩu lưu trữ trong db không dược để ở dang clear text
* Đặt các format về mật khẩu (Format về mật khẩu thì không nên quá phức tạp không thì người dùng sẽ cố gắng đặt một mật khẩu sao cho đúng format và save nó ở đâu đó)
* Các message trả về cho client lên ở mức trừu tượng không lên quá chi tiết (Ex: Nếu server trả về một thông báo "Invalid password", như thế attacker sẽ tập chung vào tấn công password)
* Hệ thống cần giới hạn lại số lần đăng nhập faild của tài khoản (Nếu chúng ta sử dụng việc locked account hoặc IP thì khi atttacker họ tấn công vào tài khoản thì làm cho tài khoản đó không thể đăng nhập được nữa vì thế thông thường chung ta hay sử dụng đến mã capcha khi mà nhập thông tin đăng nhập ở sau lần thứ nhất)
* Hệ thống lại có một format cho password (password thì ít nhất 8 ký tự và có chứa chữ cái, ký tự đặc biệt)
* Mật khẩu thì không lên hiển thị ở dạng text khi mà người dùng nhập vào
* Tất cả việc xác thức thì lên được xác thực ở phía server (Nếu để việc xác thực ở phía client thì rất có thể sẽ bị attacker tấn công và đăng nhập thành công vào hệ thống)
* Mật khẩu thì lên đặt theo các cụm từ và không giới hạn độ dài nhập vào chỉ có giới hạn độ dài min của password
* Username thì không được dùng để  password reset, or forgot account
* Chúng ta không lên sử dụng các tài khoản admin mặc định của các frameword vì attacker rất dễ đoán ra được.
* Việc forgot password thì sẽ không disable the account cho đến khi đổi tài khoản thành công
* Có thể đặt một số câu hỏi để phục vụ cho việc xác minh thông tin (Việc đặt câu hỏi sẽ làm cho hệ thống tăng tính bảo mật hơn)
* Session hay token không lên hiển thị ở URL
* **Session thì lên distroy khi người người dùng logout**


## Kịch bản tấn công
| Ở kịch bản này chúng ta sẽ tấn công vào mật khẩu của một account.
### Step tấn công
    1. Truy cập vào trang: http://zero.webappsecurity.com/login.html
    2. Nhập đầy đủ thông tin và send request
    3. Kiểm tra kết quả trả về
### Cấu hình tools
    1. Chúng ta sẽ cấu hình Intruder của Burp Suite
### Demo cuộc tấn công
* Step 1:
    1. Truy cập vào trang: http://zero.webappsecurity.com/login.html
    2. Nhập đầy đủ thông tin của form login, chúng sẽ sử dụng Burd Stuid để có thể capture được request và sau đó tấn công vào field mật khẩu
    3. Cấu hình Intruder để tấn công mật khẩu.
* Step 2:
    1. Chúng ta sẽ cấu hình để có thể tấn công vào ô mật khẩu
    2. Ngoài cách tấn công trên thì chung ta có thể load từ file vào một danh sách các mật khẩu hay dùng
* Step 3:
    1. Kiêm tra lại kết quả sau khi tấn công


## Cách phòng chống
* Với cách tấn công này thì chúng ta cần cấu hình số lần đăng nhập sai vào hệ thống.

## Tài liệu tham khảo
* Danh sách các lỗi bảo mật của Broken Authentication: https://www.evernote.com/client/snv?noteGuid=97beec30-5b53-4178-a047-1f5aa207291b&noteKey=6f04a2a4619358e6&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs413%2Fsh%2F97beec30-5b53-4178-a047-1f5aa207291b%2F6f04a2a4619358e6&title=Broken%2BAuthentication
