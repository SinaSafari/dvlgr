import React, { useReducer } from "react";
import { slugify } from "@/lib/utils/slugify";

const Editor = () => {
  // constants
  const C = {
    SET_TAB: "SET_TAB",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR",
    SET_FORM_DATA: "SET_FORM_DATA",
    SET_FORM_TITLE: "SET_FORM_TITLE",
    SET_FORM_SLUG: "SET_FORM_SLUG",
    SET_FORM_HERO_IMG: "SET_FORM_HERO_IMG",
    SET_FORM_CONTENT: "SET_FORM_CONTENT",
    SET_FROM_TAGS: "SET_FROM_TAGS",
    SET_FROM_CATEGORY: "SET_FROM_CATEGORY",
    SET_FROM_IS_FEATURED: "SET_FROM_IS_FEATURED",
  };

  /**
   * initail state for reducer
   *
   * @type {import('./Editor').EditorState}
   */
  const intialState = {
    loading: false,
    tab: "editor",
    error: [],
    form: {
      title: "",
      slug: "",
      heroImg: "",
      content: "",
      tags: [],
      category: "",
      isFeatured: false,
    },
  };

  /**
   *
   * @param {import('./Editor').EditorState} state
   * @param {import('./Editor').Action} action
   * @returns {import('./Editor').EditorState}
   */
  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case C.SET_TAB:
        return { ...state, tab: payload };
      case C.SET_LOADING:
        return { ...state, loading: true };
      case C.SET_ERROR:
        return { ...state, error: state.error.concat(payload) };
      case C.SET_FORM_TITLE:
        return {
          ...state,
          form: { ...state.form, title: payload, slug: slugify(payload) },
        };
      case C.SET_FORM_SLUG:
        return { ...state, form: { ...state.form, slug: payload } };
      case C.SET_FORM_HERO_IMG:
        return { ...state, form: { ...state.form, heroImg: payload } };
      case C.SET_FORM_CONTENT:
        return { ...state, form: { ...state.form, content: payload } };
      case C.SET_FROM_TAGS:
        return {
          ...state,
          form: { ...state.form, tags: state.form.tags.concat(payload) },
        };
      case C.SET_FROM_CATEGORY:
        return { ...state, form: { ...state.form, category: payload } };
      case C.SET_FROM_IS_FEATURED:
        return { ...state, form: { ...state.form, isFeatured: payload } };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const onSubmit = async () => {
    try {
      const fd = new FormData();
    } catch (err) {
      console.log("form submission error: ", err);
    }
  };

  return (
    <div>
      <div>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div>
      <div>
        <input
          type="text"
          value={state.form.title}
          placeholder="title"
          onChange={(e) =>
            dispatch({ type: C.SET_FORM_TITLE, payload: e.target.value })
          }
        />
      </div>

      <div>
        <input
          type="text"
          value={state.form.slug}
          placeholder="slug"
          onChange={(e) =>
            dispatch({ type: C.SET_FORM_TITLE, payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Editor;
