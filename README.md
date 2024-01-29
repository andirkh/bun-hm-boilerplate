# spall-spill-bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

Main File & Simple Routing: `./server.js`
Service & Business Logic: `./services/`
utils function: `./utilities.js`

Database class & config: `./database.js`
DB location: `./db/`
DB schema: `./schema.js`


This project was created using `bun init` in bun v1.0.25. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

### Count Performance :
```
const countPerformance = async (func) => {
  const startTime = Bun.nanoseconds();
  func();
  const endTime = Bun.nanoseconds()
  const timeTaken = (endTime - startTime) / 1e9;
  console.log(`Time taken: ${timeTaken} `);
};
```