import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | searches');

// Test if the URL reflects the search input 
test('Check URL', function(assert) {
  visit('/searches');
  fillIn('#search-input', 'crystal');
  click('#search-button');
  andThen(function() {
    assert.equal(currentURL(), '/searches/schedules/crystal', 'Search term was correctly put in the URL');
  });
});
