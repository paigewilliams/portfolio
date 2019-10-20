---
title: "Refactoring a small Redux app to useContext and useReducer"
date: "2019-10-19"
type: "blog"
tech: "React / Redux"
---

I have a project that I am passionate about building, and is simple enough that it serves as a great place to learn new things. It is a simple app that fetches data and allows the user to filter the data as well. I have been using it as a basic example of using Mapbox and d3 with React and Redux, and now React Hooks. I think that having a project like this is a great thing for a new developer to have, as they don't have to think about what kind of app they want to build when they want to learn something new, they can just create a branch and implement the feature there. 

I originally built this app using Redux, but after building out the base functionality, I realized that Redux was a bit overkill. I only had two arrays that I was storing in my global state object, and did not have many different actions that would warrent having multiple reducers. After learning about ways to manage state with React Hooks, I thought that this would be a worthy effort to compare the experience between the two. 

There are many different ways to manage state with Hooks, and I felt for my use case of a small app where several nested components need to access to a global state, a combination of `useContext` and `useReducer` would suffice. I have some ideas of some potential features I would like to add to the app, so I wanted a solution that was scaleable, but lightweight. 

Here is how I did it: 

I created a context folder  `src/context` with `ContextProvider.jsx`. 

In the ContextProvider file, I copied over my initial state from my redux file. For this project it looks like this. 

```javascript
const initialState = {
  data: {},
  filteredData: {}
}
```

I then declared my context with `export cont AppContext = createContext(initialState);` I declared my `AppContextProvider`, where my global state willreside using the `useReducer` hook. 

`const [state, dispatch] = useReducer(reducer, initialState)`

I decided that my app only needed one reducer, because I do not have many different actions taking place. However, if the app does grow I could refactor to multiple reducers easily. My simple reducer looks like the following: 
```javascript
const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DATA_SUCCESS:
      return { ...state, data: action.data }; 
    case FILTER_DATA_SUCCESS :
      return { ...state, filteredData: action.data };
    default:
      return state;
  }
}
```
In my `AppContextProvider` component, I am returning an `AppContext.Provider,` and passing in `state` and `dispatch` in the value prop so that the child components can have access to the global state and dispatch functionality. 

In Redux, you dispatch actions that dictate the switch cases in the reducer. Typically these actions are pure functions that return an object that contains and action type and the payload. To keep everything pure, and because I already had these all defined, I used my old action types and action creators. 

At this point, I have my basic set up in place and I can implement it in my app. In my `index.jsx` I had my `App` component wrapped in a `Provider`, declared my store, and my middleware. I removed all of that, and import my `AppContextProvider` component. I wrapped my top level app component in my `AppContextProvider` to create my global state. 

I searched for wherever I used Reduxes `dispatch` and `mapStateToProps` to find where I should implement my new Hook based `dispatch`. To do so, I import my `AppContext` into my components and deconstruct them like `const {state, dispatch} = useContext(AppContext)`.  I also imported my action creators into my components, and call them inside `dispatch` like `dispatch(fetchData(data))`.

One of the things I really like about Redux is the use of middleware, which are functions that are called between actions and the reducer. This is espicially helpful when logging actions, to see when they are being dispatched. With the help of this [article](https://staleclosures.dev/building-usereducer-with-logger/) I was able to implement a simple logger with my existing state management. 

One last piece that I learned during this refactor was using partial application to pass functions via context. For example, I have a function that fetches data when the user submits a form. I want this function to live in my provider because that is where I am storing all of my data fetching logic. This function needs to know about dispatch, a value in my global state, and the form input value. In my `AppContext.Provider` I pass the function via the value like:
```javascript
        <AppContext.Provider value={{ state, dispatch, fetchData: fetchData(dispatch, state.data) >
```
Then, in my component I am able to import my AppContext, and only provide the final argument. 

In the end my Context provider looked like this: 
```javascript
    import React, { createContext, useReducer, useEffect, useMemo, useRef } from 'react';
    
    const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS';
    const FILTER_DATA_SUCCESS = 'FILTER_DATA_SUCCESS';
    
    export const fetchData = data => ({ type: REQUEST_DATA_SUCCESS, data });
    export const filterData = data => ({ type: FILTER_DATA_SUCCESS, data });
    
    const reducer = (state = {}, action) => {
      switch (action.type) {
        case REQUEST_DATA_SUCCESS:
          return { ...state, data: action.data };
        case FILTER_DATA_SUCCESS:
          return { ...state, filteredData: action.data };
        default:
          return state;
      }
    };
    
    const initialState = {
    	data: {},
      filteredData: {},
    }
    
    const logger = dispatch => action => {
      console.groupCollapsed('type:', action.type);
      return dispatch(action);
    }
    
    const useReducerWithLogger = (...args) => {
      let prevState = useRef(initialState);
      const [state, dispatch] = useReducer(reducer, initialState);
    
      const dispatchWithLogger = useMemo(() => logger(dispatch), [dispatch]);
    
      useEffect(() => {
        if (state !== initialState) {
          console.log("Previous state: ", prevState.current);
          console.log("Next State: ", state);
          console.groupEnd();
        }
        prevState.current = state;
      }, [state]);
      return [state, dispatchWithLogger];
    }
    
    const fetchData = async dispatch => {
      try {
        const response = await fetch('url');
        const json = await response.json();
        dispatch(fetchData(json));
      }
      catch (error) {
        console.log('An error occured', error);
      }
    };
    
    const fetchCoords = (dispatch, treeData) => {
      return async address => {
        try {
          const response = await fetch('url');
          const json = await response.json();
          dispatch(filterData(json));
        }
        catch (error) {
          console.log('An error occorred', error);
        }
      }
    };
    
    export const AppContext = createContext(initialState);
    
    const AppContextProvider = ({ children }) => {
      const [state, dispatch] = useReducerWithLogger(reducer, initialState);
    
      useEffect(() => {
        fetchData(dispatch);
      }, []);
    
      return (
        <AppContext.Provider
          value={{ state, dispatch, fetchCoords: fetchCoords(dispatch, state.data) }}
        >
          {children}
        </AppContext.Provider >
      );
    };
    
    export default AppContextProvider;
```

The benefit of using these two hooks together is that you can avoid passing callbacks though nested components and can keep a minimal state management system. I would not recommend this if your app because overly complex, or if you needed more advanced middleware. There is a rich ecosystem of Redux tooling that is extremely valuable. However, if you have a lightweight app that needs to manage state and want to get some React Hooks practice, I felt that this was a worthy exercise.