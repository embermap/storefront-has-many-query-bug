import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  links(model) {
    return {
      comments: {
        related: `/posts/${model.id}/comments`
      }
    }
  }

});
