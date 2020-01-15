const { connect } = require('./client');
const { setupInput, handleUserInput } = require('./input')

console.log('Connecting ...');
let conn = connect();
setupInput(conn, handleUserInput);

module.exports = { connect };






