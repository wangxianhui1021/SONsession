(function(){

  angular.module('myApp', ['ngRoute'])
    .controller('ListController', function(){
      this.users = users;
      this.topics = topics;
    })

    .directive('topics', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/topics.html',
        scope:{
          topics: "="
        }
      };
    })
    .directive('users', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/users.html',
        replace: true
      };
    })

    .directive('signupForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/signup-form.html',
        replace: true,
        controller: function(){
          this.showForm = false;
          this.user = {topics:{} };
          this.addUser=function(form){
            users.push(this.user);
            this.user = {topics:{} };
            form.$setPristine();
          };
        },
        controllerAs: 'signupFormCtrl',
        scope: {
          users: "=",
          topics: "="
        }
      };
    });

  var topics = ['Assignment that require students to upload a file', "Quizzes", "Discussion Board", "Student Groups/Group Assignment/Group Discussion", "Assignment enabled with TurnItIn (an anti-plagiarism app)", "Course Modules", "Panopto", "Content Pages", "Synchronous video conference", "Google Docs", "Peer Review/Evaluation", "Weighted Grading", "Embedded Youtube Videos"
   ];

   var users=[
     {
       name:"Cathy L Rozmus",
       email:"Cathy.L.Rozmus@uth.tmc.edu",
       imageurl:'https://nursing.uth.edu/resize_image?id=2389362&w=100',
       topics: {'Content Pages': true, 'Weighted Grading': true },
       session: 'Thursday April 30th, at 12 pm. Room 320'
     },
     {
       name:"Deborah J Jones",
       email:"Deborah.J.Jones@uth.tmc.edu",
       imageurl:'https://nursing.uth.edu/resize_image?id=738637&w=100',
       topics: {'Content Pages': true, 'Weighted Grading': true, 'Google Docs': true},
       session: 'Tuesday May 5th, at 12 pm. Room 320'
     },
     {
       name:"Terri S Armstrong",
       email:"Terri.S.Armstrong@uth.tmc.edu",
       imageurl:'https://nursing.uth.edu/resize_image?id=cab53563-2641-4030-a473-a87922ebf2eb&w=100',
       topics: {'Content Pages': true, 'Weighted Grading': true, 'Google Docs': true},
       session: 'Tuesday May 5th, at 12 pm. Room 320'
     }
   ];



})();
