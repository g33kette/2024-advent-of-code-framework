# Advent of Code 🎄 2024

https://adventofcode.com/2024/

### Requirements

[NodeJs](https://nodejs.org/en)

### Commands

To run the code for a day:
```bash
npm run advent DAY_NUMBER {/example}
```
e.g.
```bash
npm run advent 1
npm run advent 01 /example
```

To run the code for all days:
```bash
npm run advent /all {/example}
```
e.g.
```bash
npm run advent /all
npm run advent /all /example
```

More info:
```bash
npm run help
```

### Creating a New Entry

- Copy `template` directory to a new folder named the same as the day number, e.g. `01`
- Create `example.txt` and `data.txt` (if required)
- Run to check it works:
    ```bash
    npm run advent DAY_NUMBER /example
    ```
    e.g.
    ```bash
    npm run advent 01 /example
    ```
- Run to get actual output
    ```bash
    npm run advent DAY_NUMBER
    ```