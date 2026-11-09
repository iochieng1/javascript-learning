
/*You are a software developer tasked with creating a ledger application to manage IT hardware devices provisioned by your company's Service Desk. The ledger is an object whose keys are asset tags and whose values are objects:*/
const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};


function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}


function isOverdue(dueDateStr, todayStr) {
  
  const [m1, d1, y1] = dueDateStr.split("/").map(Number);
  const [m2, d2, y2] = todayStr.split("/").map(Number);

  
  if (y1 !== y2) return y1 < y2;
  if (m1 !== m2) return m1 < m2;
  return d1 < d2;
}



function checkoutDevice(ledger, assetTag, borrower) {
  
  const clonedLedger = loadLedger(serializeLedger(ledger));

  
  if (!clonedLedger.hasOwnProperty(assetTag)) {
    return {
      ledger: ledger, 
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  const device = clonedLedger[assetTag];

  
  if (device.status === "CheckedOut") {
    return {
      ledger: ledger, 
      message: `Device ${assetTag} is already checked out.`
    };
  }

  device.status = "CheckedOut";
  device.borrower.name = borrower.name;
  device.borrower.email = borrower.email;

  return {
    ledger: clonedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  const clonedLedger = loadLedger(serializeLedger(ledger));

  if (!clonedLedger.hasOwnProperty(assetTag)) {
    return {
      ledger: ledger,
      message: `Device with asset tag ${assetTag} was not found.`
    };
  }

  const device = clonedLedger[assetTag];
  device.status = "CheckedIn";
  device.borrower.name = "";
  device.borrower.email = "";
  device.dueDate = "";

  return {
    ledger: clonedLedger,
    message: `Device ${assetTag} successfully checked in.`
  };
}

function listOverdueDevices(ledger, today) {
  const overdueDevices = [];

  for (const assetTag in ledger) {
    if (ledger.hasOwnProperty(assetTag)) {
      const device = ledger[assetTag];
      
      if (device.status === "CheckedOut" && device.dueDate) {
        if (isOverdue(device.dueDate, today)) {
          overdueDevices.push(device);
        }
      }
    }
  }

  overdueDevices.sort((a, b) => {
    const [am, ad, ay] = a.dueDate.split("/").map(Number);
    const [bm, bd, by] = b.dueDate.split("/").map(Number);

    if (ay !== by) return ay - by;
    if (am !== bm) return am - bm;
    return ad - bd;
  });

  return overdueDevices;
}
