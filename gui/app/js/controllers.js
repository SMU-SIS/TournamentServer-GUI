/* Tournament Controllers */
function CurrentUserController($resource){
    this.Activity = $resource( '../../rest/action/get_current_user');
    this.fetch();
}
CurrentUserController.prototype = {
    fetch: function(){
               this.currentUser = this.Activity.get();
           }
};
CurrentUserController.$inject = ['$resource'];

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
DashboardCtrl.$inject = ['Model'];

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
