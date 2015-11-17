var Mediator = function () {
  this.subscribers = {};
};

Mediator.prototype.subscribeTo = function ( type, fn ) {
  if (!this.subscribers[type]) {
    this.subscribers[type] = [];
  }

  this.subscribers[type].push(fn);

};

Mediator.prototype.unsubscribeFrom = function ( type, fn ) {
  var listeners = this.subscribers[type];

  if (!listeners) {
    return;
  }

  var index = listeners.indexOf(fn);

  if (index > -1) {
    listeners.splice(index, 1)
  }
};

Mediator.prototype.publish = function ( type, data ) {
  if (!this.subscribers[type]) {
    return
  }

  if (!data.type) {
    data.type = type;
  }

  var listeners = this.subscribers[type];
  for (var i = 0; i<listeners.length; i++) {
    listeners[i](data);
  }

};

var fn = function () {
    console.log('Hello!!')
  };


