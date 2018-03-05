export default function() {

  this.resource('posts');
  this.get('posts/:id/:relationship', (schema, request) => {
    let id = request.params.id;
    let relationship = request.params.relationship;

    return schema.posts.find(id)[relationship];
  });


}
