
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index-count', 'helper:index-count', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{index-count inputValue}}`);
  // Since counting the index, the return value should increment by 1
  assert.equal(this.$().text().trim(), '1235');
});
