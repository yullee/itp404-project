
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('make-bold', 'helper:make-bold', {
  integration: true
});

// Return the correct string, not <b>1234</b>
test('it renders', function(assert) {
  this.set('inputValue', '1234');
  this.render(hbs`{{make-bold inputValue}}`);
  assert.equal(this.$().text().trim(), '1234');
});
