const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@src': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.scss', '.json'],
        modules: [path.join(__dirname, 'app'), 'node_modules']
    }
};
