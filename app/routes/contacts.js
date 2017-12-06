// import Route from '@ember/routing/route';
//
// export default Route.extend({
// });


import Ember from 'ember';
    // import User from '../models/user';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('contact');
    },
    // Title
    title: 'Contact'
});
