let normalizeUnits = function(manifest) {
  const newManifest = { ...manifest };
  
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  
  return newManifest;
};

let validateManifest = function(manifest) {
  const errors = {};

  // 1. Validate containerId (must be a positive integer)
  if (!manifest || !("containerId" in manifest) || manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    manifest.containerId === null ||
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // 2. Validate destination (must be a non-empty string after trimming)
  if (!manifest || !("destination" in manifest) || manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    manifest.destination === null ||
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // 3. Validate weight (must be a positive number and not NaN)
  if (!manifest || !("weight" in manifest) || manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    manifest.weight === null ||
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // 4. Validate unit (must be "kg" or "lb")
  if (!manifest || !("unit" in manifest) || manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (
    manifest.unit === null ||
    (manifest.unit !== "kg" && manifest.unit !== "lb")
  ) {
    errors.unit = "Invalid";
  }

  // 5. Validate hazmat (must be a boolean)
  if (!manifest || !("hazmat" in manifest) || manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (
    manifest.hazmat === null ||
    typeof manifest.hazmat !== "boolean"
  ) {
    errors.hazmat = "Invalid";
  }

  return errors;
};

let processManifest = function(manifest) {
  const validationErrors = validateManifest(manifest);
  const isValid = Object.keys(validationErrors).length === 0;

  if (isValid) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    const containerId = manifest && manifest.containerId !== undefined ? manifest.containerId : undefined;
    console.log(`Validation error: ${containerId}`);
    console.log(validationErrors);
  }
};