## Cross-Site Scripting
| Attacker tấn công vào web site bằng cách chèn mã độc javascript vào web site


## Các hình thức tấn công
* **No-persistent(Reflected XSS)** Là hình thức tấn công mà attacker đính kèm mã độc vào url, và sau đó gửi url này cho  victim
* **Persistent (Stored XSS)** Là một hinh thức tấn công mà acttacker đính kèm mã độc và mã độc đó được lưu ở DB. Điển hình cho hình thức tấn công này là những form liên hệ mà attacker cố tình gửi mã độc thông qua đó, khi mà victim mở lên thì mã độc đó thực thi
* **DOM Based XSS**


## Kịch bản tấn công
* Chúng ta sẽ thực hành trên web site: http://leettime.net/xsslab1/chalg1.php
### Step tấn công
1. Truy cập vào web site
2. Chèn mã độc vào web site
```
<script>alert('hacker viet')</script>
```
3. Kiểm tra

## Cách phòng chống
* Chúng ta hãy filter các dữ liệu được gửi lên từ Client

## Tài liệu tham khảo
* Một số ký tự đặc biệt: https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20injection/Intruders/xss_payloads_quick.txt
* Một kịch bản tần công: https://pentest-tools.com/blog/xss-attacks-practical-scenarios/
