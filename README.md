# bun-hm-boilerplate
This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime. This project was intended to make hypermedia web server boilerplate.

```bash
# linux/macOS
curl -fsSL https://bun.sh/install | bash 
# or
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.25"
```

### To run:
development server
```bash
bun run dev
```

hot-reload
```bash
bun run hot
```

watch
```bash
bun run watch
```

### To compile :
run the command below and then go to exec directory.
```bash
./make
```

### Description :
- Main File & Simple Routing: `./server.js`
- Service & Business Logic: `./services/`
- utils function: `./utilities.js`
- Database class & config: `./database.js`
- DB location: `./db/`
- DB schema: `./schema.js`

### Count Performance :
```js
const countPerformance = async (func) => {
  const startTime = Bun.nanoseconds();
  func();
  const endTime = Bun.nanoseconds()
  const timeTaken = (endTime - startTime) / 1e9;
  console.log(`Time taken: ${timeTaken} `);
};
```