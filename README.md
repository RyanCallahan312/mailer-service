# mailer-service

a service to use in mailing info from contact forms using node express and node mailer

Hosted at heroku.


# Usage
```
method: POST

address: https://contact-mailer-service.herokuapp.com/api/mailer

headers: Content-Type: application/json

payload: { mailData, mailerInfo } 

payload example: {
    "mailData": {
        "from": "\"email subject\" <emailaddress@email.com>",
        "to": "emailaddress@email.com",
        "subject": "subject",
        "text": "plainTextMessage",
        "html": "<p>message</p>"
    },
    "mailerInfo": {
        "host": 'smtp.ethereal.email',
        "port": 587,
        "secure": false,
        "auth": {
            "user": testAccount.user,
            "pass": testAccount.pass
        }
    }
}
```
