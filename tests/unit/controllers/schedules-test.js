import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:schedules', 'Unit | Controller | schedules', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
   needs: ['service:league']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
