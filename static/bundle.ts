import * as go2ts_integration_Test1 from "./go2ts_integration_Test1";
import * as go2ts_integration_Test2 from "./go2ts_integration_Test2";
import * as go2ts_integration_Test3 from "./go2ts_integration_Test3";
import * as go2ts_integration_Test4 from "./go2ts_integration_Test4";
import * as go2ts_integration_Test5 from "./go2ts_integration_Test5";
import * as go2ts_integration_Test6 from "./go2ts_integration_Test6";
import * as go2ts_integration_Test7 from "./go2ts_integration_Test7";
import * as go2ts_integration_Test8 from "./go2ts_integration_Test8";
import * as go2ts_integration_Test9 from "./go2ts_integration_Test9";

declare var $: any;
declare var _: any;

// Wrapper provides type-safe GET and POST methods so far.
class Wrapper<T, MarshalT> {
  constructor(
    private url: string,
    private marshal: (x: T) => MarshalT,
    private unmarshal: (x: MarshalT) => T,
    private empty: () => T,
  ) {}

  _GET(done: (x: T) => void, fail: () => void) {
    let request = $.ajax({
      method: "GET",
      dataType: "json",
      url: this.url,
    });
    request.done(function(data) {
      done(this.unmarshal(data));
    }.bind(this));
    request.fail(fail);
  }

  _POST(data: T, done: () => void, fail: () => void) {
    let request = $.ajax({
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      url: this.url,
      data: JSON.stringify(this.marshal(data)),
    });
    request.done(done);
    request.fail(fail);
  }
}

// IntegrationTest exercises _GET and _POST methods against an expected object.
class IntegrationTest<T, MarshalT> extends Wrapper<T, MarshalT> {
  expected: T;

  get() {
    super._GET(
      function(x: T) {
        if (_.isEqual(x, this.expected)) {
          console.log("[ OK ] get(%o)", this.url);
        } else {
          console.log(
            "[FAIL] get(%o): expected: %o vs. actual: %o",
            this.url,
            this.expected,
            x
          );
        }
      }.bind(this),
      function() {
        console.log("[FAIL] get(%o)", this.url);
      }.bind(this)
    );
  }

  post() {
    super._POST(
      this.expected,
      function() {
        console.log("[ OK ] post(%o)", this.url);
      }.bind(this),
      function() {
        console.log("[FAIL] post(%o)", this.url);
      }.bind(this)
    );
  }

  run() {
    this.get();
    this.post();
  }
}

var tests: Array<{ run: () => void }> = [];

(function test1_empty() {
  var test1 = new IntegrationTest(
    "/test1_empty",
    go2ts_integration_Test1.marshal,
    go2ts_integration_Test1.unmarshal,
    go2ts_integration_Test1.empty,
  );
  test1.expected = go2ts_integration_Test1.empty();
  tests.push(test1);
})();

(function test1_full() {
  var test1 = new IntegrationTest(
    "/test1_full",
    go2ts_integration_Test1.marshal,
    go2ts_integration_Test1.unmarshal,
    go2ts_integration_Test1.empty
  );
  test1.expected = {
    aString: "a string",
    aInt:    1,
    aFloat:  1.2,
    aBool:   true,
    aByte:   65,
  };
  tests.push(test1);
})();

(function test2_empty() {
  var test2 = new IntegrationTest(
    "/test2_empty",
    go2ts_integration_Test2.marshal,
    go2ts_integration_Test2.unmarshal,
    go2ts_integration_Test2.empty,
  );
  test2.expected = go2ts_integration_Test2.empty();
  tests.push(test2);
})();

(function test2_full() {
  var test2 = new IntegrationTest(
    "/test2_full",
    go2ts_integration_Test2.marshal,
    go2ts_integration_Test2.unmarshal,
    go2ts_integration_Test2.empty,
  );
  test2.expected = {
    aStringPtr: "a string",
    aIntPtr:    1,
    aFloatPtr:  1.2,
    aBoolPtr:   true,
    aBytePtr:   65,
  };
  tests.push(test2);
})();

(function test3_empty() {
  var test3 = new IntegrationTest(
    "/test3_empty",
    go2ts_integration_Test3.marshal,
    go2ts_integration_Test3.unmarshal,
    go2ts_integration_Test3.empty,
  );
  test3.expected = go2ts_integration_Test3.empty();
  tests.push(test3);
})();

(function test3_full() {
  var test3 = new IntegrationTest(
    "/test3_full",
    go2ts_integration_Test3.marshal,
    go2ts_integration_Test3.unmarshal,
    go2ts_integration_Test3.empty,
  );
  test3.expected = {
    aStringSlice: ["a string"],
    aIntSlice:    [1],
    aFloatSlice:  [1.2],
    aBoolSlice:   [true],
    aByteSlice:   "A",
  };
  tests.push(test3);
})();

