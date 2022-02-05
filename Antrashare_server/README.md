# Team Best Devs Server


```bash
$ npm install express --save
```

```bash
$ npm install mongoose --save
```

```bash
$ npm install config --save 
```

## Mongoose 6
[mongoose-docs](https://mongoosejs.com/docs)

`useNewUrlParser`, `useUnifiedTopology`, `useFindAndModify`, and `useCreateIndex` are no longer supported options. Mongoose 6 always behaves as if `useNewUrlParser, useUnifiedTopology, and useCreateIndex` are `true`, and `useFindAndModify` is `false`. **Please remove these options from your code**.