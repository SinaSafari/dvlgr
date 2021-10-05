import Editor from "@/components/editor/Editor";
import { MDRenderer } from "@/components/editor/MDRenderer";
import React from "react";
import axios from "axios";

export default function X(props) {
  const { markdown } = props;

  return (
    <div className="container">
      <MDRenderer md={markdown} />
      {/* <Editor
        tags={props.createData.tags}
        categories={props.createData.categories}
      /> */}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // Did you know you can use tildes instead of backticks for code in markdown? ✨
  const markdown = `
## سلام من به تووووو یار قدییییییییمی
منم همون هوووووادار صمیمی
~~~js
console.log('It works!')
~~~

~~~swift
// label function
func someComputation(arrayOfNumbers numbers: [Int]) -> (min: Int, max: Int , sum: Int) {
    var min = numbers[0]
    var max = numbers[0]
    var sum = 0

    for num in numbers {
        if num > max {
            max = num
        } else if num < min {
            min = num
        }
        sum += num
    }

    return (min, max, sum)
}

let report = someComputation(arrayOfNumbers: [10, 9, 14, 22])
print(report.min)
print(report.max)
print(report.sum)
~~~

- [ ] hello
- [x] world



The lift coefficient <span dir="ltr">($C_L$)</span> is a dimensionless coefficient.
`;

  const { data } = await axios.get("http://localhost:3000/api/posts/create");

  console.log(data);

  return {
    props: {
      createData: data.data,
      markdown,
    },
  };
}
