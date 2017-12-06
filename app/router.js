import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');

  this.route('searches');

  this.route('schedules', {
    path: 'searches/schedules/:schedule'
  });
  this.route('contacts');
});

export default Router;
