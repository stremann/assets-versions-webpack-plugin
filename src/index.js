const replace = require('replace');

function AssetsVersions(options) {
    this.config = options;
}

AssetsVersions.prototype.apply = function resolve(compiler) {
    const paths = {
        index: this.config.indexPath,
        css: this.config.cssPath,
        js: this.config.jsPath
    };
    const patterns = {
        cssJs: /(\.css(?!\/)|\.js(?!\/))(\?_t=\d+)?/ig,
        img: /(\.png|\.jpg|\.jpeg|\.gif)(\?_t=\d+)?/ig,
        replace: `$1?_t=${Math.floor(new Date().getTime() / 1000)}`
    };
    const files = [
        {
            path: paths.index,
            pattern: patterns.cssJs
        },
        {
            path: paths.css,
            pattern: patterns.img
        },
        {
            path: paths.js,
            pattern: patterns.img
        }
    ];

    compiler.plugin('done', () => {
        files.forEach(file => {
            if (!file.path) {
                return;
            }
            replace({
                regex: file.pattern,
                replacement: patterns.replace,
                paths: [
                    file.path
                ],
                recursive: false,
                silent: false
            });
        });
    });
};

module.exports = AssetsVersions;
