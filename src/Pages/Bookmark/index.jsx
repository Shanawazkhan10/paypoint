import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Bookmark = () => {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(
    JSON.parse(localStorage.getItem("session")) ?? "defaultValue"
  );
  useEffect(() => {
    if (!localStorage.getItem("valid")) {
      navigate("/");
    }
  }, []);

  console.log(currentValue, "currentValue");
  return (
    <div>
      <h1>Bookmark</h1>
      {/* {currentValue && currentValue.map((el) => <h1>{el.id}</h1>)} */}
      {currentValue !== "defaultValue" ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              {/* <th scope="col">BOOKMARK</th> */}
            </tr>
          </thead>
          {currentValue.map((el) => (
            <tbody key={el.id}>
              <tr>
                <td>{el.id}</td>
                <td>{el.title}</td>
                {/* <td>
                  <Button>Add to cart</Button>
                </td> */}
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <h1>FIRST ADD TO WISHLIST</h1>
      )}
    </div>
  );
};

export default Bookmark;
