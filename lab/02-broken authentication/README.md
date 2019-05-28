#  Broken Authentication
* These types of weaknesses can allow an attacker to either capture or bypass the authentication methods that are used by a web application.
    * User authentication credentials are not protected when stored
    * Predictable login credentials
    * Session IDs are exposed in the URL (e.g., URL rewriting)
    * Session IDs are vulnerable to session fixation attacks
    * Session value does not timeout or does not get invalidated after logout
    * Session IDs are not rotated after successful login
    * Passwords, session IDs, and other credentials are sent over unencrypted connections

## Example 1: URL rewriting
* A travel reservations application supports URL rewriting, putting session IDs in the URL
```
http://example.com/sale/saleitems;jsessionid=2P0OC2JSNDLPSKHCJUN2JV?dest=Hawaii
```
* Risk
```
An authenticated user of the site wants to let their friends know about the sale. The user e-mails the link above without realizing they are also giving away their session ID. When the friends use the link they use the user’s session and credit card.
```

## Example 2: Application`s timeout is not set properly
* The user utilizes a public computer to access a site. Instead of selecting “logout” the user simply closes the browser tab and walks away. An attacker uses the same browser an hour later, and that browser is still authenticated.

## Example 3: Passwords are not properly hashed and salted
* An insider or external attacker gains access to the system’s password database. User passwords are not properly hashed and salted, exposing every user’s password.
* Risk
```
Stored username and password values should be salted and hashed, in addition to being encrypted.
```

## Example 4: Predictable login credentials
* Username and Password values that are easy to guess or that are used frequently can be guessed by attackers to obtain unauthorized access.
* Risk
```
Force users to use a strong password policy.
```

# How to prevent broken authentication and session management

## Session management
* Credentials should be protected: User authentication credentials should be protected when stored using hashing or encryption.
* Do not expose session ID in the URL: Session IDs should not be exposed in the URL (e.g., URL rewriting).
* Session IDs should timeout: User sessions or authentication tokens should be properly invalidated during logout.
* Recreate session IDs: Session IDs should be recreated after successful login.
* Do not send credentials over unencrypted connections: Passwords, session IDs, and other credentials should not be sent over unencrypted connections.

## Broken authentication
* Password length: Minimum password length should be at least eight (8) characters long. Combining this length with complexity makes a password difficult to guess using a brute force attack.
* Password complexity: Passwords should be a combination of alphanumeric characters. Alphanumeric characters consist of letters, numbers, punctuation marks, mathematical and other conventional symbols
* Username/Password Enumeration: Authentication failure responses should not indicate which part of the authentication data was incorrect. For example, instead of "Invalid username" or "Invalid password", just use "Invalid username and/or password" for both. Error responses must be truly identical in both display and source code.
* Protection against brute force login: Enforce account disabling after an established number of invalid login attempts

# Ref
* https://hdivsecurity.com/owasp-broken-authentication-and-session-management