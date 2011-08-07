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
        it('should redirect to #/dashboard when location hash/fragment is not in navigation bar', function() {
            expect(browser().location().hash()).toBe("/dashboard");
        });
        it('should redirect to #/dashboard when click menu link of Dashboard', function() {
            element('.menu li:first a').click();
            expect(browser().location().hash()).toBe("/dashboard");
        });
        it('should redirect to #/createapp when click menu link of Create New App', function() {
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
            expect(element('.menu li:nth-child(1)').text()).toMatch(/^Dashboard$/);
        });
        it('should have my apps as second menu item', function(){
            expect(element('.menu li:nth-child(2)').text()).toMatch(/^My Apps$/);
        });
        it('should have tournaments as third menu item', function(){
            expect(element('.menu li:nth-child(3)').text()).toMatch(/^Tournaments$/);
        });
        it('should have showroom as forth menu item', function(){
            expect(element('.menu li:nth-child(4)').text()).toMatch(/^Showroom$/);
        });
        it('should have create new app as last menu item', function(){
            expect(element('.menu li:nth-child(5)').text()).toMatch(/^Create New App$/);
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
            expect(element('ng\\:view h2').count()).toBe(3);
        });

        it('should display competition information', function() {
            expect(element('ng\\:view h2:first').text()).
            toMatch(/^Competitions:$/);
            expect(element('ng\\:view .competitions tr:first th:nth-child(1)').text()).
            toMatch(/^Name$/);
            expect(element('ng\\:view .competitions tr:first th:nth-child(2)').text()).
            toMatch(/^Owner$/);
            expect(element('ng\\:view .competitions tr:first th:nth-child(3)').text()).
            toMatch(/^key$/);
        });

        it('should display registered apps information', function() {
            expect(element('ng\\:view h2:nth-child(6)').text()).
            toMatch(/^Registered Apps:$/);
            expect(element('ng\\:view .apps tr:first th:nth-child(1)').text()).
            toMatch(/^Name$/);
            expect(element('ng\\:view .apps tr:first th:nth-child(2)').text()).
            toMatch(/^url$/);
        });

        it('should display supported games information', function() {
            expect(element('ng\\:view h2:last').text()).
            toMatch(/^Supported Games:$/);
            expect(element('ng\\:view .game_types tr:first th:nth-child(1)').text()).
            toMatch(/^Name$/);
            expect(element('ng\\:view .game_types tr:first th:nth-child(2)').text()).
            toMatch(/^Referee$/);
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
            browser().navigateTo('#/tournaments/');
        });

        it('should render Tournaments Page when user navigates to /tournaments', function() {
            expect(element('ng\\:view h1:first').text()).
            toMatch(/^Tournaments Page$/);
        });

        it('should display view tournaments heat details link', function() {
            expect(element('ng\\:view #tournament-list tr:first td:nth-child(5)').text()).
            toMatch(/^ View $/);
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
                toMatch(/^name$/);
            expect(element('ng\\:view #game-list tr:first td:last').text()).
                toMatch(/^key$/);
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
