var MatrimonialApp = angular.module('MATRIMONIAL-APP',['ngRoute']);
var contactEmail = "contact@matrified.com";
var appMessages = {
		"info.mail_notfound":"No account with the given email exists.",
		"pass_invalid":"Please check your password.",
		"info.mail_alreadyexists":"Account with same email already exists.",
		"uId_invalid":"No such email is registered with us. Please try again.",
		"id_invalid":"Your Reset link seems to be expired or already used. Please click on Forget Password to issue a new change request.",
		"account_locked":"Your account has been locked following our usage guidelines. You can submit an unlock appeal to "+contactEmail,
		"error_generic":"Oops! There seems to be a problem processing your request. Please try again or contact us at "+contactEmail,
		};
MatrimonialApp.factory('MatrimonyUtils', ['$rootScope',function($rootScope) {
	$rootScope.hostServer = hostServer;
	var utilsFx = {
			success:function(msg){
				$rootScope.notify={type:'success',msg:[msg]};
				$('#myModal').modal('show');
			},
			error:function(msg){
				$rootScope.notify={type:'error',msg:[msg]};
				$('#myModal').modal('show');
			},
			validation:function(obj){
				var msgs = [];
				for(var i in obj){
					var errorCode = obj[i].field+"_"+obj[i].key;
					msgs[i] = appMessages[errorCode] || errorCode;
				}
				$rootScope.notify={type:'error',msg:msgs};
				$('#myModal').modal('show');
			}
	};
	return utilsFx;
	}]).run(['$window', '$http', function($window, $http) {
		$http.get('/signin-status').success(function(data) {
			if(data.loggedIn){
				if(typeof(Storage) !== "undefined") {
					 localStorage.setItem("loggedIn",true);
				}
				$window.location = "home.html";
			}
		});
		  
		}]);
MatrimonialApp.filter('capitalize', function() {
	 return function(input, scope) {
	 if (input!=null)
	 input = input.toLowerCase();
	 return input.substring(0,1).toUpperCase()+input.substring(1);
	 }
	});
MatrimonialApp.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider) {
	$httpProvider.defaults.withCredentials = true;
	$routeProvider.when('/', {})
	.when('/privacy', {
		templateUrl : 'privacy.html'
	}).when('/contact', {
		templateUrl : 'contact.html'
	}).when('/terms', {
		templateUrl : 'terms.html'
	}).when('/initiate-reset/:key', {
		templateUrl : 'reset-key.html',
		controller : 'ResetKeyController'
	}).otherwise({
		redirectTo : '/'
	});
	
	var appInterceptors = ['$q', '$location','$rootScope','MatrimonyUtils','$window',function($q, $location,$rootScope,MatrimonyUtils,$window) {
		return {
	'request': function(config) {
				$rootScope.requestProgress = true;
				if(config.url.indexOf('.html')==-1){
					config.url = hostServer + config.url;
				}
				
				return config || $q.when(config);
			},
			'response': function(response) {
				$rootScope.requestProgress = false;
				$window.scrollTo(0,0);
				var eCode = response.data.errorCode;
				if(eCode){
					switch(eCode){
						case 4400:
						default:
							MatrimonyUtils.validation(response.data.errorResponses);
							break;
					}
					return $q.reject(response);
				}
				return response || $q.when(response);
			},
			'responseError': function(rejection) {
				$rootScope.requestProgress = false;
				if(rejection.status===0){
					MatrimonyUtils.error('Network lost or too slow. Try again.');
				}else {
				//	MatrimonyUtils.error('Problem occured while processing request. Please try again or contact us at '+contactEmail);
          MatrimonyUtils.error('We are doing a maintenance activity and will be back soon. For more details, please reach us at '+contactEmail);

        }
				return $q.reject(rejection);
			}
		};
	}];

	$httpProvider.interceptors.push(appInterceptors);

}]);

