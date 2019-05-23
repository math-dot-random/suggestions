import Enyzme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enyzme.configure({ adapter: new Adapter()})
import React from 'react'
import {shallow,mount,render} from 'enzyme'
import App from '../client/src/components/App.jsx'


describe('App component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).exists ()).toBe(true);
  });

  describe('App component', () => {
    it('render component <App />', () => {
      const component = shallow(<App />);
      expect(component).toHaveLength(1);
    });
  });

  describe('it renders props correctly', () => {
    it('render 1 <App /> component', () => {
      const component = shallow(<App name="main" />);
      expect(component.instance().props.name).toBe('main');
    });
  });
  
})


