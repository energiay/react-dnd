import React from 'react';
import Container from './Components/Container/Container';
import Classes from './App.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
    return <div className={Classes.App}>
        <DndProvider backend={HTML5Backend}>
            <Container />
        </DndProvider>
    </div>
}

export default App;
