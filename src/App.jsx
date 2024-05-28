import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { useDispatch } from "react-redux";
import { textsReducer } from "./redux/slices/textsSlice";

function App() {
  const dispatch = useDispatch();

  const onAddText = (text) => {
    dispatch(
      textsReducer({
        text,
      })
    );
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <TextList />
    </div>
  );
}

export default App;
