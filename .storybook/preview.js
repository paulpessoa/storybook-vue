// import { addParameters } from "@storybook/vue"
// import { addDecorator } from "@storybook/vue"
import { withA11y } from "@storybook/addon-a11y"
import { addDecorator } from "@storybook/vue"
// addParameters({
//   options:{
//     storySort: (aArray, bArray) => {
//         const a = aArray[1];
//         const b = bArray[1];
//         return a.name > b.name ? 1 : -1;
//       }
//   }
// })


// addDecorator(() => "<div style='margin: 4em; background: blue'><story/></div>")


addDecorator(withA11y)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

