class Events {
  listeners = {};

  on(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  off(eventName, fn) {
    let listeners = this.listeners[eventName];
    if (!listeners) return this;
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
        break;
      }
    }
    return this;
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    }
    this.listeners[eventName].push(onceWrapper);
  }

  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }

  count(eventName) {
    const listeners = this.listeners[eventName] || [];
    return listeners.length;
  }

  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

module.exports = Events;