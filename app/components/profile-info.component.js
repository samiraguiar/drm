import BaseComponent from './base.component';
import './profile-info.component.scss';

class ProfileInfoComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('profile-info');
        this.bindings = {
            posts: '<'
        };
    }
}

export default module => module.component('app.profileInfo', ProfileInfoComponent.instance);
