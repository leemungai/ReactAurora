import { useState } from "react";

import shopItems from "../items";

import Table from "./Table";

import ItemTotals from "./ItemTotals";

import AddItems from "./AddItems";

function ShopKeeper() {
  const [items, setItems] = useState(shopItems);
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <Table items={items} />
      <ItemTotals />
      <div style={{ display: "flex", justifyItems: "flex-end" }}>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => setShowAdd(!showAdd)}
        >
          {showAdd ? "Hide" : "Show"}
        </button>
      </div>
      <AddItems showAdd={showAdd} />
    </div>
  );
}

export default ShopKeeper;
