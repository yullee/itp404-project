
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('relative-time', 'helper:relative-time', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{relative-time inputValue}}`);
  // Return a correctly computed value
  assert.equal(this.$().text().trim(), '48 years ago');
});
