# General information

This repository has my code following the course Node JS: Advanced Concepts by Stephen Grider on Udemy. 
The main idea by the author is to show aspects of node.js not commonly showed in most courses like
multithreading in Node(which event loop is single-thread but there is also the thread pool). 

Concepts handled in the course:

* Nodejs Performance
* Data Caching with Redis 
* Automated testing with jest
* Usage of Continuous integration for code base change test evaluation
* Example of a non trivial image upload Node.js solution using AWS S3

## Performance and Caching
The first 2 topics are covered in the introduction. From data caching to the end we use a project given by Stephen with a React application inside which we implment data caching and updating using a MongoDB as remote DB.

## Tests and CI
Then the 3rd part of the course begans with Automated testing, using Puppeteer to do some non headless tests and check basic usage of tests. Stephen separate the tests between those related to blogs and the header which are the aspecs covered in tests. He create a standard setup for both test groups and at the end introduces the ES6 Proxy as a way to refactor the work he done with testing so the student can understand an example of a different approach to organize similar tests.

## Uploading images
Here the author provides a brief introduction to the common solutions and the drawbacks that each one has like performance issues or vulnerabilities. So the solution comes by using and URL signed by AWS S3 and the computing bottleneck to the client (React side of the application) letting the server more available to requests instead of file uploading tasks.

