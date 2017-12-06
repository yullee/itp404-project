import Controller from '@ember/controller';
// import Ember from 'ember';
// import DS from 'ember-data';

export default Controller.extend({
    notSent: true,
    sent: true,
    actions: {
        save(e) {
          e.preventDefault(); // Prevent refreshing a page
          let contact = this.store.createRecord('contact', {
            name: this.get('name'),
            email: this.get('email'),
            message: this.get('message')
          });
          let promise = contact.save().then(() => { // POST AJAX calls to /api/contacts
              // If a message is successfully sent, display a toastr message
              this.get('toast').success('Message is successfully sent!');
              this.send('newPage'); // Clear all the fields
              this.set('notSent', false);
              this.set('sent', true);
          }, () => {
            // If a message is not sent, display a toastr message
            this.get('toast').error('Please fill out the form!');
            this.send('newPage');
            this.set('notSent', true);
            this.set('sent', false);
          });
          return promise; // POST AJAX calls to /api/contacts
      },

      // Clear all the fields
      newPage() {
        this.set('name', '');
        this.set('email', '');
        this.set('message', '');
      }
    }
});
