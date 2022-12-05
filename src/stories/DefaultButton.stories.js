import DefaultButton from '../components/DefaultButton';

export default {
  title: 'Example/Botoes/Default',
  component: DefaultButton, 
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    click: { action: 'clicked' },
  },
}

export const Default = () => ({
  components: { DefaultButton },
  template: '<DefaultButton :disabled="disabled" :text="text" :backgroundColor="backgroundColor" />',  
})

// export const Default = () => ({
//   render() {
//     return <DefaultButton text="ssss"/>
//   }  
// })





  