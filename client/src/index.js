import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

import { store } from './store';

// import './styles/layout/grid.css';
// import './styles/main.scss';

// const store = configureStore();
// store.dispatch(userLoginAsync({email: 'hhnguyen255@gmail.com', password: 'Abcd1234'}))
//     .then(res => {
//         console.log(store.getState());
//     });

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(JSX, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
