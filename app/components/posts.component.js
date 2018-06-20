import BaseComponent from './base.component';

class PostsController {
    constructor(postService) {
        this.postService = postService;
    }

    onNewPost(title, content) {
        this.posts.push({
            title: title,
            body: content
        });
    }

    $onInit() {
        this.postService.fetchPosts()
            .then(posts => this.posts = posts);
    }

    static get $inject() {
        return ['app.postService'];
    }
}

class PostsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.templateUrl = this.templateForComponent('posts');
        this.controller = PostsController;
    }
}

export default module => module.component('app.posts', PostsComponent.instance);
