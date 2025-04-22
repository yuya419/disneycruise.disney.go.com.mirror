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
    "qa": {
        title: "よくあるご質問" + " | " + siteInfo.siteName,
        description: "よくあるご質問を表示するページ",
        openGraph: {
            title: "よくあるご質問	" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "よくあるご質問を表示するページ",
            url: `${siteInfo.url}qa/`,
        },
    },
    "list": {
        title: "コース一覧" + " | " + siteInfo.siteName,
        description: "コース一覧を表示するページ",
        openGraph: {
            title: "コース一覧" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "コース一覧を表示するページ",
            url: `${siteInfo.url}list/`,
        },
    },
    "list-detail": {
        title: "シンガポール発着　3泊クルーズ" + " | " + siteInfo.siteName,
        description: "コース詳細を表示するページ",
        openGraph: {
            title: "シンガポール発着　3泊クルーズ" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "コース詳細を表示するページ",
            url: `${siteInfo.url}list/detail/`,
        },
    },
    "feature": {
        title: "特集一覧" + " | " + siteInfo.siteName,
        description: "特集一覧を表示するページ",
        openGraph: {
            title: "特集一覧" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "特集一覧を表示するページ",
            url: `${siteInfo.url}feature/`,
        },
    },
    "feature-detail": {
        title: "特集詳細" + " | " + siteInfo.siteName,
        description: "特集詳細を表示するページ",
        openGraph: {
            title: "特集詳細" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "特集詳細を表示するページ",
            url: `${siteInfo.url}feature/detail/`,
        },
    },
    "news": {
        title: "新着情報一覧" + " | " + siteInfo.siteName,
        description: "新着情報一覧を表示するページ",
        openGraph: {
            title: "新着情報一覧" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "新着情報一覧を表示するページ",
            url: `${siteInfo.url}news/`,
        },
    },
    "news-detail": {
        title: "新着情報詳細" + " | " + siteInfo.siteName,
        description: "新着情報詳細を表示するページ",
        openGraph: {
            title: "新着情報詳細" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "新着情報詳細を表示するページ",
            url: `${siteInfo.url}news/detail/`,
        },
    },
    "book": {
        title: "予約申し込み" + " | " + siteInfo.siteName,
        description: "予約申し込みを表示するページ",
        openGraph: {
            title: "予約申し込み" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "予約申し込みを表示するページ",
            url: `${siteInfo.url}book/`,
        },
    },
    "inquiry": {
        title: "お問い合わせ" + " | " + siteInfo.siteName,
        description: "お問い合わせを表示するページ",
        openGraph: {
            title: "お問い合わせ" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "お問い合わせを表示するページ",
            url: `${siteInfo.url}inquiry/`,
        },
    },
    "mailmagazine": {
        title: "メールマガジン登録" + " | " + siteInfo.siteName,
        description: "メールマガジン登録を表示するページ",
        openGraph: {
            title: "メールマガジン登録" + " | " + siteInfo.siteName,
            siteName: siteInfo.siteName,
            description: "メールマガジン登録を表示するページ",
            url: `${siteInfo.url}mailmagazine/`,
        },
    },
}

export default metaArray;