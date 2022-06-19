import Counter from './Counter.svelte';

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: {
    count: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: Counter,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  count: 0,
};

export const StartWith100 = Template.bind({});
StartWith100.storyName = 'Start count with 100'
StartWith100.args = {
  count: 100,
};
