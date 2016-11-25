
const debug = true;

const log = (message, value) => {
  if (debug) {
    console.log(message, value);
  }
};

export default class StateManager {
  constructor(config) {
    log(`${this.constructor.name} init`);
    this.url = config.url;
  }
}
