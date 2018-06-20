import loginComponent from './login.component';
import mainComponent from './main.component';
import postsComponent from './posts.component';
import postListComponent from './post-list.component';
import newPostComponent from './new-post.component';
import profileInfoComponent from './profile-info.component';

export default module => {
    loginComponent(module);
    mainComponent(module);
    postsComponent(module);
    postListComponent(module);
    newPostComponent(module);
    profileInfoComponent(module);
};
