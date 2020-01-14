const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //webpack 생성 할 번들 모드를 설정하는 부분입니다. development로 설정하였습니다.
    /* 이 부분은 entry와 output의 기본값으로 생략 가능합니다.
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }, */
    module: {
        rules: [ //module.rules : loader를 정의하는 부분입니다. babel-loader와 style-loader, css-loader을 사용하여 설정하였습니다.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // babel-loader의 options : presets로 @babel/preset-env를 설정하여,
                    // babel에서 미리 정의해둔 환경으로 ES6에서 ES5로 변환합니다. 이 부분이 정의되어 있지 않다면 ES6에서 ES5로 정상적으로 변환되지 않습니다.
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    //plugins : plugin들을 설정하는 부분입니다. HtmlWebPackPlugin을 사용하였습니다.
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', // HtmlWebPackPlugin의 template : 복사하는 파일의 경로를 나타냅니다.
            // HtmlWebPackPlugin의 filename : template의 파일을 붙여넣을 파일의 경로를 나타냅니다.
            // 즉 template에서 filename으로 번들 된 파일이 <script />로 추가된 html 파일이 복사됩니다.
            // ./src/index.html 파일이 ./dist/index.html로 복사됩니다,
            filename: './index.html'
        })
    ]
};