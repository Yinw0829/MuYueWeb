/**
 * Created by Administrator on 2017/3/23 0023.
 */
var myApp = angular.module('myApp').constant('MuYue', {
  api: 'https//www.hemastu.com'
});
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider) {

  // Configure Idle settings
  IdleProvider.idle(5); // in seconds
  IdleProvider.timeout(120); // in seconds

  $urlRouterProvider.otherwise("/layouts");

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $stateProvider
  // //二级页面管理
    .state('layouts', {
      url: "/layouts",
      templateUrl: "catalog.html",
      data: {pageTitle: 'Layouts'},
      controller: "secondCtrl"
    })
    //卷导入页面公共
    .state('volume', {
      abstract: true,
      url: "/charts",
      templateUrl: "navigarion.html"
    })
    //卷
    .state('volume.Catalog', {
      url: "/Catalog/:volumeId",
      templateUrl: "Catalog.html",
      params: {"volumeId": null},
      controller: "CatalogCtrl"
    })


    .state('dashboards', {
      abstract: true,
      url: "/dashboards",
      templateUrl: "views/common/content.html"
    })
}
angular
  .module('inspinia')
  .config(config)
  .run(function ($rootScope, $state) {
    $rootScope.$state = $state;
  });
