// import Controller from '@ember/controller';
//
// export default Controller.extend({
// });


import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    sortedSchedules: Ember.computed('model', function() {
    let schedules = this.get('model');

    // sort the date but the model isn't really change - singleton (one single instance )
    let sortedSchedules = schedules.sort(function(scheduleA, scheduleB) {
      let aSchedule = moment(scheduleA.date);
      let bSchedule = moment(scheduleB.date);
      if(aSchedule < bSchedule) {
        return 1;
      }

      if(aSchedule > bSchedule) {
        return -1;
      }

      return 0;
    });

    return sortedSchedules;
  })
});
