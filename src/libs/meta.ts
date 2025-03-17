/**
 * @file meta.ts
 * @description メタ情報
 */

const siteInfo = {
    siteName: "ディズニークルーズライン",
    description: "サイトの説明文が入ります。",
    url: "https://disneycruise.disney.go.com/ships/adventure/",
}

const metaArray = {
    "index": {
        title: siteInfo.siteName,
        description: siteInfo.description,
        openGraph: {
            title: siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: siteInfo.description,
            url: siteInfo.url,
        },
    },
    "themed-areas": {
        title: "客船紹介・7つのテーマエリア" + " | " + siteInfo.siteName,
        description: "7つのテーマエリアを表示するページ",
        openGraph: {
            title: "客船紹介・7つのテーマエリア" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "7つのテーマエリアを表示するページ",
            url: `${siteInfo.url}themed-areas/`,
        },
    },
}

export default metaArray;