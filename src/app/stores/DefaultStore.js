import EventEmitter from 'events';

// Creating a default store class to reuse events methods
class DefaultStore extends EventEmitter {
  // Emit Change event
  emitChange() {
    this.emit('change');
  }

  // Add change listener
  addChangeListener(callback) {
    this.on('change', callback);
  }

  // Remove change listener
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

DefaultStore.dispatchToken = null;

export default DefaultStore;
