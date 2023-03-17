import "./App.css";
import blue from "./assets/image/blue.jpg";
import gray from "./assets/image/midnight.jpg";
import purple from "./assets/image/purple.jpg";
import red from "./assets/image/red.jpg";
import { useState } from "react";

function App() {
  const [choiceColor, setChoiceColor] = useState({
    0: 0,
  });

  const onSelectColor = (index, sIndex) => {
    setChoiceColor({
      ...choiceColor,
      [index]: sIndex,
    });
  };

  const product = [
    {
      name: "iphone 11",
      details: [
        {
          image: blue,
          price: 10,
          color: "blue",
        },
        {
          image: gray,
          price: 20,
          color: "gray",
        },
        {
          image: purple,
          price: 30,
          color: "purple",
        },
        {
          image: red,
          price: 40,
          color: "red",
        },
      ],
    },
    {
      name: "iphone 14",
      details: [
        {
          image: blue,
          price: 10,
          color: "blue",
        },
        {
          image: gray,
          price: 20,
          color: "gray",
        },
        {
          image: purple,
          price: 30,
          color: "purple",
        },
        {
          image: red,
          price: 40,
          color: "red",
        },
      ],
    },
    {
      name: "iphone 14",
      details: [
        {
          image: blue,
          price: 10,
          color: "blue",
        },
        {
          image: gray,
          price: 20,
          color: "gray",
        },
        {
          image: purple,
          price: 30,
          color: "purple",
        },
        {
          image: red,
          price: 40,
          color: "red",
        },
      ],
    },
  ];

  return (
    <>
      <div>
        {product.map((d, i) => (
          <div className="card" key={i}>
            <img
              className="product_img"
              src={d.details[choiceColor[i] ? choiceColor[i] : 0].image}
              alt=""
            />
            <p>Product : {d.name}</p>
            <p>
              Color : {d.details[choiceColor[i] ? choiceColor[i] : 0].color}
            </p>
            <p>
              Choice Color :
              {d.details.map((detail, sIndex) => (
                <span
                  key={sIndex}
                  className="color_dot"
                  style={{
                    background: detail.color,
                  }}
                  onClick={() => onSelectColor(i, sIndex)}
                ></span>
              ))}
            </p>
            <p>
              Price : {d.details[choiceColor[i] ? choiceColor[i] : 0].price}
            </p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
