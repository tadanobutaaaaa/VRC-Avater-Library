import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

// デフォルトのテーマ設定
const defaultTheme = extendTheme({
    config,
});

// カスタムフォント設定
const customTheme = extendTheme({
    fonts: {
        heading: "New Amsterdam, sans-serif",
    },
});

// テーマをマージ
const theme = extendTheme({
    ...defaultTheme,
    ...customTheme,
});

export default theme;
