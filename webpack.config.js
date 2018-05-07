const path = require('path');

module.exports = {
    entry: { 
		//vendor:['knockout', 'jquery', 'lodash'],
		index: './src/index.ts',
		iocexample:'./src/iocexample.ts',
		devxexample:"./src/devxexample.ts"
	},
	//devtool: 'inline-source-map',
	devServer: {
      //contentBase: path.resolve(__dirname, "dist"),
      hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),


    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
		   {
			 test: /\.(woff|woff2|eot|ttf|otf)$/,
			 use: [
			   'file-loader'
			 ]
			},
			
		  {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
		   {
			 test: /\.xml$/,
			 use: [
			   'xml-loader'
			 ]
       },
	   {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }



			
        ]
    },
 resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },


};