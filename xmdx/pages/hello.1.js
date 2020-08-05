import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Content from "../docs/hello.md"

export default function Page() {
  return (
    <MDXProvider components={components}>
      <Content />
    </MDXProvider>
  )
}

const components = {
  h1: props => (
    <h1 style={{ background: "tomato" }} {...props} />
  ),
}
