/* Tournament Controllers */
function MainController($resource){
    this.Activity = $resource( '../../rest/action/get_current_user');
    this.fetch();
}
MainController.prototype = {
    fetch: function(){
               this.currentUser = this.Activity.get();
           }
}
MainController.$inject = ['$resource'];

function DashboardCtrl($resource) {
    this.currentUser = $resource('../../rest/action/get_current_user').get();
    this.model = 'User';
    this.users = $resource('../../rest/'+this.model+'.json',{key: '@key'}).query();
}
DashboardCtrl.prototype = {
    edit: function(user) {
              this.selectedItem = user;
          },
    save: function(user) {
              this.selectedItem = undefined;
          }
}
DashboardCtrl.$inject = ['$resource'];

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
MyappsCtrl.$inject = ['Model'];

function TournamentsCtrl(Model_) {
    this.model = 'TournamentHeat';
    this.tournaments = Model_.query({model: this.model+'.json'});
}
TournamentsCtrl.prototype = {
    edit: function(tournament) {
              this.selectedItem = tournament;
          },
    save: function(tournament) {
              this.selectedItem = undefined;
          }
}
TournamentsCtrl.$inject = ['Model'];

function ShowroomCtrl(Model_) {
    this.model = 'Game';
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
ShowroomCtrl.$inject = ['Model'];

function CreateappCtrl() {}
//CreateappCtrl.$inject = [];
