function setRoutes($urlMatcherFactory, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlMatcherFactory.caseInsensitive(true);
    $urlMatcherFactory.strictMode(false);

    var states = [{
        name: 'app',
        template: '<ui-view/>',
        abstract: true
    },
    {
        name: 'app.login',
        url: '/',
        template: '<app.login></app.login>'
    },
    {
        name: 'app.profile',
        url: '/profile',
        template: '<app.main></app.main>'
    }];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });
}

setRoutes.$inject = [
    '$urlMatcherFactoryProvider',
    '$stateProvider',
    '$locationProvider'
];

export default module => module.config(setRoutes);
