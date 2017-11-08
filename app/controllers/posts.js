import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deletePost(post, e) {
      post.destroyRecord(); // DELETE AJAX call to /api/posts/:id
    },
    createPost(e) {
      e.preventDefault();
      let post = this.store.createRecord('post', {
        title: this.get('title')
      });
      post.save(); // POST AJAX calls to /api/posts
    },
    updatePost(post, e) {
      e.preventDefault();
      post.save(); // PUT AJAX call to /api/posts/:id
    }
  }
});
