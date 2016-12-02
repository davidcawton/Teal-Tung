import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPost: function () {
      const title = this.get('title');
      const date = this.get('date');
      const preview = this.get('preview');
      const body = this.get('body');

      const newPost = this.store.createRecord('post', {
        title: title,
        date: date,
        preview: preview,
        body: body,
      });

      newPost.save();

      this.setProperties({
        title: '',
        date: '',
        preview: '',
        body: '',
      });
    },
  },
});
