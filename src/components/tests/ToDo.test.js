import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ToDo from '../ToDo';

afterEach(() => {
  cleanup();
})

test('component test for ToDo', () => {
  const tempList = {id: 1, title: 'make money', isCompleted: true};
  render(<ToDo toDoListItem={tempList}/>);
  const toDoElement = screen.getByTestId(`to-do-${tempList.id}`);
  expect(toDoElement).toBeInTheDocument();
  expect(toDoElement).toHaveTextContent(tempList.title);
});

test('matches snapshot', () => {
  const tempList = {id: 1, title: 'make money', isCompleted: true};
  const tree = renderer.create(<ToDo toDoListItem={tempList}/>).toJSON();
  expect(tree).toMatchSnapshot();
})