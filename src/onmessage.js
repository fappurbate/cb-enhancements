const handlers = [];

cb.onMessage(msg => {
  for (const handler of handlers) {
    const result = handler(msg);
    if (result) {
      msg = result;
    }
  }

  return msg;
});

cb.onMessage = function (handler) {
  handlers.push(handler);
};