(function test4_empty() {
  var test4 = new IntegrationTest(
    "/test4_empty",
    go2ts_integration_Test4.marshal,
    go2ts_integration_Test4.unmarshal,
    go2ts_integration_Test4.empty,
  );
  test4.expected = go2ts_integration_Test4.empty();
  tests.push(test4);
})();

(function test4_full() {
  var test4 = new IntegrationTest(
    "/test4_full",
    go2ts_integration_Test4.marshal,
    go2ts_integration_Test4.unmarshal,
    go2ts_integration_Test4.empty,
  );
  test4.expected = {
    aStringObject: { x: "a string" },
    aIntObject:    { x: 1 },
    aFloatObject:  { x: 1.2 },
    aBoolObject:   { x: true },
    aByteObject:   { x: 65 },
  };
  tests.push(test4);
})();

(function test5_empty() {
  var test5 = new IntegrationTest(
    "/test5_empty",
    go2ts_integration_Test5.marshal,
    go2ts_integration_Test5.unmarshal,
    go2ts_integration_Test5.empty,
  );
  test5.expected = go2ts_integration_Test5.empty();
  tests.push(test5);
})();

(function test5_full() {
  var test5 = new IntegrationTest(
    "/test5_full",
    go2ts_integration_Test5.marshal,
    go2ts_integration_Test5.unmarshal,
    go2ts_integration_Test5.empty,
  );
  test5.expected = {
    aStringMap: { x: "a string" },
    aIntMap:    { x: 1 },
    aFloatMap:  { x: 1.2 },
    aBoolMap:   { x: true },
    aByteMap:   { x: 65 },
  };
  tests.push(test5);
})();

(function test6_empty() {
  var test6 = new IntegrationTest(
    "/test6_empty",
    go2ts_integration_Test6.marshal,
    go2ts_integration_Test6.unmarshal,
    go2ts_integration_Test6.empty,
  );
  test6.expected = go2ts_integration_Test6.empty();
  tests.push(test6);
})();

(function test6_full() {
  var test6 = new IntegrationTest(
    "/test6_full",
    go2ts_integration_Test6.marshal,
    go2ts_integration_Test6.unmarshal,
    go2ts_integration_Test6.empty,
  );
  test6.expected = {
    aString:    "a string",
    aInt:       1,
    aFloat:     1.2,
    aBool:      true,
    aByte:      65,
    aIntPtr:    1,
    aIntSlice:  [1],
    aIntMap:    { x: 1 },
    aByteSlice: "A",
    aint2:      2,
  };
  tests.push(test6);
})();

(function test7_empty() {
  var test7 = new IntegrationTest(
    "/test7_empty",
    go2ts_integration_Test7.marshal,
    go2ts_integration_Test7.unmarshal,
    go2ts_integration_Test7.empty,
  );
  test7.expected = go2ts_integration_Test7.empty();
  tests.push(test7);
})();

(function test7_full() {
  var test7 = new IntegrationTest(
    "/test7_full",
    go2ts_integration_Test7.marshal,
    go2ts_integration_Test7.unmarshal,
    go2ts_integration_Test7.empty,
  );
  test7.expected = {
    aString: "a string",
    aInt:    1,
    aFloat:  1.2,
    aBool:   true,
    aByte:   65,
  };
  tests.push(test7);
})();

(function test8_empty() {
  var test8 = new IntegrationTest(
    "/test8_empty",
    go2ts_integration_Test8.marshal,
    go2ts_integration_Test8.unmarshal,
    go2ts_integration_Test8.empty,
  );
  test8.expected = go2ts_integration_Test8.empty();
  tests.push(test8);
})();

(function test8_full() {
  var test8 = new IntegrationTest(
    "/test8_full",
    go2ts_integration_Test8.marshal,
    go2ts_integration_Test8.unmarshal,
    go2ts_integration_Test8.empty,
  );
  test8.expected = [
    {
      aString: "a string",
      aInt:    1,
      aFloat:  1.2,
      aBool:   true,
      aByte:   65,
    }
  ];
  tests.push(test8);
})();

(function test9_empty() {
  var test9 = new IntegrationTest(
    "/test9_empty",
    go2ts_integration_Test9.marshal,
    go2ts_integration_Test9.unmarshal,
    go2ts_integration_Test9.empty,
  );
  test9.expected = go2ts_integration_Test9.empty();
  tests.push(test9);
})();

(function test9_full() {
  var test9 = new IntegrationTest(
    "/test9_full",
    go2ts_integration_Test9.marshal,
    go2ts_integration_Test9.unmarshal,
    go2ts_integration_Test9.empty,
  );
  test9.expected = {
    x: new Date(Date.UTC(2009, 1, 14, 23, 59, 59, 0)),
  };
  tests.push(test9);
})();

// Runs all tests.
tests.forEach(function(test) {
  test.run();
});
