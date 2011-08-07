/* Tournament Controllers */
MainController.$inject = ['$resource'];
function MainController($resource){
    this.Activity = $resource( '../../rest/action/get_current_user');
    this.fetch();
}
MainController.prototype = {
    fetch: function(){
               this.currentUser = this.Activity.get();
           }
}

DashboardCtrl.$inject = ['Model'];
function DashboardCtrl(Model_) {
    this.model = 'User';
    this.users = Model_.query({model: this.model+'.json'});
}
DashboardCtrl.prototype = {
    edit: function(user) {
              this.selectedItem = user;
          },
    save: function(user) {
              this.selectedItem = undefined;
          }
}

MyappsCtrl.$inject = ['Model'];
function MyappsCtrl(Model_) {
    this.model = 'App';
    this.apps = Model_.query({model: this.model+'.json'});
}
MyappsCtrl.prototype = {
    edit: function(app) {
              this.selectedItem = app;
          },
    save: function(app) {
              this.selectedItem = undefined;
          }
}

TournamentsCtrl.$inject = ['Model'];
function TournamentsCtrl(Model_) {
    this.model = 'tournament_heat';
    this.heat_key = this.params.heat_key;
    this.heat_result = Model_.get({model: 'tournament_heat/'+this.heat_key});
}

ShowroomCtrl.$inject = ['Model'];
function ShowroomCtrl(Model_) {
    this.model = 'Course';
    this.games = Model_.query({model: this.model+'.json'});
}
ShowroomCtrl.prototype = {
    edit: function(game) {
              this.selectedItem = game;
          },
    save: function(game) {
              this.selectedItem = undefined;
          }
}

//CreateappCtrl.$inject = [];
function CreateappCtrl() {}
