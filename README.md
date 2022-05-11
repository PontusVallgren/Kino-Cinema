# set environment variables

- In .env.local.

```bash
ENC_KEY = secret key
DB_URL = mongoDB url
```

# Material UI

In previous course, teacher introduced Material UI a little bit to us. And we thought it would be good for using it to this project.

Having a unified design would be neat since it is a same website that we worked on. It was important that visitor would feel that all pages are connected by design.

So we discussed and decided to use some components with Material UI. For example, we use custom button(used MUI) that can be used again easily for everyone with our own theme colors.

Material UI prevent us from spending lots of time for css and its animation. And it supports icons as well, so didn't need to spend so much time to use icons.

# Test with Cypress, set env varialbles

Npm start, npm build and then npm test.

- In Cypress.env.local

```bash
  "username": secret,
  "password" secret
```

There are four tests;

1. Contact: testing so that user can click on menu and be able to fill out feedback-form.
2. loginReview: Testing login, user is able to access mypages during login and visiting moviepage to fill out a review, then logout and get to homepage.
3. Testing so uder can be able to reach every main-rout from navbar.
4. User should be able to use filterfunction, visible movietrailer on page, click on "fler filmer"-btn, click on a movie and get to movie information- page.
