import { useState } from "react";
import { Button } from "@mantine/core";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="light" color="violet">
        Click here
      </Button>
    </div>
  );
}

export default App;
