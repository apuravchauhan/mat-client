var MatrimonialApp = angular.module('MATRIMONIAL-APP',['ngRoute']);
var atrDef={cat:{name:"Category",vals:[{c:"bride",n:"Bride"},{c:"groom",n:"Groom"}]},stat:{name:"Status",vals:[{c:"un",n:"Unmarried"},{c:"wid",n:"Widowed"},{c:"div",n:"Divorced"},{c:"wtDiv",n:"Awaiting Divorce"}]},edu:{name:"Education field",vals:[{c:"edE",n:"Engineering/ Technology"},{c:"edCI",n:"Computers/ IT"},{c:"edED",n:"Education"},{c:"edM",n:"Medical/ Healthcare"},{c:"edS",n:"Science"},{c:"edF",n:"Finance/ Banking"},{c:"edC",n:"Commerce"},{c:"edA",n:"Arts"},{c:"edL",n:"Law"},{c:"edH",n:"Hotel/ Hospitality"},{c:"edMJ",n:"Media/ Journalism"},{c:"edD",n:"Architecture/ Design"},{c:"edT",n:"Travel/ Tourism"},{c:"edO",n:"Others"}]},workStat:{name:"Work area",vals:[{c:"wNW",n:"Not working"},{c:"wIT",n:"IT/ Software Engineering"},{c:"wEN",n:"Engineering/ Non IT"},{c:"wTT",n:"Teaching/ Training"},{c:"wMD",n:"Medical/ Doctor/ Surgeon"},{c:"wNH",n:"Nursing/ Healthcare"},{c:"wFB",n:"Finance/ Banking/ Accounting"},{c:"wHH",n:"Hotel/ Hospitality"},{c:"wAH",n:"Admin/ HR"},{c:"wMJ",n:"Media/ Journalism/ Entertainment"},{c:"wAG",n:"Agriculture"},{c:"wAV",n:"Airline/ Aviation"},{c:"wAD",n:"Architecture/ Design"},{c:"wWD",n:"Art/ Web Design/ Animation"},{c:"wFJ",n:"Fashion/ Beauty/ Jewellery"},{c:"wBP",n:"BPO/ Customer Support/ KPO"},{c:"wCS",n:"Civil Services"},{c:"wD",n:"Defense"},{c:"wL",n:"Legal/ Law"},{c:"wM",n:"Music"},{c:"wMN",n:"Merchant Navy"},{c:"wSM",n:"Sales/ Marketing"},{c:"wS",n:"Science"},{c:"wCT",n:"Contracting/ Trading"},{c:"wSW",n:"Social Work/ NGO"},{c:"wSP",n:"Sports"},{c:"wTR",n:"Travel/ Tourism"},{c:"wW",n:"Writer/ Literature"},{c:"wOT",n:"Others"}]},inc:{name:"Annual Income",vals:[{c:0,n:"Not applicable"},{c:1,n:"Upto INR 2 Lakhs"},{c:2,n:"INR 2 Lakhs to 4 Lakhs"},{c:4,n:"INR 4 Lakhs to 7 Lakhs"},{c:7,n:"INR 7 Lakhs to 10 Lakhs"},{c:10,n:"INR 10 Lakhs to 15 Lakhs"},{c:15,n:"INR 15 Lakhs to 20 Lakhs"},{c:20,n:"INR 20 Lakhs to 30 Lakhs"},{c:30,n:"INR 30 Lakhs to 50 Lakhs"},{c:50,n:"INR 50 Lakhs to 75 Lakhs"},{c:75,n:"INR 75 Lakhs to 1 Crore"},{c:100,n:"INR 1 Crore & above"}]}};
var contactEmail = "contact@matrified.com";
var appMessages = {
		"info.mail_alreadyexists":"Account with same email already exists.",
};
MatrimonialApp.factory('MatrimonyUtils', ['ageheightFilter','$timeout','$rootScope',function(ahFilter,$timeout,$rootScope) {
	var ages = [];
    var heights = [];
   
	var utilsFx = {
			convertAge:function(date){
			    var d2 =  new Date();
			    var diff = d2.getTime() - date;
			    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
			},
			getHeights:function(){
				if(heights.length>0) return heights;
				 var y =152;
				    while(y<183){
				    	heights.push({height:y,name:ahFilter(y,"height")});
				    	y =y+2;
				    }
				   heights.splice(1, 1);
				   heights.splice(5, 1);
				   heights.splice(9, 1);
				   return heights;
			},
			getAges:function(){
				if(ages.length>0) return ages;
				var i =17;
			    while(i++<55){
			    	ages.push({age:i,name:ahFilter(i,"age")});
			    }
			    return ages;
			},
			initCarousal:function(){
				$timeout(function() {
					
					  $(".carousel").unbind();
			          $(".carousel").carousel("pause").removeData();
			          $('.carousel').on('slide.bs.carousel', function(ele) {
			            var img = $(ele.relatedTarget).find("img");
			            if (!img.attr("src")) img.attr("src", img.data("src"));
			          });
			          $('.carousel').each(function() {
			            $(this).find('.carousel-inner .item').removeClass("active");
			            var item = $(this).find('.carousel-inner .item:first-child');
			            var itemImage = item.find('img');
			            if (!itemImage.attr("src")) {
			              itemImage.attr("src", itemImage.data("src"));
			            }
			            item.addClass("active");
			            $(this).find('.carousel-indicators li').removeClass("active");
			            $(this).find('.carousel-indicators li:first-child').addClass("active");
			            $(this).carousel(0);

			          });
					});
			},
			success:function(msg){
				$rootScope.notify={type:'success',msg:[msg]};
				$('#myModal').modal('show');
			},
			error:function(msg){
				$rootScope.notify={type:'error',msg:[msg]};
				$('#myModal').modal('show');
			},
		    validation: function(obj) {
		        var msgs = [];
		        for (var i in obj) {
		          var errorCode = obj[i].field + "_" + obj[i].key;
		          msgs[i] = appMessages[errorCode] || errorCode;
		        }
		        $rootScope.notify = {
		          type: 'error',
		          msg: msgs
		        };
		        $('#myModal').modal('show');
		      },
	};
	return utilsFx;
	}]).filter('keyval', function() {
	return function(input, atr) {
		var out = input;
		for ( var k in atrDef[atr].vals) {
			if (atrDef[atr].vals[k].c == input)
				return atrDef[atr].vals[k].n;
		}
		return out;
	};
}).filter('ageheight', function() {
	return function(input, atr) {
		var out = input;
		if(atr=="age"){
			 var d2 =  new Date();
			    var diff = d2.getTime() - input;
			    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) +" years";
		}
		if(atr="height"){
			var inches = (out * 0.393700787).toFixed(0);
      		var feet = Math.floor(inches / 12);
      		inches %= 12;
      		return feet + "' " + inches + "''  ";
		}
		return out;
	};
}).config([ '$routeProvider', function($routeProvider) {


	$routeProvider.when('/admin-login', {
		templateUrl : 'admin-login.html',
		controller : 'LoginController'
	}).when('/review-ads', {
		templateUrl : 'admin-review.html',
		controller : 'ReviewAdsController'
	}).otherwise({
		redirectTo : '/admin-login'
	});
	
	
} ]).config(['$httpProvider',function($httpProvider) {
	var appInterceptors = ['$q', '$location','$rootScope','MatrimonyUtils',function($q, $location,$rootScope,MatrimonyUtils) {
		return {
			'request': function(config) {
				$rootScope.requestProgress = true;
				return config || $q.when(config);
			},
			 
			'requestError': function(rejection) {
				$rootScope.requestProgress = false;
				return $q.reject(rejection);
			},
			'response': function(response) {
				$rootScope.requestProgress = false;
				var eCode = response.data.errorCode;
				if(eCode){
					switch(eCode){
						case 4400:
						default:
							MatrimonyUtils.validation(response.data.errorResponses);
							break;
						case 4401:
							window.location = "admin-996.html";
							break;
					}
					return $q.reject(response);
				}
				return response || $q.when(response);
			},
			'responseError': function(rejection) {
				$rootScope.requestProgress = false;
				if(rejection.status===0){
					MatrimonyUtils.error('Unable to communicate with server. Please check your network or contact admin.');
				}else {
					MatrimonyUtils.error('Problem occured while processing request. Please try again or contact admin.');
					
				}
				return $q.reject(rejection);
			}
		};
	}];

	$httpProvider.interceptors.push(appInterceptors);

}]).controller('ReviewAdsController', ['$scope','$http','$timeout','$location','MatrimonyUtils',function($scope, $http, $timeout,$location,MatrimonyUtils) {
	$scope.pgSize = 10;
	$scope.pager = true;
	$scope.currPg=0;
	$scope.pageSearch = function(num){
		$scope.currPg=num;
			$scope.search(num);
		
		
	};
	
    var $image = $(".bootstrap-modal-cropper > img");
  
	$("#bootstrap-modal").on("shown.bs.modal", function(event) {
		 var button = $(event.relatedTarget);
		 var imgattachid = button.data('imgattachid');
		 $image.attr("src",hostServer+"/attach/download/"+imgattachid);
	     $image.cropper({
	      multiple: true,
	      aspectRatio: 220/270,
	      zoomable:false,
	      data: {width:220,height:270 },
	  }).on({
	         "built.cropper": function (e) {
	        	 var stats = $image.cropper("getImageData");
	        	  $('#imageinfo').html("Width: "+stats.naturalWidth +" | Height: "+stats.naturalHeight);
	         }
	       });
	}).on("hidden.bs.modal", function() {
	  $image.cropper("destroy");
	  $scope.currentImageData ={};
	  $scope.$apply();
	}).on("click", "[data-method]", function () {
	    var data = $(this).data();
	    if (data.method) {
	      $image.cropper(data.method, data.option);
	    }
	  });
	
	
	$scope.allowRemove = true;
	$scope.ads = {};
	$scope.atrDef = atrDef;
	$scope.editAd = {};
	$scope.ages = MatrimonyUtils.getAges();
	$scope.heights = MatrimonyUtils.getHeights();
	var fillers = {'profile-suits':'If my profile suits, feel free to express interest and we can proceed accordingly.',
					'looking-for':'We are looking for a decent and well settled match for matrimony.',
					'contact-us':'To know more details about me and my family, please contact us at: ',
					'simple-person':'I consider myself as a simple person and I am looking for a simple life partner.',
					'decent-caring':'I am looking for a decent, caring and good looking match for marriage.',
					'middle-class':'I come from a middle class family with good background.'};
	
	$scope.removePic = function(attachId,ad,carouselId){
		
		$http.post('/admin/remove-pic/'+ad.id+'/'+attachId).success(function(data, status, headers, config) {
			$.each(ad.attach, function(i, item){
				  if (item.aid == attachId) {
					  ad.attach.splice(i, 1);
					  MatrimonyUtils.initCarousal();
						return false;
				  }
				});
			
		});
	};
    $scope.initEdit = function(aid,ad){
		
		$scope.currentImageData ={ad:ad,aid:aid};
	};
	$scope.approvePic = function(attachId,ad,carouselId){
		
		$http.post('/admin/approve-pic/'+ad.id+'/'+attachId).success(function(data, status, headers, config) {
			$.each(ad.attach, function(i, item){
				  if (item.aid == attachId) {
					  ad.attach.splice(i, 1);
					  MatrimonyUtils.initCarousal();
						return false;
				  }
				});
		});
	};
    $scope.editPic = function(){
      var editInfo = $image.cropper("getData",true);
   	  var rotateInfo  =  $image.cropper("getImageData");
      if(rotateInfo.rotate!=0){
    	  editInfo.rotate = rotateInfo.rotate;
      }
      var currentAd = $scope.currentImageData.ad;
      var attachmentId = $scope.currentImageData.aid;
   	$http.post('/attach/edit-upload/'+attachmentId+'/ad/'+currentAd.id,editInfo)
   	.success(function(data) {
   	 if (data.errorCode) {
   		MatrimonyUtils.validation(data.errorResponses);
         $scope.$apply();
      } else {
        for (var i in data.success) {
        	currentAd.attach.push(data.success[i]);
        }
        $timeout(function() {
        	MatrimonyUtils.initCarousal();
        });
        MatrimonyUtils.success("Congratulations! Image successfully uploaded.");
      }
   	});
	};
	$scope.update = function(ad) {
		if ($scope.adForm.$invalid){
			MatrimonyUtils.error('Please fill in all the required fields marked in red to create your profile.');
			return;
		}
		
			$http.post('/admin/update/'+ad.id, ad).success(function(data, status, headers, config) {
				MatrimonyUtils.success('Ad updated successfully.');
				$scope.editMode = false;
				
			});
	};
	$scope.review = function(ad,stat,type) {
			var rurl = '/admin/review/ad/'+ad.id+'/uId/'+ad.attr.crBy+'/'+stat;
			if(type){
				rurl +='/'+type;
			}
			$http.post(rurl).success(function(data, status, headers, config) {
				$scope.editMode = false;
				var index = $.inArray(ad, $scope.ads);
				$scope.ads.splice(index, 1);
				MatrimonyUtils.success('Review completed successfully.');
				
			});
	};
	$scope.deactivate = function(ad,stat) {
		var deactivateurl = '/admin/deactivate/ad/'+ad.id+'/uId/'+ad.attr.crBy+'/'+stat;
		$http.post(deactivateurl).success(function(data, status, headers, config) {
			$scope.editMode = false;
			var index = $.inArray(ad, $scope.ads);
			$scope.ads.splice(index, 1);
			MatrimonyUtils.success('Review completed successfully.');
			
		});
};
	$scope.edit = function(ad){
		$scope.editMode = true;
		$scope.editAd = ad;
		$timeout(function(){
			$('select').selectpicker('render');
		});
	};
	$scope.getContact = function(ad){
		if(!ad.contact){
			$http.get('/admin/contact/'+ad.attr.crBy).success(function(data) {
				ad.contact = data.contact;
				ad.activation = data.status;
			});
		}
		
	};
	$scope.updateContact = function(ad){
		var user = {id:ad.attr.crBy,info:ad.contact,meta:{setup:ad.activation}};
			$http.post('/admin/update-contact/',user).success(function(data) {
				if(data.status){
					MatrimonyUtils.success('Contact updated successfully.');
				}else{
					MatrimonyUtils.error('Contact not updated. Please contact DB administrator.');
				}
			});
		
	};
	$scope.lock = function(ad){
			$http.get('/admin/lock/'+ad.attr.crBy).success(function(data) {
				MatrimonyUtils.success('Account locked successfully.');
			});
	};
	$scope.searchByProfile = function(profileId){
		 $http.get('/admin/search/profile/' + profileId+'/').success(function(data) {
			        $scope.pager = false;
					$scope.ads =[ data];
					MatrimonyUtils.initCarousal();
					$timeout(function() {
						$('select').selectpicker();
					});;
			});
	};
	$scope.searchByEmail = function(email){
		 $http.get('/admin/search/email/' + email+'/').success(function(data) {
			        $scope.pager = false;
					$scope.ads =[ data];
					MatrimonyUtils.initCarousal();
					$timeout(function() {
						$('select').selectpicker();
					});;
			});
	};
	$scope.searchByCell = function(cell){
		 $http.get('/admin/search/cell/' + cell+'/').success(function(data) {
			        $scope.pager = false;
					$scope.ads =[ data];
					MatrimonyUtils.initCarousal();
					$timeout(function() {
						$('select').selectpicker();
					});;
			});
	};
	$scope.search = function(pg){
		$http.get('/admin/pending-ads/pg/'+pg).success(function(data, status, headers, config) {
			if(pg!=0 && data.length==0){
				$scope.currPg--;
				$scope.endPg = $scope.currPg; 
			}else{
				if(pg==0 && data.length<$scope.pgSize){
					$scope.pager = false;
				}else{
					$scope.pager = true;
				}
				$scope.ads = data;
				MatrimonyUtils.initCarousal();
				$timeout(function() {
					$('select').selectpicker();
				});;
			}
			
			
			
		});
	}
	$scope.makeReadable = function(){

			var capText = $scope.editAd.desc.toLowerCase();
			//capText = capText.replace(/.n/g,".[-<br>-]. ");
			//capText = capText.replace(/.sn/g,". [-<br>-]. ");
			var wordSplit = '. ';

			var wordArray = capText.split(wordSplit);

			var numWords = wordArray.length;
			var x;
			for(x=0;x<numWords;x++) {
			wordArray[x] = wordArray[x].replace(wordArray[x].charAt(0),wordArray[x].charAt(0).toUpperCase());
			if(x==0) {
			capText = wordArray[x]+". ";
			}else if(x != numWords -1){
			capText = capText+wordArray[x]+". ";
			}else if(x == numWords -1){
			capText = capText+wordArray[x];
			}
			}
			capText = capText.replace(/[-<br>-].s/g,"n");
			capText = capText.replace(/sis/g," I ");
			$scope.editAd.desc = capText;
	}
	$scope.addFiller = function(fillerId){
		var str = $scope.editAd.desc || '';
		var suffix = ".";
		var fillerStr = '';
		if(str==''){
			fillerStr = fillers[fillerId];
		}else if(str.indexOf(suffix, str.length - suffix.length) !== -1){
			fillerStr = ' '+fillers[fillerId];
		}else{
			fillerStr =". "+ fillers[fillerId];
		}
		$scope.editAd.desc = str + fillerStr;
		
		
	}
	$scope.search(0);
} ]).controller('LoginController', [ '$scope','$rootScope','$http','$location', function($scope,$rootScope,$http,$location) {
	$scope.signout = function() {
		$http.post('/signout').success(function(data, status, headers, config) {
			$location.path("/admin-login");
			
		});
		
	};
	$scope.user={};
	$scope.signin = function(user) {
		user.uname = $('#email-box').val();
		user.pass = $('#pass-box').val();
		
		if(!(user.uname && user.pass)){
			if ($scope.loginForm.$invalid){
				$scope.showError = true;
				return;
			}
		}
		
		$http.post('/signin', user).success(function(data, status, headers, config) {
			$rootScope.loggedUser = data.contact;
			$location.path("/review-ads");
		});
		
	};
	
} ]);

