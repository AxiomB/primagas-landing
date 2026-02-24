import {
  JSXConverters,
  defaultJSXConverters
} from '@payloadcms/richtext-lexical/react'

export const JsxConverters: JSXConverters = {
  ...defaultJSXConverters,

  text: ({ node }) => {
    let classes: string = '';

    const state = (node as any).$;

    if(state) {
      if (state.color) {
        classes += state.color;
      }
    }

    const content = node.text

    let element: React.ReactNode = content

    if (node.format & 1) element = <strong key="bold">{element}</strong>
    if (node.format & 2) element = <em key="italic">{element}</em>
    if (node.format & 4) element = <u key="underline">{element}</u>

    if (Object.keys(classes).length > 0) {
      return (
        <span className={classes} key={node.version}>
          {element}
        </span>
      )
    }

    return <>{element}</>
  },
}