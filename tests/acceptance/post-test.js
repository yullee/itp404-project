import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

// Test when the review form is sent successfully
test('Successful to create', function(assert) {
  visit('/posts');
  fillIn('#club', 'Crystal Palace');
    fillIn('#comment', 'Good play!');
    click('#create-button');

  andThen(function() {
    assert.equal(find('#success-message').text().trim(), 'Successfully created!', 'The form is created successfully.');
  });
});

// Test when the review form is not sent successfully
test('Fail to create', function(assert) {
  visit('/posts');
    click('#create-button');

  andThen(function() {
    assert.equal(find('#fail-message').text().trim(), 'Failed to create!', 'The form is not created.');
  });
});

// Test when the review form is updated successfully
test('Successful to update', function(assert) {
  visit('/posts');
  fillIn('#club', 'Crystal Palace');
    fillIn('#comment', 'Good play!');
    click('#update-button');

  andThen(function() {
    assert.equal(find('#success-update-message').text().trim(), 'Successfully updated!', 'The form is updated successfully.');
  });
});
