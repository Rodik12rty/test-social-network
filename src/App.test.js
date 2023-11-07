import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import SamuraiJSApp from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div);
});
