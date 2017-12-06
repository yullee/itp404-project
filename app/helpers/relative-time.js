import Ember from 'ember';
import moment from 'moment';

export function relativeTime(created) {
  return moment(created[0] * 1000).fromNow();
}

export default Ember.Helper.helper(relativeTime);
