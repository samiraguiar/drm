import './app.scss';

import angular from 'angular';
import '@uirouter/angularjs';
import 'bootstrap';

import configRoutes from './app.router';
import configComponents from './components/components.config';
import configServices from './services/services.config';

const app = angular.module('app', ['ui.router']);
configRoutes(app);
configComponents(app);
configServices(app);

angular.bootstrap(document.getElementsByTagName('body'), [app.name]);
