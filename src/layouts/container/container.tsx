/**
 * @name Container.tsx
 * @description コンテナ
 */

import "./styles/container.scss";

function HasAsideContainer({ children }: { children: React.ReactNode }) {
  return <div className="l-has-aside-container">{children}</div>;
}

export { HasAsideContainer };
