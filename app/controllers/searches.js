import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchForEvents(event) {
          event.preventDefault();
          let schedule = this.get('schedule');
          this.transitionToRoute('schedules', schedule);
          this.send('newPage');
      },
          newPage() {
        this.set('schedule', '');
      }
    }
});
