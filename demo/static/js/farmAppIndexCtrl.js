farmApp.controller('IndexController',
  function($scope, $rootScope, $http, $routeParams, $location) {
      $scope.users = null;
      console.log('Entered IndexController');

    $http({
        method: 'GET',
        url: '/assets/api/clients/?limit=50',
    }).then(function (response) {
        $rootScope.globals.clients = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/users/?limit=30',
    }).then(function (response) {
        $rootScope.globals.users = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/breeds/?limit=20',
    }).then(function (response) {
        $rootScope.globals.breeds = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/colors/?limit=20',
    }).then(function (response) {
        $rootScope.globals.colors = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/ages/',
    }).then(function (response) {
        $rootScope.globals.ages = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/actions/?limit=50',
    }).then(function (response) {
        $rootScope.globals.actions = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/pastures/?limit=50',
    }).then(function (response) {
        $rootScope.globals.pastures = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/cows/?limit=2000',
    }).then(function (response) {
        $rootScope.globals.cows = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/seasons/?limit=20',
    }).then(function (response) {
        $rootScope.globals.seasons = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/cereals/?limit=20',
    }).then(function (response) {
        $rootScope.globals.cereals = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/grasses/?limit=20',
    }).then(function (response) {
        $rootScope.globals.grasses = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/legumes/?limit=20',
    }).then(function (response) {
        $rootScope.globals.legumes = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/statuses/?limit=20',
    }).then(function (response) {
        $rootScope.globals.statuses = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/illnesses/?limit=20',
    }).then(function (response) {
        $rootScope.globals.illnesses = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/injuries/?limit=20',
    }).then(function (response) {
        $rootScope.globals.injuries = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/treatments/?limit=20',
    }).then(function (response) {
        $rootScope.globals.treatments = response.data.results;
    });

    $http({
        method: 'GET',
        url: '/assets/api/vaccines/?limit=20',
    }).then(function (response) {
        $rootScope.globals.vaccines = response.data.results;
    });

    $scope.globals = $rootScope.globals;
    console.log("globals: " + Object.getOwnPropertyNames($rootScope.globals));
});
