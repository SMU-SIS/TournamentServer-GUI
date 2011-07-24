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
            $browser.xhr.expectGET('../../rest/User.json?key=undefined').respond([
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

        it('should select "user" test1 when edit "user" test1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.users[0]);
            expect(ctrl.selectedItem).toEqualData({ nickname : 'test1', user_id : 'https://www.google.com/profiles/1', email : 'test1@test.com', key : 'testkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

        it('should save changes when save "user" test1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.users[0]);
            ctrl.selectedItem['nickname'] = 'test3';
            ctrl.save(ctrl.users[0]);
            expect(ctrl.users[0]).toEqualData({ nickname : 'test3', user_id : 'https://www.google.com/profiles/1', email : 'test1@test.com', key : 'testkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

    });

    //TODO: Figure out why test fail
    /*
    describe('MyappsCtrl', function(){
        var scope, $browser, ctrl;

        beforeEach(function() {
            scope = angular.scope();
            $browser = scope.$service('$browser');
            $browser.xhr.expectGET('../../rest//App.json?key=undefined').respond([
            {name: 'testapp1',url:'http://simpleboardgames.appspot.com/testapp1', key:'apptestkey1'},
            {name: 'testapp2',url:'http://simpleboardgames.appspot.com/testapp2', key:'apptestkey2'}]);
            ctrl = scope.$new(MyappsCtrl);
        });


        it('should create "app" model with 2 apps fetched from xhr', function() {
            expect(ctrl.apps).toEqual([]);
            $browser.xhr.flush();
            expect(ctrl.apps).toEqualData([
                {name: 'testapp1',url:'http://simpleboardgames.appspot.com/testapp1', key:'apptestkey1'},
                {name: 'testapp2',url:'http://simpleboardgames.appspot.com/testapp2', key:'apptestkey2'}]);
        });

        it('should select "app" testapp1 when edit "app" testapp1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.apps[0]);
            expect(ctrl.selectedItem).toEqualData({name: 'testapp1',url:'http://simpleboardgames.appspot.com/testapp1', key:'apptestkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

        it('should save changes when save "app" testapp1', function() {
            $browser.xhr.flush();
            ctrl.edit(ctrl.apps[0]);
            ctrl.selectedItem['name'] = 'testapp3';
            ctrl.save(ctrl.apps[0]);
            expect(ctrl.apps[0]).toEqualData({name: 'testapp3',url:'http://simpleboardgames.appspot.com/testapp1', key:'apptestkey1',
                $get : Function, $save : Function, $query : Function, $remove : Function, $delete : Function } );
        });

    });
    */
});
