import { useState } from "react";
const cl = ["yellow", "green", "orange", "indigo", "blue"];

function Colors() {
  const [colorList, setColorList] = useState([]);
  const [activeColor, setActiveColor] = useState("");

  function handleResetColors() {
    setColorList(["yellow", "green", "orange", "indigo", "blue"]);
  }

  function updateActiveColor(color) {
    setActiveColor(color);
  }

  function removeColor(color) {
    //console.log(color);
    // for loop where you create a new list
    // with the color the person as clicked as mising
    // Use the filter method
    // let newListOFColors = [];
    // for (let i = 0; i < colorList.length; i++) {
    //   let c = colorList[i];
    //   if (color === c) {
    //     //console.log(`The Color you wanted to delete is`, c);
    //   } else {
    //     newListOFColors.push(c);
    //   }
    // }
    // if (color === activeColor) {
    //   setActiveColor("white");
    // }
    // console.log(newListOFColors);
    // setColorList(newListOFColors);
    let newListOfColors = colorList.filter((c) => {
      if (c === color) {
        return false;
      }
      return true;
    });

    console.log(newListOfColors);

    setColorList(newListOfColors);
  }

  function deleteAllOddColors() {}

  function deleteAllEvenColors() {}

  function deleteRandomColor() {}

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",

        backgroundColor: activeColor,
      }}
    >
      {colorList.map((color, i) => {
        return (
          <SingleColor
            key={i}
            color={color}
            updateActiveColor={updateActiveColor}
            removeColor={removeColor}
          />
        );
      })}

      <button onClick={handleResetColors}>Reset Colors</button>
      <button>Delete Even Colors</button>
      <button>Delete Odd Colors</button>
      <button>Delete A Random Color</button>
    </div>
  );
}

function SingleColor({ color, updateActiveColor, removeColor }) {
  return (
    <li style={{ color: "black", marginTop: "10px" }}>
      <button onClick={() => updateActiveColor(color)}>{color}</button>
      <button style={{ marginLeft: "30px" }} onClick={() => removeColor(color)}>
        X
      </button>
    </li>
  );
}

export default Colors;
