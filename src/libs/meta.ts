/**
 * @name meta.ts
 * @description メタ情報
 */

const siteInfo = {
  pipe: "｜",
  siteName: "ディズニークルーズライン",
  description:
    "ディズニー　アドベンチャー　シンガポール　トップページ。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
  url: "https://disneycruise.disney.go.com/ships/adventure/",
  images: [
    {
      url: "/ships/adventure/ogp.png",
      width: 1200,
      height: 630,
    },
  ],
};

const metaArray = {
  index: {
    title:
      "ディズニー　アドベンチャー　シンガポール　トップページ" +
      siteInfo.pipe +
      siteInfo.siteName,
    description: siteInfo.description,
    openGraph: {
      type: "website",
      title: siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: siteInfo.url,
      images: siteInfo.images,
      description: siteInfo.description,
    },
  },
  "themed-areas": {
    title: "7つのテーマエリア・客船紹介" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　7つのテーマエリア・客船紹介。船内の想像力豊かなテーマの7つのエリアを探索しながら、魔法のような冒険に出発します。各エリアには、ディズニー、マーベル、ピクサーの物語を壮大なスケールで再現した没入感あふれる体験が満載です。",
    openGraph: {
      type: "article",
      title: "7つのテーマエリア・客船紹介" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}themed-areas/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　7つのテーマエリア・客船紹介。船内の想像力豊かなテーマの7つのエリアを探索しながら、魔法のような冒険に出発します。各エリアには、ディズニー、マーベル、ピクサーの物語を壮大なスケールで再現した没入感あふれる体験が満載です。",
    },
  },
  entertainment: {
    title: "エンターテイメント" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　エンターテイメント。華やかなブロードウェイスタイルのショー、楽しいデッキパーティー、映画上映、ディズニー、ピクサー、マーベルのお気に入りの仲間たちとの忘れられない交流会など、ディズニーの魔法を体験してください。",
    openGraph: {
      type: "article",
      title: "エンターテイメント" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}entertainment/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　エンターテイメント。華やかなブロードウェイスタイルのショー、楽しいデッキパーティー、映画上映、ディズニー、ピクサー、マーベルのお気に入りの仲間たちとの忘れられない交流会など、ディズニーの魔法を体験してください。",
    },
  },
  dining: {
    title: "ダイニング" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　ダイニング。ゲストの航海中に、ディズニーならではの3つの異なるダイニング体験をお楽しみいただけます。",
    openGraph: {
      type: "article",
      title: "ダイニング" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}dining/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　ダイニング。ゲストの航海中に、ディズニーならではの3つの異なるダイニング体験をお楽しみいただけます。",
    },
  },
  accommodations: {
    title: "客室案内" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　客室案内。コンシェルジュ、ベランダ、オーシャンビュー、内側の4つのカテゴリーから、あなたにぴったりの素敵な客室をお選びいただけます。",
    openGraph: {
      type: "article",
      title: "客室案内" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}accommodations/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　客室案内。コンシェルジュ、ベランダ、オーシャンビュー、内側の4つのカテゴリーから、あなたにぴったりの素敵な客室をお選びいただけます。",
    },
  },
  "kids-clubs": {
    title: "キッズクラブ" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　キッズクラブ。3歳から10歳までのお子様は、大好きなディズニー、ピクサー、マーベルの物語にインスパイアされたテーマ空間で、愛されるキャラクターたちと触れ合いながら想像力を広げることができます。",
    openGraph: {
      type: "article",
      title: "キッズクラブ" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}kids-clubs/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　キッズクラブ。3歳から10歳までのお子様は、大好きなディズニー、ピクサー、マーベルの物語にインスパイアされたテーマ空間で、愛されるキャラクターたちと触れ合いながら想像力を広げることができます。",
    },
  },
  "spa-lounges-bar": {
    title: "大人のための施設" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　大人のための施設。スパ、サロン、フィットネスラウンジ、バッカニアバーなど。",
    openGraph: {
      type: "article",
      title: "大人のための施設" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}spa-lounges-bar/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　大人のための施設。スパ、サロン、フィットネスラウンジ、バッカニアバーなど。",
    },
  },
  concierge: {
    title: "コンシェルジュルーム" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　コンシェルジュルーム。コンシェルジュゲストとして、優先搭乗、専用コンシェルジュラウンジとサンデッキへの専用アクセス、専属チームによるおもてなしなどの特別な特典を受けられます",
    openGraph: {
      type: "article",
      title: "コンシェルジュルーム" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}concierge/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　コンシェルジュルーム。コンシェルジュゲストとして、優先搭乗、専用コンシェルジュラウンジとサンデッキへの専用アクセス、専属チームによるおもてなしなどの特別な特典を受けられます",
    },
  },
  list: {
    title: "コース一覧" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　コース一覧。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    openGraph: {
      type: "article",
      title: "コース一覧" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}list/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　コース一覧。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    },
  },
  book: {
    title: "予約" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　予約。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    openGraph: {
      type: "article",
      title: "予約" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}book/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　予約。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    },
  },
  qa: {
    title: "よくあるご質問" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　よくあるご質問。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    openGraph: {
      type: "article",
      title: "よくあるご質問	" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}qa/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　よくあるご質問。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    },
  },
  inquiry: {
    title: "お問い合わせ" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　お問い合わせ。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    openGraph: {
      type: "article",
      title: "お問い合わせ" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}inquiry/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　お問い合わせ。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    },
  },
  mailmagazine: {
    title: "メールマガジン登録" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ディズニー　アドベンチャー　シンガポール　メールマガジン登録。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    openGraph: {
      type: "article",
      title: "メールマガジン登録" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}mailmagazine/`,
      images: siteInfo.images,
      description:
        "ディズニー　アドベンチャー　シンガポール　メールマガジン登録。ディズニー・クルーズラインがシンガポールにやってきます。ワールドクラスのエンターテインメント、テーマ別のダイニング体験等を提供するディズニー・アドベンチャーでは、3泊〜5泊の航海をご用意しています。",
    },
  },
  feature: {
    title: "特集記事一覧" + siteInfo.pipe + siteInfo.siteName,
    description: "ディズニー　アドベンチャー　シンガポール　特集記事一覧。",
    openGraph: {
      type: "article",
      title: "特集記事一覧" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}feature/`,
      images: siteInfo.images,
      description: "ディズニー　アドベンチャー　シンガポール　特集記事一覧。",
    },
  },
  news: {
    title: "お知らせ" + siteInfo.pipe + siteInfo.siteName,
    description: "ディズニー　アドベンチャー　シンガポール　お知らせ。",
    openGraph: {
      type: "article",
      title: "お知らせ" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}news/`,
      images: siteInfo.images,
      description: "ディズニー　アドベンチャー　シンガポール　お知らせ。",
    },
  },
  "404": {
    title: "404 Not Found" + siteInfo.pipe + siteInfo.siteName,
    description:
      "ページが見つかりませんでした。URLが正しいか、ページが削除されていないかご確認ください。",
    openGraph: {
      type: "article",
      title: "404 Not Found" + siteInfo.pipe + siteInfo.siteName,
      siteName: siteInfo.siteName,
      url: `${siteInfo.url}/`,
      images: siteInfo.images,
      description:
        "ページが見つかりませんでした。URLが正しいか、ページが削除されていないかご確認ください。",
    },
  },
};

export default { metaArray, siteInfo };
