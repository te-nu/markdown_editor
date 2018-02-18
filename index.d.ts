declare module "*.vue" {
    import Vue from 'vue'
    // export default typeof Vue
}

declare module "*.pug" {
    const content: string;
    export default content;
}

declare module "*.html" {
    const content: string;
    export default content;
}

declare module "*.css" {
    const content: string;
    export default content;
}