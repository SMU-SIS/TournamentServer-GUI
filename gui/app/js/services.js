/* http://docs.angularjs.org/#!angular.service */

/**
 * Service which is responsible for the main configuration of the app.
 */
angular.service('Tournament', function($route, $location, $window) {

    $route.when('/dashboard', {template: 'partials/dashboard.html', controller: DashboardCtrl});
    $route.when('/myapps', {template: 'partials/myapps.html', controller: MyappsCtrl});
    $route.when('/tournaments/:heat_key', {template: 'partials/tournaments.html', controller: TournamentsCtrl});
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
 * Service which is responsible for getting rest data for the app.
 */
angular.service('Model', function($resource){
    this.currentUser = $resource( '../../rest/action/get_current_user').get();
    this.temp_index = $resource( '../../rest/temp_index').get();
    return $resource('../../rest/:model',{key: '@key'});
});
