import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findRecord('post', 1).then(post => {
      // return post.hasMany
      // debugger;
      return post.hasMany('comments').load();
      // return post.query('comments', { page: 1 });

    });
  }

});
