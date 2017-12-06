import Ember from 'ember';

export default Ember.Route.extend({
    league: Ember.inject.service(),
    model(params) {
        return this.get('league').findAllForTeam(params.schedule);
    },
    // Title add on
    title: 'Schedule'
});
