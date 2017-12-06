/* global $ */
import Ember from 'ember';

export default Ember.Service.extend({
    // Search based on an ID
    findAllForSchedule(schedule) {
        return $.getJSON(`http://itp404-premier-league.herokuapp.com/api/${schedule}`).then(function(response) {
            return response.data;
        });
    },

    // Search based on a keyword
    findAllForTeam(schedule) {
        return $.getJSON(`http://itp404-premier-league.herokuapp.com/api/league/${schedule}`)
    }
});
