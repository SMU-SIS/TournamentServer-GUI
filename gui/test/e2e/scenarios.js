describe('tournament', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    it('should automatically redirect to /dashboard when location hash/fragment is empty', function() {
        expect(browser().location().hash()).toBe("/dashboard");
    });

    describe('navagation bar function', function(){

        beforeEach(function() {
            browser().navigateTo('../../app/index.html#/test');
        });
        it('should redirect to /dashboard when location hash/fragment is not in navigation bar', function() {
            expect(browser().location().hash()).toBe("/dashboard");
        });
        it('should redirect to /createapp when click menu link of Create New App', function() {
            element('.menu li:last a').click();
            expect(browser().location().hash()).toBe("/createapp");
        });

    });

    describe('topbar & footer', function(){

        beforeEach(function() {
            browser().navigateTo('../../app/index.html');
        });
        it('should have current user in topbar', function(){
            expect(element('.user').text()).toMatch(/Current User:/);
        });
        it('should have menu bar with 5 menu items', function(){
            expect(element('.menu li').count()).toBe(5);
        });
        it('should have home as first menu item', function(){
            expect(element('.menu li:first').text()).toMatch(/^Dashboard$/);
        });
        it('should have create new app as last menu item', function(){
            expect(element('.menu li:last').text()).toMatch(/^Create New App$/);
        });
        it('should have footer with copyright', function(){
            expect(element('.footer h6').text()).toMatch(/^Copyright (c) 2011 Singpath -- Developer: wgx731 | Designer: jeff$/);
        });

    });

    describe('dashboard', function() {

        beforeEach(function() {
            browser().navigateTo('#/dashboard');
        });


        it('should render DashBoard Page when user navigates to /dashboard', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Dashboard Page$/);
            expect(element('ng\\:view #user-list tr:first td:first').text()).
                toMatch(/^nickname$/);
            expect(element('ng\\:view #user-list tr:first td:last').text()).
                toMatch(/^key$/);
        });

        it('should display current user information', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Dashboard Page$/);
            expect(element('ng\\:view #user-list tr:last td:first').text()).
                toMatch(/^scboesch$/);
            expect(element('ng\\:view #user-list tr:last td:last').text()).
                toMatch(/^View Tournaments$/);
        });

    });


    describe('myapps', function() {

        beforeEach(function() {
            browser().navigateTo('#/myapps');
        });

        it('should render My Apps Page when user navigates to /myapps', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^My Apps Page$/);
            expect(element('ng\\:view #app-list tr:first td:first').text()).
                toMatch(/^url$/);
            expect(element('ng\\:view #app-list tr:first td:last').text()).
                toMatch(/^key$/);
        });

    });

    describe('tournaments', function() {

        beforeEach(function() {
            browser().navigateTo('#/tournaments');
        });


        it('should render Tournaments Page when user navigates to /tournaments', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Tournaments Page$/);
            expect(element('ng\\:view #tournament-list tr:first td:first').text()).
                toMatch(/^finished$/);
            expect(element('ng\\:view #tournament-list tr:first td:last').text()).
                toMatch(/^created$/);
        });

    });

    describe('showroom', function() {

        beforeEach(function() {
            browser().navigateTo('#/showroom');
        });


        it('should render Showroom Page when user navigates to /showroom', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Showroom Page$/);
            expect(element('ng\\:view #game-list tr:first td:first').text()).
                toMatch(/^boards$/);
            expect(element('ng\\:view #game-list tr:first td:last').text()).
                toMatch(/^jsongamelogs$/);
        });

    });

    describe('createapp', function() {

        beforeEach(function() {
            browser().navigateTo('#/createapp');
        });


        it('should render Create New App Page when user navigates to /create app', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Create New App Page$/);
        });

    });
});
