# Injection
* An injection of code happens when an attacker sends invalid data to the web application with the intention to make it do something different from what the application was designed/programmed to do.

* Perhaps the most common example around this security vulnerability is the SQL query consuming untrusted data. You can see one of OWASP’s examples below:
```
String query = "SELECT * FROM accounts WHEREcustID = '" + request.getParameter("id") + "'";
```

* The core of a code injection vulnerability is the lack of validation and sanitization of the data consumed by the web application, which means that this vulnerability can be present on almost any type of technology.
```
Anything that accepts parameters as input can potentially be vulnerable to a code injection attack.
```

* Một số sql injection
```
user: ' or 1=1 -- '
passwd: ' or ''='
```
* Example
```
http://testaspnet.vulnweb.com/
```

# How do you prevent code injection vulnerabilities?
* Validate input
* Escape special characters

# Ref
* https://blog.sucuri.net/2018/10/owasp-top-10-security-risks-part-i.html