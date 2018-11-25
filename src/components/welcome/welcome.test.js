import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './index';
import ReactDOM from "react-dom";


it('renders the Link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Welcome />, div);
  ReactDOM.unmountComponentAtNode(div);
  });

