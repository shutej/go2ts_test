# go2ts_test

Integration tests for go2ts.  To run:

    go get -u github.com/shutej/go2ts_test/...
    godep go install github.com/shutej/go2ts_test/...
    go2ts-integration --listen=:8080

Now, go to http://127.0.0.1:8080 and open the console.

If developing further tests, you can update the Javascript:

    npm install -g typescript
    go generate github.com/shutej/go2ts_test/...
