import './App.css';
import ToDo from './components/ToDo';

function App() {
  const toDoList = [
    {id: 1, title: 'make money', isCompleted: true}
  ];

  return (
    <div className="App">
      {toDoList.map((listItem) => {
        return (
          <ToDo key={listItem.id} toDoListItem={listItem}/>
        )
      })}
    </div>
  );
}

export default App;
