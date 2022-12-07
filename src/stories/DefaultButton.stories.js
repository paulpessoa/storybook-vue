import DefaultButton from '../components/DefaultButton';

export default {
  title: 'Example/Botoes',
  component: DefaultButton, 
  decorators: [ () => ({ template: '<div style="margin: 3em; background: yellow"><story/></div>' }) ],
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    click: { action: 'clicked' },
  },
}

export const simple = () => ({
  render() {
    return <DefaultButton text="Simples" />;
  },
});

simple.story = {name: 'Simples Demáis'};


export const simpleWithTemplate = () => ({
  components: { DefaultButton },
  template: '<DefaultButton text="simples com template" />',
});


export const withText = () => ({
  render() {
    return <DefaultButton text="Apenas um texto" />;
  }
});

export const withTooLong = () => ({
  render() {
    return <DefaultButton text="Texto muito longo" />;
  }
});