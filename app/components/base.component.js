export default class BaseComponent {
    templateForComponent(componentName) {
        return `/app/components/${componentName}.component.html`;
    }

    static get instance() {
        return new this();
    }
}
