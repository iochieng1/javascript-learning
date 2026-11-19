/* User Stories:

You should have a convertHTML function that accepts a string as an argument.

The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

& should be converted to &amp;.
< should be converted to &lt;.
> should be converted to &gt;.
" should be converted to &quot;.
' should be converted to &apos;.*/

function convertHTML(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "&") {
      result += "&amp;";
    } else if (char === "<") {
      result += "&lt;";
    } else if (char === ">") {
      result += "&gt;";
    } else if (char === '"') {
      result += "&quot;";
    } else if (char === "'") {
      result += "&apos;";
    } else {
      result += char;
    }
  }

  return result;
}
