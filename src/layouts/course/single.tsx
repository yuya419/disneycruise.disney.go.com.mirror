/**
 * @name single.tsx
 * @description コース詳細を表示するページ
 */
"use client";
import Title from "@/layouts/title/title";
import PageButton from "@/components/modules/buttons/pageButton";
import { Headline } from "@/components/modules/headline/headline";
import SearchTags from "@/layouts/course/modules/searchTags";
import RoomType from "./modules/roomType";
import Schedule from "./modules/schedule";
import FilterModal from "@/layouts/course/modules/filterModal";
import "./styles/single.scss";

export default function Single() {
  // ページ内ボタンの設定
  const pageButtons = {
    1: { label: "客室タイプ", to: "type" },
    2: { label: "スケジュール", to: "schedule" },
    3: { label: "注意事項", to: "notice" },
  };

  // コース情報の型定義
  interface course {
    title: string;
    thumbnail: { src: string; w: number; h: number };
    type: {
      [key: string]: {
        name: string;
        image: { src: string; w: number; h: number };
        room: {
          [key: string]: {
            name: string;
            image: { src: string; w: number; h: number };
          };
        };
      };
    };
  }

  // スケジュールの型定義
  interface schedule {
    location: {
      [key: number]: {
        title: string;
        image: { src: string; w: number; h: number };
        point: string[];
      };
    };
  }

  // 検索クエリの型定義
  interface SearchQuery {
    stay: { [key: number]: number };
    date: string;
    people: { adult: number; child: number };
  }

  // コース情報と検索クエリの初期化
  const post: {
    courses: course | null;
    schedule: schedule | null;
    searchQuery: SearchQuery | null;
  } = { courses: null, schedule: null, searchQuery: null };

  // コース情報の設定
  post.courses = {
    title: "シンガポール発着　3泊クルーズ",
    thumbnail: {
      src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
      w: 240,
      h: 160,
    },
    type: {
      type01: {
        name: "コンシェルジュ・スイート",
        image: {
          src: "/ships/adventure/common/dummy/course-list-type01-thumbnail.jpg",
          w: 200,
          h: 133,
        },
        room: {
          room01: {
            name: "コンシェルジュロイヤルスイートオーシャンビューベランダ客室​",
            image: {
              src: "/ships/adventure/common/dummy/course-list-room-thumbnail.jpg",
              w: 120,
              h: 80,
            },
          },
          room02: {
            name: "コンシェルジュロイヤルスイートオーシャンビューベランダ客室​",
            image: {
              src: "/ships/adventure/common/dummy/course-list-room-thumbnail.jpg",
              w: 120,
              h: 80,
            },
          },
        },
      },
      type02: {
        name: "ベランダ客室",
        image: {
          src: "/ships/adventure/common/dummy/course-list-type02-thumbnail.jpg",
          w: 200,
          h: 133,
        },
        room: {
          room01: {
            name: "ダミー客室",
            image: {
              src: "/ships/adventure/common/dummy/course-list-room-thumbnail.jpg",
              w: 120,
              h: 80,
            },
          },
        },
      },
      type03: {
        name: "オーシャンビュー客室",
        image: {
          src: "/ships/adventure/common/dummy/course-list-type03-thumbnail.jpg",
          w: 200,
          h: 133,
        },
        room: {
          room01: {
            name: "ダミー客室",
            image: {
              src: "/ships/adventure/common/dummy/course-list-room-thumbnail.jpg",
              w: 120,
              h: 80,
            },
          },
        },
      },
      type04: {
        name: "内側​​​客室",
        image: {
          src: "/ships/adventure/common/dummy/course-list-type04-thumbnail.jpg",
          w: 200,
          h: 133,
        },
        room: {
          room01: {
            name: "ダミー客室",
            image: {
              src: "/ships/adventure/common/dummy/course-list-room-thumbnail.jpg",
              w: 120,
              h: 80,
            },
          },
        },
      },
    },
  };

  // スケジュール情報の設定
  post.schedule = {
    location: {
      1: {
        title: "シンガポール",
        image: {
          src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
          w: 240,
          h: 160,
        },
        point: [
          "マリーナベイの象徴的なウォーターフロントを散策",
          "ジュエル・チャンギで自然、エンターテイメント、世界クラスのショッピングを体験しましょう",
          "街の活気あるグルメシーンを探索",
        ],
      },
      2: {
        title: "航海",
        image: {
          src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
          w: 240,
          h: 160,
        },
        point: [
          "ブロードウェイ並みのミュージカルを鑑賞し、輝くプールで水遊びを楽しみましょう",
          "高級レストラン、ビュッフェ、プールサイドスナック、ルームサービスをお楽しみください",
          "子供、ティーン、トゥイーン、大人向けに設計されたユニークな会場で、他にはない楽しみを見つけましょう",
        ],
      },
      3: {
        title: "航海",
        image: {
          src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
          w: 240,
          h: 160,
        },
        point: [
          "ブロードウェイ並みのミュージカルを鑑賞し、輝くプールで水遊びを楽しみましょう",
          "高級レストラン、ビュッフェ、プールサイドスナック、ルームサービスをお楽しみください",
          "子供、ティーン、トゥイーン、大人向けに設計されたユニークな会場で、他にはない楽しみを見つけましょう",
        ],
      },
      4: {
        title: "航海",
        image: {
          src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
          w: 240,
          h: 160,
        },
        point: [
          "ブロードウェイ並みのミュージカルを鑑賞し、輝くプールで水遊びを楽しみましょう",
          "高級レストラン、ビュッフェ、プールサイドスナック、ルームサービスをお楽しみください",
          "子供、ティーン、トゥイーン、大人向けに設計されたユニークな会場で、他にはない楽しみを見つけましょう",
        ],
      },
      5: {
        title: "航海",
        image: {
          src: "/ships/adventure/common/dummy/course-list-post-eyecatch.jpg",
          w: 240,
          h: 160,
        },
        point: [
          "ブロードウェイ並みのミュージカルを鑑賞し、輝くプールで水遊びを楽しみましょう",
          "高級レストラン、ビュッフェ、プールサイドスナック、ルームサービスをお楽しみください",
          "子供、ティーン、トゥイーン、大人向けに設計されたユニークな会場で、他にはない楽しみを見つけましょう",
        ],
      },
    },
  };

  // 検索クエリの設定
  post.searchQuery = {
    stay: {
      1: 3,
    },
    date: "yyyy/mm/dd",
    people: {
      adult: 2,
      child: 1,
    },
  };

  return (
    <>
      <Title
        type="course"
        title={post.courses.title}
        image={post.courses.thumbnail.src}
      />
      <PageButton pageButton={{ column: 3, buttons: pageButtons }} />
      <section id="type" className="s-course-type">
        <div className="container">
          <div className="s-course-type__head">
            <Headline design="01" hlLevel="h2">
              客室タイプ
            </Headline>
            {post.searchQuery && <SearchTags searchQuery={post.searchQuery} />}
          </div>
          <div className="s-course-type__detail">
            <div className="detail">
              <RoomType typesArray={Object.values(post.courses.type)} />
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="s-schedule-type">
        <div className="container">
          <div className="s-schedule-type__head">
            <Headline design="01" hlLevel="h2">
              スケジュール
            </Headline>
          </div>
          <div className="s-schedule-type__detail">
            <div className="detail">
              <Schedule scheduleArray={Object.values(post.schedule.location)} />
            </div>
          </div>
        </div>
      </section>
      <section id="notice" className="s-notice-type">
        <div className="container">
          <div className="s-notice-type__head">
            <Headline design="01" hlLevel="h2">
              注意事項
            </Headline>
          </div>
          <div className="s-notice-type__detail">
            <div className="detail">
              <ul>
                <li>「子供」とは、出発日の時点で13歳未満の方を指します。</li>
                <li>
                  いずれの客室も最初の2名は、年齢に関係なく大人とみなされます。
                </li>
                <li>
                  表示されている客室料金は、予約を確実に確保するために必要な最終的な総額です。
                </li>
                <li>
                  ご予約が確定次第、ミキ・ツーリストのクルーズ運営チームが可能な限り速やかにディズニー公式確認書を送付いたします。通常1営業日以内の送付を目指しますが、手配状況により時間を要する場合がございます。
                </li>
                <li>
                  こちらのディズニー公式確認番号により、ディズニー・クルーズラインでの予約が確定したことが保証されます。
                </li>
                <li>
                  ご予約が確定した後も、お客様の個人情報（および同行者（いる場合））がディズニー
                  クルーズ
                  ラインのシステムに更新されるまでに、しばらく時間がかかる場合があります。ディズニー
                  クルーズ ラインのオペレーション
                  チームを通じて公式ディズニー確認書にお客様の詳細が更新されるまで、最大
                  (30) 営業日かかる場合があります。
                </li>
                <li>
                  情報の更新には時間がかかる場合があり、お客様の情報更新が完全に完了するまではディズニークルーズライン公式アプリ「ディズニークルーズラインナビゲーター」および「ディズニー・クルーズライン公式サイト」にログインすることができません。ご迷惑をおかけしますが、ご了承ください。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="s-cancel-type">
        <div className="container">
          <div className="s-cancel-type__head">
            <Headline design="01" hlLevel="h2">
              キャンセル料について
            </Headline>
          </div>
          <div className="s-cancel-type__detail">
            <div className="detail">
              <table>
                <thead>
                  <tr>
                    <th>取消日</th>
                    <th>取消料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>出発日の前日から起算して90日以上前</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>出発日の前日から起算して89日前～45日前迄</td>
                    <td>デポジット額</td>
                  </tr>
                  <tr>
                    <td>出発日の前日から起算して44日前～30日前迄</td>
                    <td>クルーズ代金の50％</td>
                  </tr>
                  <tr>
                    <td>出発日の前日から起算して29日前～15日前迄</td>
                    <td>クルーズ代金の75％</td>
                  </tr>
                  <tr>
                    <td>出発日の前日から起算して14日前以降</td>
                    <td>クルーズ代金の100％</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <FilterModal />
    </>
  );
}
