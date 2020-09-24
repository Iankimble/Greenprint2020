# Greenprint

_** Financial literacy app**_

### Table of Contents

1. Motivation

2. Installation and setup

3. Tools and Technology

4. Usage

5. Features

6. Todos

### Motivation

The coccept of Greenprint came about as a Ian Kimble desire to help financially empower
black and brown communities through finacial education. I had the techical ability to create the app and my partner Eric had the financial knowlede to share.

Greenprint is a financial literacy application that provides users
with a variety of practical calculators to help illustrate their
finances. Coupled with our finance blog, written by professional
accountants, advisors and financial experts, the purpose of this
application is to educate and promote good financial habits and
health.

### Installation and Setup

To run application you will need Node and NPM installed on your machine.

To run test build of appliation: npm test

To start server: npm start (application will run on at http://localhost:3000 when running locally)

To create a production build: npm run build

### Tools and Technology

This application was built using React.js as the frontend framework and express.js for the serverside logic.
for CSS styling this application uses the react-bootstrap library. For the blog logic and CMS I used Strapi.js.

### Usage

This application is intended to provide quick figures via the calculators and easy to understand content for a variety of common financial needs such as budgetting and saving as well as overall financial health.

### Features

1. _Budget calculator_: Users are guided through a step form answering questions pertaining to their income and expenses. From the answers a calculation is done presenting the user with a breakdown of their income to expenses. Once completed, the user can elect to have a PDF version of their report sent via email and/ or provide additional contact information to our email account to review their budget report with a trained financial advisor.

2. _Finance Blog_: Users can review videos and articles pertaining to different financial concpets written by trained professionals. Currently _Eric Murchinson_ is the financial adivsor creating content.

### Todos

1. PDF bug: When a budget report is completed, the users information is passed into state, then packaged as an object, which is then passed through the function that sends the data to the server. On the server side I am using a packaged called "HTML-PDF" which will take data and format it into a PDF. Currently, the object is being sent successfully but there are portions of the data the comeback as undefined. I'm still investigating the cause of this.

2. Other calculators: the website features several other calculators; networth, goal, 401k, student loan interest, and tution calculator. Some are more along than others but still require a bit of thought from a programatic standpoint as well as guidance from my partner, Eric.
