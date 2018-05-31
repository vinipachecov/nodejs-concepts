This folder has examples and comments about nodeJS functionality. It helps to understand by practical examples how event loop works and how nodejs can run concurrently.

## Topics

* Clustering
* Web Workers
* MultiTasking


## Running

Run for example index-cluster.js and then try using apache benchmark (ab) like:
```
ab -c 1 -n 1 localhost:3000/
```

About it:
* -c  means concurrently
* -n the number of threads
* the final argument is the route you want to benchmark

Change the parameter for other routes and different number of threads and concurrent requests to understand how node.js responds with clustering and web workers.