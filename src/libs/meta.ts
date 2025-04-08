/**
 * @name meta.ts
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
    "list": {
        title: "コース一覧	" + " | " + siteInfo.siteName,
        description: "コース一覧	を表示するページ",
        openGraph: {
            title: "コース一覧	" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "コース一覧	を表示するページ",
            url: `${siteInfo.url}list/`,
        },
    },
    "detail": {
        title: "コース詳細	" + " | " + siteInfo.siteName,
        description: "コース詳細	を表示するページ",
        openGraph: {
            title: "コース詳細	" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "コース詳細	を表示するページ",
            url: `${siteInfo.url}list//detail/`,
        },
    },
}

export default metaArray;