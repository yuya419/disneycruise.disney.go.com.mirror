/**
 * @name Container.tsx
 * @description コンテナ
 */

import "./styles/container.scss";

export default function Container(props: { propaty: string }, { children }: { children: React.ReactNode }) {

    let style = {}

    return (
        <div className="container">
            {children}
        </div>
    )
}