import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import MyComponent from './components/MyComponent/MyComponent';
import Form from './components/Form/Form';

const App = () => (
    <div>
        <MyComponent />
        <Form />
        <ListWrapper />
    </div>
);

export default App;
