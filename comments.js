// create a web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// This code defines an AngularJS directive for displaying member skills.
function commentsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/comments-member.html',
    controller: 'CommentsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}