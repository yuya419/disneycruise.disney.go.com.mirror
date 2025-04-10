/**
 * @name SearchTags.tsx
 * @description 検索クエリのタグを表示するコンポーネント
 */
"use client";
import "./styles/searchTags.scss";

const queryUnits = {
    stay: "宿泊数 : ",
    date: "出発日 : 　",
    people: "",
}

export default function SearchTags({ searchQuery }: { searchQuery: any }) {
    return (
        <div className="m-search-tags">
            {
                Object.entries(queryUnits)
                    .filter(([key]) => {
                        const value = searchQuery[key as keyof typeof searchQuery];
                        if (typeof value === "object") {
                            return Object.values(value).some(v => v);
                        }
                        return value;
                    })
                    .map(([key, unit]) => {
                        const value = searchQuery[key as keyof typeof searchQuery];
                        let displayValue;

                        if (key === "stay" && typeof value === "object") {
                            displayValue = unit + Object.values(value).join("泊/") + "泊";
                        } else if (key === "people" && typeof value === "object") {
                            const isPeopleQuery = (val: any): val is { adult: number; child: number } =>
                                typeof val === "object" && "adult" in val && "child" in val;

                            const adultText = isPeopleQuery(value) && value.adult ? `大人${value.adult}名` : "";
                            const childText = isPeopleQuery(value) && value.child ? `子供${value.child}名` : "";
                            displayValue = [adultText, childText].filter(Boolean).join(" / ");
                        } else {
                            displayValue = unit.includes("　") ? unit.replace("　", ` ${value}`) : `${value}${unit}`;
                        }

                        return (
                            <span key={key} className="tag">
                                {displayValue}
                            </span>
                        );
                    })
            }
        </div>
    )
}
