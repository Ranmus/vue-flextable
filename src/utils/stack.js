export const push = ({ stack, multiple }, item) => {
  const removed = [];

  if (!multiple) {
    while (stack.length > 0) {
      removed.push(stack.pop());
    }
  }
  stack.push(item);

  return removed;
};

export const get = ({ stack }, name) => stack.find(item => item.name === name);

export const has = ({ stack }, name) => get({ stack }, name) !== undefined;

export const remove = ({ stack }, name) => {
  if (has({ stack }, name)) {
    const index = stack.indexOf(get({ stack }, name));
    return stack.splice(index, 1);
  }

  return [];
};

export const multiple = (state, multiple) => {
  const removed = [];
  state.multiple = multiple;

  if (!multiple) {
    while (state.stack.length > 1) {
      removed.push(state.stack.pop());
    }
  }

  return removed;
};
