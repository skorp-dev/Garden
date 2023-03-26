import React from "react";

export default function ProdutsFilter() {
  const onChange = () => {};

  return (
    <div>
      <label>
        Price
        <input type="text" placeholder="from" name="from" />
        <input type="text" placeholder="to" name="to" />
      </label>

      <label>
        Discounted items
        <input type="checkbox" name="sales" id="sales" onChange={onChange} />
      </label>
    </div>
  );
}