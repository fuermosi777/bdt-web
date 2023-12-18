import React from "react";
import "./HomePage.scss";
import Button from "@mui/joy/Button";
import { useNavigate } from "react-router-dom";
import { Literal } from "../constants/literals.ts";

function App() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <div>{Literal.Title}</div>
      <p>{Literal.HomePage}</p>
      <Button
        onClick={() =>
          navigate(
            Literal.navigationDestination(Literal.StartNewDesign)
          )
        }
      >
        {Literal.StartNewDesign}
      </Button>
    </div>
  );
}

export default App;
