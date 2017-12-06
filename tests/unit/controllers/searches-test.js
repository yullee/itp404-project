import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:searches', 'Unit | Controller | searches', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
   needs: ['service:league']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
