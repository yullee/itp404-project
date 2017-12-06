import Ember from 'ember';

export function indexCounter(params) {
    const number = parseFloat(params);
  return number + 1;
}

export default Ember.Helper.helper(indexCounter);
