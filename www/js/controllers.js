/**
 * Created by sayla on 03/04/2016.
 */
angular.module('starter')

.controller('signupController',function($scope,$state,savingUser) {
    console.log('signup controller');
    $scope.createUser=function(user){
      savingUser.saveUser(user);
      console.log('user is');
      console.log(user)
    };

  })

  .controller('signinController',function($scope,savingUser){
    console.log('signin controller running');
    $scope.doLogin=function(user){
    savingUser.loginUser(user);
    }
  })

  //  $scope.createUser=function(user){
  //    ref.createUser({
  //      email: user.Email,
  //      password: user.Password
  //    }, function(err, success) {
  //      if (err) {
  //        console.log(err);
  //      } else {
  //        user.FirebaseToken = success.uid;
  //        //localStorage.setItem("tokan",user.FirebaseToken);
  //        var userEmail=user.Email;
  //        console.log(user);
  //
  //        $rootScope.users.$add({
  //          FirstName:user.FirstName,
  //          LastName:user.LastName,
  //          Email:user.Email,
  //          BloodGroup:user.BlodGrp,
  //          Password:user.Password,
  //          FirebaseToken:user.FirebaseToken
  //        });
  //      }
  //    });
  //    //console.log($rootScope.users[0].$id);
  //    $state.go('home')
  //  }
  //})
  .controller('homeController',function($scope,$http,$rootScope,savingUser){
    console.log('home controller');
    $scope.users=savingUser.getUser();

  });
