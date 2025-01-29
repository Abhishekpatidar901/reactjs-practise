import React, { useState, useEffect, useContext, useReducer, useRef, useCallback, useMemo, useLayoutEffect, useImperativeHandle, forwardRef } from "react";

// Context API setup
const ThemeContext = React.createContext();

// Reducer function to toggle theme
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

// Child component to demonstrate useImperativeHandle
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose custom methods for the ref
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} />;
});

const App = () => {
  // useState: Manage simple state for count and name
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useReducer: Manage theme state using a reducer
  const [theme, dispatch] = useReducer(themeReducer, "light");

  // useRef: Reference to DOM element
  const inputRef = useRef(null);

  // useEffect: Perform side effects (e.g., logging count updates)
  useEffect(() => {
    console.log(`Count updated: ${count}`);
    return () => console.log("Cleanup on count update");
  }, [count]);

  // useContext: Consume theme context value
  const themeStyle = useContext(ThemeContext);

  // useMemo: Memoize an expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 10;
  }, [count]);

  // useCallback: Memoize a callback function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // useLayoutEffect: Runs synchronously after DOM mutations
  useLayoutEffect(() => {
    console.log("Layout effect triggered");
  });

  // useImperativeHandle: Custom methods for child ref
  const customInputRef = useRef();

  return (
    <ThemeContext.Provider value={theme === "light" ? { color: "black", background: "white" } : { color: "white", background: "black" }}>
      <div style={{ padding: "20px", ...themeStyle }}>
        <h1>React Hooks Demo</h1>

        {/* useState demonstration */}
        <h2>useState</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        {/* useReducer demonstration */}
        <h2>useReducer</h2>
        <p>Current theme: {theme}</p>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Toggle Theme</button>

        {/* useRef demonstration */}
        <h2>useRef</h2>
        <input ref={inputRef} placeholder="Focus me!" />
        <button onClick={() => inputRef.current.focus()}>Focus</button>

        {/* useMemo demonstration */}
        <h2>useMemo</h2>
        <p>Expensive calculation result: {expensiveCalculation}</p>

        {/* useCallback demonstration */}
        <h2>useCallback</h2>
        <p>The increment function is memoized.</p>

        {/* useLayoutEffect demonstration */}
 
        {/* useImperativeHandle demonstration */}
        <h2>useImperativeHandle</h2>
        <CustomInput ref={customInputRef} placeholder="Custom Input" />
        <button onClick={(f) => customInputRef.current.focus()}>Focus</button>
        <button onClick={() => customInputRef.current.clear()}>Clear</button>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
