import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contacts');

// Test when the contact form is sent successfully
test('Successful contact form', function(assert) {
  visit('/contacts');
  fillIn('#name', 'Lee');
    fillIn('#email', 'lee@usc.edu');
    fillIn('#message', 'Any schedule for 2018?');
    click('#submit-button');

  andThen(function() {
    assert.equal(find('#success-message').text().trim(), 'Successfully sent!', 'The form is sent successfully.');
  });
});

// Test when the contact form is not sent successfully
test('Failed contact form', function(assert) {
  visit('/contacts');
    click('#submit-button');

  andThen(function() {
    assert.equal(find('#fail-message').text().trim(), 'Failed to send!', 'The form is not sent.');
  });
});
