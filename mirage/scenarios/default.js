export default function(server) {

  server.create('post', {
    comments: server.createList('comment', 4)
  });

}
