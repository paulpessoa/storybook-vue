export default {
  title: 'Example/DefaultButton'
}

export const vueComponent = () => ({
  template: '<h2>Default Button</h2>'
})

export const pureTemplate = () => '<h2>Default Button</h2>'

export const renderFunctionJSX = () => ({
  render() {
    return <h2>Default Button</h2>
  }
})