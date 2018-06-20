import BaseComponent from './base.component';
import './post-list.component.scss';

class PostListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('post-list');
        this.bindings = {
            posts: '<'
        };
    }
}

export default module => module.component('app.postList', PostListComponent.instance);
