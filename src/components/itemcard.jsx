import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function Itemcard({ item }) {
  const storageKey = `checkbox_${item.id}`;
  const [checked, setChecked] = useState(() => {
    return localStorage.getItem(storageKey) === "true";
  });
  const quantityKey = `quantity_${item.id}`;
  const [quantity, setQuantity] = useState(() => {
    const saved = localStorage.getItem(quantityKey);
    return saved !== null ? Number(saved) : item.quantity;
  });

  useEffect(() => {
    localStorage.setItem(quantityKey, quantity);
  }, [quantity]);

  function increase() {
    setQuantity((q) => q + 1);
  }
  function decrease() {
    setQuantity((q) => Math.max(q - 1, 0));
  }
  function handleChange(e) {
    setChecked(e.target.checked);
    localStorage.setItem(storageKey, e.target.checked);
  }

  let label = "";
  if (quantity < 5) {
    label = "need order";
  } else {
    label = "enough";
  }

  return (
    <Card className="card-fixed-width">
      <Card.Img className="cardimg" variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="cardtitle">{item.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="carditem">{item.brand}</ListGroup.Item>
        <ListGroup.Item className="carditem">{item.place}</ListGroup.Item>
        <ListGroup.Item className="carditem">
          <div>
            <button onClick={decrease}>–</button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={increase}>+</button>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          className="carditem"
          style={{
            backgroundColor: label === "need order" ? "red" : "green",
            color: "white", // for contrast
          }}
        >
          <input
            id={storageKey}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <label htmlFor={storageKey}>{label}</label>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Itemcard;
