/**
 * @file helper.ts
 * @description ヘルパー関数
 */

function helper() {

    const getImagePath = (path: string) => {
        return `/ships/adventure/${path}`;
    };

    return { getImagePath }
}

export default helper;