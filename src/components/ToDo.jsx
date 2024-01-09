import React from 'react';

function ToDo({toDoListItem}) {
  const { id, title, isCompleted } = toDoListItem;

  return (
    <div data-testid={`to-do-${id}`}>
      <h1>{title}</h1>
      {isCompleted && <strike>completed!</strike>}
      <div>hi</div>
    </div>
  );
}

export default ToDo;