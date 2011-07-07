/* Tournament Controllers */

function DashboardCtrl(Model_) {
  this.model = 'User';
  this.users = Model_.query({obj: this.model+'.json'});
}
DashboardCtrl.prototype = {
    edit: function(user) {
              this.selectedItem = user;
          },
    save: function(user) {
              this.selectedItem = undefined;
          }
}
//DashboardCtrl.$inject = ['Model'];

function MyappsCtrl() {}
//MyappsCtrl.$inject = [];

function TournamentsCtrl() {}
//TournamentsCtrl.$inject = [];

function ShowroomCtrl() {}
//ShowroomCtrl.$inject = [];

function CreateappCtrl() {}
//CreateappCtrl.$inject = [];
