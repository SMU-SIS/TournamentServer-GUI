/* http://docs.angularjs.org/#!angular.service */

/**
 * Service which is responsible for the main configuration of the app.
 */
angular.service('Tournament', function($route, $location, $window) {

    $route.when('/dashboard', {template: 'partials/dashboard.html', controller: DashboardCtrl});
    $route.when('/myapps', {template: 'partials/myapps.html', controller: MyappsCtrl});
    $route.when('/tournaments', {template: 'partials/tournaments.html', controller: TournamentsCtrl});
    $route.when('/showroom', {template: 'partials/showroom.html', controller: ShowroomCtrl});
    $route.when('/createapp', {template: 'partials/createapp.html', controller: CreateappCtrl});
    $route.otherwise({redirectTo: '/dashboard'});

    var self = this;

    $route.onChange(function(){
        self.params = $route.current.params;
    });

    $route.parent(this);

}, {$inject:['$route', '$location', '$window'], $eager: true});

/**
 * User Service which is responsible for getting rest user json data for the app.
 */
angular.service('Model', function($resource){
    return $resource('rest/:model/:obj',{key: '@key'});
});
