import BaseComponent from './base.component';

class LoginComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('login');
    }
}

export default module => module.component('app.login', LoginComponent.instance);
