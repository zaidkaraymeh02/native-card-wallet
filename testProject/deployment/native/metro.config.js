
const configUtils = require("C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native/metro-config/dist");
const path = require("path");

const metroConfig = {
    watchFolders: [
        path.resolve(__dirname, "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/theme"),
        path.resolve(__dirname, "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/javascriptsource"),
        path.resolve(__dirname, "C:/Users/zf_karaymeh/Projects/nativeCardWallet/testProject/themesource"),
        path.resolve(__dirname, "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules"),
    ],
    resolver: {
        useWatchman: true,
        platforms: ["ios", "android"],
        sourceExts: ["js", "jsx", "ts", "tsx", "cjs", "mjs", "json", "js_commonjs-exports", "js_commonjs-module"],
        extraNodeModules: {
            "@babel/runtime": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@babel/runtime",
            "big.js": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/big.js",
            "react": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react",
            "react-dom": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-dom",
            "react-native-gesture-handler": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-gesture-handler",
            "react-native": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native",
            "react-native-device-info": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-device-info",
            "react-native-material-menu": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-material-menu",
            "@react-navigation/bottom-tabs": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-navigation/bottom-tabs",
            "@react-navigation/core": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-navigation/core",
            "@react-navigation/drawer": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-navigation/drawer",
            "@react-navigation/native": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-navigation/native",
            "@react-navigation/stack": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-navigation/stack",
            "react-native-svg": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-svg",
            "react-native-tab-view": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-tab-view",
            "react-native-vector-icons": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-vector-icons",
            "react-native-fast-image": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-fast-image",
            "react-native-screens": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-screens",
            "react-native-localize": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-localize",
            "react-native-reanimated": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-reanimated",
            "react-native-safe-area-context": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/react-native-safe-area-context",
            "@react-native-async-storage/async-storage": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native-async-storage/async-storage",
            "@react-native-community/datetimepicker": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native-community/datetimepicker",
            "@react-native-masked-view/masked-view": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native-masked-view/masked-view",
            "eventemitter3": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/eventemitter3",
            "@react-native-picker/picker": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native-picker/picker",
            "deprecated-react-native-prop-types": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/deprecated-react-native-prop-types",
            "metro-file-map": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/metro-file-map",
            "@react-native/metro-config": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@react-native/metro-config",
            "@rollup/plugin-alias": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/@rollup/plugin-alias",
            "mendix": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/mendix",
            "mx-global": "C:/Program Files/Mendix/10.18.1.55792/modeler/tools/node/node_modules/mx-global"
        }
    },
    cacheVersion: "55792",
};

module.exports = configUtils.mergeConfig(configUtils.getDefaultConfig(__dirname), metroConfig);
