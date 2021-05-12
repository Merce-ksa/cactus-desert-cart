# Cactus Desert cart

Shopping cart.

![cactus-desert-cart](https://user-images.githubusercontent.com/61200707/117943401-61fecc80-b30c-11eb-846a-23a2cc9a532c.png)

## Dependencies

This project is bootstrapped with React Native.
The application state is handled with Redux.
For testing, I've decided to use [Jest framework](https://jestjs.io/).

## Continuous integration

Github actions integration, running tests on git push.

## Folder structure

```
cactusDesert-cart
│
└───src
│   │
│   └───assets
│   │   └───img
│   │   │   │   logo.png
│   │   │   │   user-icon.png
│   │   │
│   │   └───styles
│   │       │   globals.jsx
│   │       │   variables.jsx
│   │   
│   └───Components
│   │   └───CartSummary
│   │   │   │   CartSummary.jsx
│   │   │   │   CartSummary.test.jsx
│   │   │   │   CartSummaryStyles.jsx
│   │   │
│   │   └───Header
│   │   │   │   Header.jsx
│   │   │   │   Header.test.jsx
│   │   │
│   │   └───OrderSummary
│   │   │   │   OrderSummary.jsx
│   │   │   │   OrderSummary.test.jsx
│   │   │   │   OrderSummaryStyles.jsx
│   │   │
│   │   └───QuantityHandler
│   │       │   QuantityHandler.jsx
│   │       │   QuantityHandlerStyles.jsx
│   │
│   └───domain
│   │       │   cart.js
│   │       |   cartProduct.js
│   │      
│   └───redux
│   │   └───actions
│   │   │   │   cartActions.js
│   │   │   |   cartActionsTypes.js
│   │   │
│   │   └───reducers
│   │   │   |   cartReducer.js
│   │   │   │   index.js
│   │   │
│   │   └───stores
│   │       │   configureStore.js
│   │       |   initialState.js    
│   │
│   └───Screens
│       └───CartCheckout
│           │   CartCheckout.jsx
│
│   .eslintrc.js
│   .gitignore
│   index.jsx
│   App.jsx
│   package-lock.json   
│   package.json
│   README.md 

```

## mockAPI

To develope and test the aplication, I've mocked the backend with [mockAPI](https://mockapi.io/projects) tool.
