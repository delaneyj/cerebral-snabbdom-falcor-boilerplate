import Controller from 'cerebral';
import Model from 'cerebral-baobab';

const model = Model({
  title: 'Loading',
  page:'about'
});

const controller = Controller(model);

export {model,controller};
