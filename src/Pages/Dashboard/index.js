import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import BackDrop from "../../Component/BackDrop";
import { useNavigate } from "react-router-dom";
const Stories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    if (!localStorage.getItem("valid")) {
      navigate("/");
    }
    async function getData() {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              (response) => response.json()
            )
          );
        const result = await Promise.all(promises);
        setStories(result);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);
  function Stories({ stories }) {
    if (stories.length === 0) {
      return <BackDrop />;
    }
    const handleClick = (id) => {
      var a = [];
      var vals = [];
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem("session")) || [];

      for (var item of a) {
        vals.push(item.by);
      }
      console.log(vals);
      if (a.length > 0) {
        if (vals.includes(id.by)) {
          alert("Item Already Added");
        } else {
          console.log("true");
          a.push(id);
          localStorage.setItem("session", JSON.stringify(a));
        }
      } else {
        console.log("false");
        a.push(id);
        localStorage.setItem("session", JSON.stringify(a));
      }

      //   }
    };
    return (
      <div>
        <ul>
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">Sr. No</th> */}
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">BOOKMARK</th>
              </tr>
            </thead>
            {stories.map((stories) => (
              <tbody key={stories.id}>
                <tr>
                  {/* <th scope="row">1</th> */}
                  <td>{stories.id}</td>
                  <td>{stories.title}</td>
                  <td>
                    {" "}
                    <Button onClick={() => handleClick(stories)}>
                      Add to cart
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <Stories stories={stories} />
    </div>
  );
};

export default Stories;