/******Upload file code *****/



function uploadFile(event) {
	
	 var file = event.dataTransfer !== undefined ? event.dataTransfer.files[0] : event.target.files[0];
	 var _ele = angular.element(event.target);
	 var uId = _ele.data('uid');
	 var $http = _ele.injector().get('$http');
	//if full File API and canvas support available: proceed to downscaling and upload
	 //https://code.google.com/p/android/issues/detail?id=39882
	 var nua = navigator.userAgent;
	 var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	 var testElem = document.createElement('canvas');
	 var isCanvasSupported =  !!(testElem.getContext && testElem.getContext('2d'));
	 if ( window.FileReader && window.File && window.FormData && 
			 window.FileList && window.Blob && isCanvasSupported && !isAndroid){
			var reader = new FileReader();
			reader.onload = function(e) {
				resizeUpload(e.target.result,$http,uId);
			};
			reader.readAsDataURL(file);
	 }else{
		 $('#upload-form-ad'+uId).attr('action', hostServer + "/admin/attach/upload/"+uId);
         $('#upload-form-ad'+uId).submit(); //alert(this.files[0].size);
	 }
  }
 
 $(".uploadTrg").load(function() {
    var response = '';
    try {
      response = $.trim(this.contentWindow.document.body.innerHTML);
    } catch (e) {
      //known issue when accessing a cross origin content. As of now, simply do a reload
      window.location.reload();
    }
    if (response != '') {

      if (response.indexOf('pre') != -1) {
        response = $(response).html();
      }
      alert("Done: "+ response);
    }
  });

 function resizeUpload(src,$http,uid) {
	
		var tmp = new Image(), reqW, reqH, canvas, cW, cH;
		tmp.onerror = function(a,b,v,d){
			alert("Invalid image type");
			 
		};
		tmp.onload = function() {

			//init time: get aspect ratio
			if (angular.isUndefined(canvas)) {
				canvas = document.createElement('canvas');
				//following 220x270 size: get a bit larger image 
				var MAX_WIDTH = 440;
				var MAX_HEIGHT = 540;
				reqW = tmp.naturalWidth;
				reqH = tmp.naturalHeight;

				if (reqW > reqH) {
					if (reqW > MAX_WIDTH) {
						reqH *= MAX_WIDTH / reqW;
						reqW = MAX_WIDTH;
					}
				} else {
					if (reqH > MAX_HEIGHT) {
						reqW *= MAX_HEIGHT / reqH;
						reqH = MAX_HEIGHT;
					}
				}

			}

			cW = tmp.naturalWidth / 2;
			cH = tmp.naturalHeight / 2;

			if (cW < reqW) {
				cW = reqW;
			}
			if (cH < reqH) {
				cH = reqH;
			}

			canvas.width = cW;
			canvas.height = cH;
			canvas.getContext('2d').drawImage(tmp, 0, 0, cW, cH);


			if (cW <= reqW || cH <= reqH) {
				    canvas.toBlob(
				        function (blob) {
				            var formData = new FormData();
				            formData.append('file', blob, "File");
				             
							 $http.post("/admin/attach/upload/"+uid, formData, {
								transformRequest: angular.identity,
								headers: {'Content-Type': undefined}
							}).success(function(data){
							   alert("Done upload");
							});
							
				        },
				        'image/jpeg'
				    );
				return;
			}
			tmp.src = canvas.toDataURL('image/jpeg', 0.9);
		};
		tmp.src = src;

	}

/***Upload file code ends****/ 
