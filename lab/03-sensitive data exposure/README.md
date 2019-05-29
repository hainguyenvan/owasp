# Sensitive Data Exposure
* The first thing you  have to determine is  which data is sensitive enough to require extra protection. For example:
    * Banking information: account numbers, credit card numbers.
    * Health information
    * Personal information: SSN/SIN, date of birth, etc.
    * User account/passwords
* Causing:
    * Financical loss
    * Identity hijacking
    * Decreased brand trust

# Sensitive Data Exposure Examples

## Example 1: Credit card encryption
* An application encrypts credit card numbers in a database using automatic database encryption. However, this means it also decrypts this data automatically when retrieved, allowing a SQL injection flaw to retrieve credit card numbers in clear text
* Risk
```
The system should have encrypted the credit card numbers using a public key, and only allowed back-end applications to decrypt them with the private key
```

## Example 2: SSL is not used for all authenticated pages
* Risk
```
Attacker simply monitors network traffic (like an open wireless network), and steals the user’s session cookie. Attacker then replays this cookie and hijacks the user’s session, accessing the user’s private data.
```

## Example 3: The password database users unsalted hashes to store everyone`s passwords
* Risk
```
A file upload flaw allows an attacker to retrieve the password file. All of the unsalted hashes can be exposed with a rainbow table of precalculated hashes
```

# How to prevent sensite data exposure
* Encrypt data during transport and at rest
* Minimize data surface area
* Use the latest encrytion algorithms
* Disable caching on forms that collect data

# Ref
* https://hdivsecurity.com/owasp-sensitive-data-exposure
