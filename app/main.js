import {controller,model} from './controller';
import {Component,render} from 'cerebral-snabbdom';
import FalcorModule from 'cerebral-falcor-module';

controller.register({
  falcor: FalcorModule({
    model,
    source: '/model.json'
  })
});

controller.signal('getTitle', [
  [
    ({output,services})=> {
      services.falcor.get(['title']).then(response=> output(response.json)).catch(response=> output.error);
    }
  ]
]);

const pages = {
  about: <div>This is controlled via local state, falcor shouldn't stomp the 'page' value</div>,
  undefined: <div>If you see this page state in baobab got stomped on. :(</div>
};

const App = Component(({state,signals}) => {
  const {title,page} = state;
  const appMounted = vnode => signals.getTitle();
  const pageContents = pages[page];

  return (
    <div hook-insert={appMounted}>
      <h1>{title}</h1>
      <div>
        <h4>page contents</h4>
        <div>{pageContents}</div>
      </div>
    </div>
  );
});

render(() => <App/>, document.querySelector('#app'), controller);
