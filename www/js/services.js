/**
 * Created by Zahid on 4/5/2016.
 */
angular.module('starter')
  .constant('FirebaseURL','https://bloddonar.firebaseio.com/')
.service('savingUser',function($firebaseArray,FirebaseURL,$ionicLoading,$state){
    this.userList = new Firebase(FirebaseURL);
    this.usersRef =  this.userList.child('users');
    var usersList = new $firebaseArray(this.usersRef);


    this.saveUser=function(personObj){
      $ionicLoading.show({
        template: 'Loading...'
      });
      this.userList.createUser({
      email:personObj.Email,
      password:personObj.Password
    },function(err,success){
      if(err){
        console.log(err)
      }else{

        personObj.FirebaseToken = success.uid;
        console.log('person obj');
        console.log(personObj);
        usersList.$add(personObj);
        console.log('user Saved successfully');
        $ionicLoading.hide();
      }
        $state.go('signin')
    })
    };


    this.getUser =function(){
      return usersList;
    };


    this.loginUser=function(user){
      this.userList.authWithPassword({
        email    : user.email,
        password : user.password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

    }
  });


