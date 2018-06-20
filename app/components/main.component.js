import BaseComponent from './base.component';
import './main.component.scss';

class MainComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('main');
    }
}

export default module => module.component('app.main', MainComponent.instance);
