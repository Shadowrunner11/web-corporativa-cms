To prettify logs you can run

```bash
cat requests.log | pnpm pino-pretty
```

To prettify logs and watch

```bash
tail -f requests.log | pnpm pino-pretty
```

To prettify logs and save

```bash
cat requests.log | pnpm pino-pretty >> prettyRequests.log
```
