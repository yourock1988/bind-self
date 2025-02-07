Automatic bind all class methods to instance

install

```bash
npm i @yourock88/bind-self
```

import

```javascript
import bindSelf from 'bind-self'
```

or

```javascript
const bindSelf = require('bind-self').default // only for nodejs >= v22
```

example

```javascript
class A {
  constructor() {
    bindSelf(this) // bind all class A methods to instance that was created by new expression
    this.n = 42
  }
  getN() {
    return this.n
  }
}

class B extends A {
  constructor() {
    super()
    console.log('>', this.n)
  }
  getN() {
    return super.getN()
  }
}

function fn(cb) {
  const result = cb()
  console.log('>>', result)
}

const a = new A()
const b = new B() // > 42

fn(a.getN) // >> 42
fn(b.getN) // >> 42
b.n = 101
fn(b.getN) // >> 101
```
