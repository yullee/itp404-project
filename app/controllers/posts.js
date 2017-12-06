import Controller from '@ember/controller';
// import Ember from 'ember';
// import DS from 'ember-data';

export default Controller.extend({
    notSent: true,
    sent: true,
    notUpdated: true,
    updated: true,
  actions: {
    deletePost(post) {
        let promise = post.destroyRecord().then(() => { // DELETE AJAX call to /api/posts/:id
            // If a review is successfully added,
            this.get('toast').success('Post is successfully deleted! Please refresh the page.');
            this.send('newPage');
        }, () => {
          // If a review is not added,
        this.get('toast').success('Post is successfully deleted! Please refresh the page.');
        this.send('newPage');

        });
        return promise;
    },
    createPost(e) {
      e.preventDefault();
      let post = this.store.createRecord('post', {
        club: this.get('club'),
        talk: this.get('talk')
      });
      let promise = post.save().then(() => { // POST AJAX calls to /api/posts
          // If a review is successfully added,
          this.get('toast').success('Post is successfully saved!');
          this.send('newPage'); // Clear all the fields
          this.set('notSent', false);
          this.set('sent', true);
      }, () => {
        // If a review is not added,
        this.get('toast').error('Post is not saved! Please fill out the post.');
        this.send('newPage');
        this.set('notSent', true);
        this.set('sent', false);
      });
      return promise; // POST AJAX calls to /api/posts
    },
    updatePost(post, e) {
      e.preventDefault();
      let promise = post.save().then(() => { // POST AJAX calls to /api/posts
          // If a review is successfully added,
          this.get('toast').success('Post is successfully updated!');
          this.send('newPage');
          this.set('notUpdated', false);
          this.set('updated', true);
      }, () => {
        // If a review is not added,
        this.get('toast').error('Post is not updated!');
        this.send('newPage');
        this.set('notUpdated', true);
        this.set('updated', false);
      });
      return promise; // POST AJAX calls to /api/posts // PUT AJAX call to /api/posts/:id
    },

    // Clear all the fields
    newPage() {
      this.set('club', '');
      this.set('talk', '');
  }
  }
});
