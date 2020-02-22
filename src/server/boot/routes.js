// module.exports = function(app) {
//   // Install a "/ping" route that returns "pong"
//   app.get('/ping', function(req, res) {
//     res.send({answer: "pong"});
//   });
// };

module.exports = function ( app ) {
  var router = app.loopback.Router();
  router.post( "/ping", function ( req, res ) {
    res.send( [ { 'text': 'pong' } ] );
  } );
  app.use( router );
};