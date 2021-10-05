import { parseCookie } from "@/lib/http/cookie";
import { useState } from "react";
import { Input, Button, Select } from "antd";
import httpClient from "@/lib/http/httpClient";
import axios from "axios";

export default function AdminDashboardPannel(props) {
  /**
   * data for creation:
   *  - title
   *  - hero background
   *  - content
   *  - tags
   *  - status
   *  - is featured
   *  - category
   */
  const { TextArea } = Input;

  const [formState, setFormState] = useState({
    title: "",
    conten: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formState.title);
    formData.append("content", formState.conten);
    console.log(formData.values());
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="title"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />

        <Input
          type="text"
          placeholder="slug"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />
        <TextArea
          rows={4}
          placeholder="content"
          value={formState.content}
          onChange={(e) =>
            setFormState({ ...formState, content: e.target.value })
          }
        />
        <Select defaultValue="tags">
          <Select.Option value="tags" selected disabled={true}>
            tags
          </Select.Option>
          {props.pageData.tags.map((i) => {
            return (
              <Select.Option key={i.title} value={i.title}>
                {i.title}
              </Select.Option>
            );
          })}
        </Select>
        <Select defaultValue="categories">
          <Select.Option value="categories" selected disabled={true}>
            categories
          </Select.Option>
          {props.pageData.categories.map((i) => {
            return (
              <Select.Option key={i.name} value={i.name}>
                {i.title}
              </Select.Option>
            );
          })}
        </Select>
        <Button type="primary" htmlType="submit">
          Sumbit
        </Button>
        {/* <input type="submit" value="submit" /> */}
      </form>
    </>
  );
}

/**
 *
 * @param {import('next').GetServerSidePropsContext} ctx
 * @returns {import('next').GetServerSidePropsResult}
 */
export async function getServerSideProps(ctx) {
  const { data } = await axios.get("http://localhost:3000/api/posts/create");
  console.log(data);
  //   const { req } = ctx;
  //   const { token } = parseCookie(req);
  //   if (!token) {
  //     return {
  //       redirect: {
  //         destination: "/_/ctrl_login",
  //       },
  //     };
  //   }
  return {
    props: {
      pageData: data.data,
    },
  };
}