MatrimonialApp.controller('SignupController', ['$scope','$http','$window','$timeout','MatrimonyUtils', function($scope,$http,$window,$timeout,MatrimonyUtils) {
	$scope.home = true;
	var query = window.location.search;
	if(query){
		if(query.indexOf("activated")!=-1){
			MatrimonyUtils.success('Account activated! Log in to enjoy full services');
		}else if(query.indexOf("interestsent")!=-1){
			MatrimonyUtils.success('Your interest and contact email successfully shared. Log in to continue');
		}else if(query.indexOf("declined")!=-1){
			MatrimonyUtils.success('Interest declined! Log in to browse more profiles');
		}
	}
	$scope.user={};
	//set year options and date options
	$scope.yearOptions = [],$scope.dateOptions = [];
	var currentYear = (new Date()).getFullYear(), currentDate = 0;
	var youngest = currentYear - 18, oldest = currentYear - 80;
	while(youngest-->=oldest){
		$scope.yearOptions.push(youngest);
		if(++currentDate<=31){
			$scope.dateOptions.push(currentDate);
		}
	}
	
	$('.carousel').carousel();
	$('#email-box').focus();
	$("#cellCode").intlTelInput({autoHideDialCode:false,dialCodeDelimiter:"",defaultStyling:"outside",preferredCountries:["in","us","gb","ca","nz"]});
	$scope.signup = function(user) {
		user.cellCode = $("#cellCode").val();
		if ($scope.signupForm.$invalid){
			$scope.showError = true;
			return;
		}else{
			$scope.showError = false;
		}
		var presumedDate = new Date(user.meta.bYear, user.meta.bMonth, user.meta.bDay);
		if (presumedDate.getDate() != user.meta.bDay){
			$scope.invalidDate = true;
			return;
		}else{
			$scope.invalidDate = false;
		}
		
		user.info.mail = user.info.mail.toLowerCase();
		$http.post('/user', user).success(function(data, status, headers, config) {
			$scope.success = true;
			$('#email-box').val(user.info.mail);
			$('#pass-box').val(user.pass);
			var logUser = {"uname":user.info.mail,"pass":user.pass};
			$http.post('/signin', logUser).success(function(data, status, headers, config) {
				if(typeof(Storage) !== "undefined") {
					 localStorage.setItem("loggedIn",true);
				}
				$window.location = "home.html#/postad";
		});
			
		});
		
	};
} ]);
MatrimonialApp.controller('LoginController', [ '$scope','$http','$window', function($scope,$http,$window) {
	$scope.user={};
	$scope.signin = function(user) {
		user.uname = $('#email-box').val().toLowerCase();
		user.pass = $('#pass-box').val();
		
		if(!(user.uname && user.pass)){
			if ($scope.loginForm.$invalid){
				$scope.showError = true;
				return;
			}
		}
		
		$http.post('/signin', user).success(function(data, status, headers, config) {
			if(typeof(Storage) !== "undefined") {
				 localStorage.setItem("loggedIn",true);
			}
			if(data.type=="ROLE_UNVERIFIED"){
				$window.location = "home.html#/postad";
			}else{
				$window.location = "home.html";
			}
		});
		
	};
} ]).controller('ResetKeyController', [ '$routeParams','$scope','$http','MatrimonyUtils', function($routeParams,$scope,$http,MatrimonyUtils) {
	var key = $routeParams.key;
	$scope.vw = "init";
	if(key!=1){
		$scope.vw = "change";
	}
	$scope.initiateReset = function() {
		$scope.email = $('#resetEmail').val();
		
			if ($scope.resetKeyForm.$invalid){
				$scope.showError = true;
				return;
			}
		
		$http.post('/user/generate-resetkey',{"mail":$scope.email}).success(function() {
			MatrimonyUtils.success('Please check your email and click on the reset link.');
		});
		
	};
	$scope.resetPass = function() {
		$scope.pass = $('#resetPass').val();
		
			if ($scope.resetPassForm.$invalid){
				$scope.showRError = true;
				return;
			}
		
		$http.post('/user/reset',{"pass":$scope.pass,"key":key}).success(function() {
			MatrimonyUtils.success('Password updated successfully. Please login with your new password now.');
		});
		
	};
} ]);
