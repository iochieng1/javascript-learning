function sanitizeLog(entry, disallowedCharacters) {
  for (let char of disallowedCharacters) {
    entry = entry.replaceAll(char, "#");
  }

  return entry;
}

function cleanLogs(logs, disallowedCharacters) {
  let sanitizedCount = 0;
  let informationalCount = 0;

  for (let entry of logs) {

    if (entry.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }

    if (entry.startsWith("/")) {
      informationalCount++;
    } else {
      sanitizeLog(entry, disallowedCharacters);
      sanitizedCount++;
    }
  }

  return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${sanitizedCount}. Informational Entry Count: ${informationalCount}. Finished sanitizing logs.`;
}
