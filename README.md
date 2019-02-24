@fappurbate/cb-enhancements
===========================

Some enhancements to the Chaturbate apps & bots API.

### Usage

Simply import it in the beginning of your Chaturbate app or bot.

```js
require('@fappurbate/cb-enhancements');
```

### Documentation

#### `cb.onMessage()`

##### Before

Originally, only the last call to `cb.onMessage` counts. All previous handlers are thrown away. So, in the following example `Notice: 1` will never be shown.

```js
cb.onMessage(msg => cb.sendNotice(1));
cb.onMessage(msg => cb.sendNotice(2));
```

##### After

Now all handlers will be called, with the `msg` object passed sequentially from the first handler to the last one. If some handler returns a falsy value, it is ignored. So, in the following example both `Notice: 1` and `Notice: 2` will be shown, and `"12"` will be appended to the message.

```js
cb.onMessage(msg => {
  cb.sendNotice(1);
  msg.m += 1;
  return msg;
});
cb.onMessage(msg => {
  cb.sendNotice(2);
  msg.m += 2;
  return msg;
});
```
