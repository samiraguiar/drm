import BaseComponent from './base.component';
import './new-post.component.scss';

class NewPostController {
    constructor($scope) {
        this.$scope = $scope;
    }

    addNewPost() {
        if (!this.$scope.postform.$valid) {
            return;
        }

        this.$scope.postform.$setPristine();

        this.onNewPost({ title: this.title, content: this.content});
        this.title = '';
        this.content = '';
    }

    static get $inject() {
        return ['$scope'];
    }
}

class NewPostComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('new-post');
        this.controller = NewPostController;
        this.bindings = {
            onNewPost: '&'
        }
    }
}

export default module => module.component('app.newPost', NewPostComponent.instance);
