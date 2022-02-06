# Team Best Devs Server

## Node.js

> `nvm` is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.

### Need to install
-------------------
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