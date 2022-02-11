# Team Best Devs Server

## Node.js
[Node.js-Learn](https://nodejs.dev/learn)

> `nvm` is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.

> Another difference is that Node.js uses the `CommonJS` module system, while in the browser we are starting to see the `ES` Modules standard being implemented.
> In practice, this means that for the time being you use `require()` in Node.js and `import` in the browser.

### Need to install
-------------------
```bash
$ npm install express --save
```
> *Express is a framework that uses the http module under the hood, app.listen() returns an instance of http. You would use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.*
```bash
$ npm install mongoose --save
```

```bash
$ npm install config --save 
```
> *Configurations are stored in configuration files within your application, and can be overridden and extended by environment variables, command line parameters, or external sources.*

```bash
$ npm install joi --save
```
> @hapi/joi package has been <span style="color:red">deprecated</span>.

> *joi: The most powerful schema description language and data validator for JavaScript.*

```bash
$ npm install cors --save
```
> *CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.*

```bash
$ npm install jsonwebtoken --save
```
> *[JWT](https://jwt.io/)*

```bash
$ npm install bcrypt --save
```
> *A library to help you hash passwords.*

```bash
$ npm i lodash --save
```
> *[Lodash](https://lodash.com/)*
> A modern JavaScript utility library delivering modularity, performance & extras.

### Restart the application automatically
Install the nodemon module globally to system path

```bash
$ npm install -g nodemon
```
Run the application using nodemon followed by application file name.
```bash
$ nodemon app.js
```

## Mongoose 6
[mongoose-docs](https://mongoosejs.com/docs)

`useNewUrlParser`, `useUnifiedTopology`, `useFindAndModify`, and `useCreateIndex` are no longer supported options. Mongoose 6 always behaves as if `useNewUrlParser, useUnifiedTopology, and useCreateIndex` are `true`, and `useFindAndModify` is `false`. **Please remove these options from your code**.