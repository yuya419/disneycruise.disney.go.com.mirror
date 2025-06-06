/**
 * @name block.tsx
 * @description フォームブロック
 */
"use client";
import { Headline } from "@/components/modules/headline/headline";
import "./styles/block.scss";

export default function Block(props: {
  id?: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="form-block">
      <div id={props.id} className="form-block-anchor" />
      {props.title && (
        <Headline design="01" hlLevel="h2">
          {props.title}
        </Headline>
      )}
      {props.children}
    </div>
  );
}
