import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        category: this.get('category'),
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.sendAction('update', post, params);
    }
  }
});
