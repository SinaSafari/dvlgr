import React, { useReducer } from "react";
import { slugify } from "@/lib/utils/slugify";
import { Input, Button, Select, Checkbox } from "antd";
import axios from "axios";
import { useRouter } from "next/router";

const Editor = ({ tags, categories }) => {
  const router = useRouter();
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
    SET_FORM_TAGS: "SET_FORM_TAGS",
    SET_FORM_CATEGORY: "SET_FORM_CATEGORY",
    SET_FORM_IS_FEATURED: "SET_FORM_IS_FEATURED",
    SET_FORM_STATUS: "SET_FORM_STATUS",
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
      status: "draft",
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
        return { ...state, loading: payload };
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
      case C.SET_FORM_TAGS:
        return {
          ...state,
          form: { ...state.form, tags: payload },
        };
      case C.SET_FORM_CATEGORY:
        return { ...state, form: { ...state.form, category: payload } };
      case C.SET_FORM_IS_FEATURED:
        return { ...state, form: { ...state.form, isFeatured: payload } };
      case C.SET_FORM_STATUS:
        return { ...state, form: { ...state.form, status: payload } };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: C.SET_LOADING, payload: true });
      const fd = new FormData();
      fd.append("title", state.form.title);
      fd.append("slug", state.form.slug);
      fd.append("content", state.form.content);
      fd.append("tags", JSON.stringify(state.form.tags));
      fd.append("category", state.form.category);
      fd.append("isFeatured", state.form.isFeatured);

      const { data } = await axios.post(
        "http://localhost:3000/api/posts/create",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(data);
      dispatch({ type: C.SET_LOADING, payload: false });
      // TODO: redirect to list of articles.
      router.push("/");
    } catch (err) {
      dispatch({ type: C.SET_LOADING, payload: false });
      // TODO: add toast error or something
      console.log("form submission error: ", err);
    }
  };

  return (
    <div className="row">
      {/* <div>
        <pre>{JSON.stringify(state, null, 4)}</pre>
      </div> */}
      <div className="col-md-6 m-auto ">
        <div className="mb-5">
          <Input
            type="text"
            value={state.form.title}
            placeholder="عنوان مقاله"
            onChange={(e) =>
              dispatch({ type: C.SET_FORM_TITLE, payload: e.target.value })
            }
          />
        </div>

        <div className="mb-5">
          <small className="text-muted">
            اسلاگ از روی عنوان ساخته میشه. ولی اگر دوست داشتی تغییرش بدی یا نیاز
            هست، خب میتونی انجامش بدی!
          </small>
          <Input
            type="text"
            value={state.form.slug}
            placeholder="اسلاگ"
            onChange={(e) =>
              dispatch({ type: C.SET_FORM_TITLE, payload: e.target.value })
            }
          />
        </div>

        <div className="mb-5">
          <Input.TextArea
            rows={4}
            value={state.form.content}
            onChange={(e) =>
              dispatch({ type: C.SET_FORM_CONTENT, payload: e.target.value })
            }
            placeholder="متن اصلی مقاله - به مارک دان!"
          ></Input.TextArea>
        </div>

        <div className="mb-5">
          <Select
            mode="multiple"
            style={{ width: "50%" }}
            onChange={(value) =>
              dispatch({ type: C.SET_FORM_TAGS, payload: value })
            }
            placeholder="تگ ها"
          >
            {tags.map((i) => {
              return (
                <Select.Option key={i.title} value={i.id}>
                  {i.title}
                </Select.Option>
              );
            })}
          </Select>
        </div>

        <div className="mb-5">
          <Select
            style={{ width: "50%" }}
            placeholder="دسته بندی"
            onChange={(value) =>
              dispatch({ type: C.SET_FORM_CATEGORY, payload: value })
            }
          >
            {categories.map((i) => {
              return (
                <Select.Option key={i.title} value={i.id}>
                  {i.title}
                </Select.Option>
              );
            })}
          </Select>
        </div>

        <div className="mb-5">
          <Checkbox
            checked={state.form.isFeatured}
            onChange={(e) =>
              dispatch({
                type: C.SET_FORM_IS_FEATURED,
                payload: e.target.checked,
              })
            }
          >
            مقاله برگزیده؟
          </Checkbox>
        </div>

        <div className="mb-5">
          <Select
            style={{ width: "20%" }}
            placeholder="وضعیت مقاله"
            onChange={(value) =>
              dispatch({ type: C.SET_FORM_STATUS, payload: value })
            }
            defaultValue={state.form.status}
          >
            <Select.Option value={"draft"}>پیش نویس</Select.Option>
            <Select.Option value={"published"}>منتشر شده</Select.Option>
            <Select.Option value={"to_edit"}>برای ویرایش</Select.Option>
          </Select>
        </div>

        <div>
          <Button
            type="primary"
            onClick={submitHandler}
            loading={state.loading}
          >
            ثبت
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
