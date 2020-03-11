import * as path from "path";
import * as webpack from "webpack";
// tslint:disable-next-line:no-var-requires
require("node-env-webpack-plugin");
// tslint:disable-next-line:no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// tslint:disable-next-line:no-var-requires
const { CheckerPlugin } = require("awesome-typescript-loader");

type Mode = "development" | "production" | "none";

const env = process.env["NODE_ENV"];

const mode = env as Mode;

const entry: () => string[] = () => {
    console.log("ENV IS: " + env);
    const entries = ["./src/index.tsx"];
    if (env === "production") {
        return entries;
    } else {
        return [
            ...entries,
            "webpack-dev-server/client?http://localhost:8050",
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint
            "webpack/hot/only-dev-server",
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
        ];
    }
};

const output: webpack.Output = {
    filename: "auction-app.js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/",
};

const devtool = "source-map";

const devServer: any = {
    inline: true,
    port: 8050,
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, "src"),
    publicPath: "/",
    // match the output `publicPath`
};

const resolve: webpack.Resolve = {
    extensions: [".ts", ".tsx", ".js", ".json"],
};

const module: webpack.Module = {
    rules: [
        // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
        {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
        },

        // All files with a ".css" extension will be handled by "css-loader".
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
            ],
            // exclude: /node_modules/,
        },

        // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader",
        },

        // All images with a ".jpe?g", ".png", ".gif" or ".svg" extension will be handled by "file-loader".
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader",
            options: {
                name: "[path][name].[ext]",
            },
        },
    ],
};

const plugins: webpack.Plugin[] = [
    new MiniCssExtractPlugin({
        filename: "app.css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CheckerPlugin(),
];

const materialUiExternal: (context: any, request: string, callback: (error?: any, result?: any) => void) => any = (context, request, callback) => {
    if (/@material-ui\/core\/*/.test(request)) {
        const parts = request.split("/");
        let result;
        if (parts.length >= 3) {
            result = `window["MaterialUI"].${parts[parts.length - 1]}`;
        } else {
            result = `window["MaterialUI"]`;
        }
        return callback(null, "root " + result);
    }
    callback();
};

// When importing a module whose path matches one of the following, just
// assume a corresponding global variable exists and use that instead.
// This is important because it allows us to avoid bundling all of our
// dependencies, which allows browsers to cache those libraries between builds.
const externals: webpack.ExternalsElement[] = [
    {
        "react": "React",
        "React": "React",
        "redux": "Redux",
        "react-redux": "ReactRedux",
        "react-router": "ReactRouter",
        "redux-saga": "ReduxSaga",
        "redux-saga/effects": "ReduxSaga.effects",
    },
    materialUiExternal,
];

const config: webpack.Configuration = {
    devServer,
    devtool,
    entry,
    externals,
    module,
    output,
    resolve,
    plugins,
    mode,
};

export default config;
