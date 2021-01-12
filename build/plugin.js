const fs = require('fs');
const path = require('path');
class MyPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyPlugin', (compilation, callback) => {
            let { chunks } = compilation.getStats().toJson();
            const fils = [];
            chunks
                .filter(item => item.entry)
                .forEach(item => {
                    const list = [];
                    item.files.forEach(temp => {
                        list.push(this.options.publicPath + temp);
                    });
                    fils.push(...list);
                });
            let str = 'module.exports =' + JSON.stringify(fils);
            fs.writeFile(this.options.ejsDir, str, err => {
                if (err) {
                    throw err;
                }
            });
            callback();
        });
    }
}

module.exports = MyPlugin;
