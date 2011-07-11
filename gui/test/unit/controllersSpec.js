/* jasmine specs for Tournament controllers */

describe('Tournament controllers', function() {

    beforeEach(function(){
        this.addMatchers({
            toEqualData: function(expected) {return angular.equals(this.actual, expected);}
        });
    });

    describe('DashboardCtrl', function(){
        var scope, $browser, ctrl;

        beforeEach(function() {
            scope = angular.scope();
            $browser = scope.$service('$browser');
            $browser.xhr.expectGET('rest//User.json?key=undefined').respond([
        {nickname: 'test1',user_id:'https://www.google.com/profiles/1', email:'test1@test.com',key:'testkey1'},
        {nickname: 'test2',user_id:'https://www.google.com/profiles/2', email:'test2@test.com',key:'testkey2'}]);
        ctrl = scope.$new(DashboardCtrl);
        });


        it('should create "user" model with 2 users fetched from xhr', function() {
            expect(ctrl.users).toEqual([]);
            $browser.xhr.flush();
            expect(ctrl.users).toEqualData([
                {nickname: 'test1',user_id:'https://www.google.com/profiles/1', email:'test1@test.com',key:'testkey1'},
                {nickname: 'test2',user_id:'https://www.google.com/profiles/2', email:'test2@test.com',key:'testkey2'}]);
        });

        it('should select user test1 when edit user test1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.users[0]);
            expect(ctrl.selectedItem).toEqualData({ nickname : 'test1', user_id : 'https://www.google.com/profiles/1', email : 'test1@test.com', key : 'testkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

        it('should save changes when save user test1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.users[0]);
            ctrl.selectedItem['nickname'] = 'test3';
            ctrl.save(ctrl.users[0]);
            expect(ctrl.selectedItem).toEqualData({ nickname : 'test3', user_id : 'https://www.google.com/profiles/1', email : 'test1@test.com', key : 'testkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

    });
});
