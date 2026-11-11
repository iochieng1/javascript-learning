const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const shipment = [];
  const seenSkus = [];

  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const sku = parts[0];

    if (seenSkus.includes(sku)) {
      continue;
    }

    seenSkus.push(sku);

    shipment.push({
      sku: sku,
      name: parts[1],
      qty: Number(parts[2]),
      expires: parts[3],
      zone: parts[4] || "general"
    });
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let exists = false;

    for (let j = 0; j < pantry.length; j++) {
      if (pantry[j].sku === item.sku) {
        exists = true;
        break;
      }
    }

    if (item.qty <= 0) {
      actions.push({ type: "discard", item: item });
    } else if (exists) {
      actions.push({ type: "restock", item: item });
    } else {
      actions.push({ type: "donate", item: item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const cloned = [];

  for (let i = 0; i < pantry.length; i++) {
    cloned.push({ ...pantry[i] });
  }

  return cloned;
}

const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);
