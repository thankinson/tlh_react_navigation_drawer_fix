stepps to set up drawer in react native.

1. ``` npx create-expo-app AppName ```
2. ``` npm install react-navigation ```
3. ``` npm install @react-navigation/drawer ```
4. ``` npx expo install react-native-gesture-handler react- native-reanimated ```

If for some reason yu are getting an error code you need to add the bellow code to your babel.config.js

```
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@': './src',
                        'assets': './assets',
                    }
                },
            ],
            'react-native-reanimated/plugin'
        ]
    };
};``

```

then run ``` npx expo start --clear ``` this will clear your app cache and should allow the app to run