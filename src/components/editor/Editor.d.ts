import React from "react";

export type Dispatcher = React.Dispatch<any>;
export type Action = { type: string; payload: any };
export type ErrorType = { type: string; message: string };
export type TagType = any;
export type TabType = "editor" | "preview";
export type FromType = {
  title: string;
  slug: string;
  heroImg: string | any;
  content: string;
  tags: Array<TagType>;
  category: string;
  isFeatured: boolean;
};
export type EditorState = {
  loading: boolean;
  tab: TabType;
  error: Array<ErrorType>;
  form: FromType;
};
