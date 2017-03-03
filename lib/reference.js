
import firebase from 'firebase';
const auth = firebase.auth();
const database = firebase.database();

module.exports = {
  get userData() {
    return database.ref(`${auth.currentUser.uid}/userData`);
  },
}
