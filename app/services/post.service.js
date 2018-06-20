class PostService {
    constructor($http) {
        this.$http = $http;
    }

    fetchPosts() {
        return this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then(result => result.data);
    }

    static get $inject() {
        return ['$http'];
    }
}

export default module => module.service('app.postService', PostService);
