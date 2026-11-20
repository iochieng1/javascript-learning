/*
You should not change the pre-filled shuffledFragments array.
You should create a function named compactFragments that takes an array of fragments and returns a new array with all undefined elements removed. If the function removes any undefined elements, it should log a message to the console. The message should start with the prefix [COMPACTED].
You should declare a variable named compactedShuffledFragments and assign it the result of calling compactFragments with the shuffledFragments array.
You should create a function named sortFragments that takes an array of fragments without undefined elements and returns a new array sorted by the id property in ascending order, keeping fragments that share the same id in their original order. You should not use JavaScript's built-in sort method.
You should declare a variable named sortedFragments and assign it the result of calling sortFragments with the compactedShuffledFragments array.
You should create a function named dedupeFragments that takes a sorted array of fragments and returns a new array with duplicates removed, keeping only the first occurrence. You should define duplicates as two or more fragments sharing the same id. For each id that is deduplicated, the function should log a message to the console. The message should start with the prefix [DEDUPED].
You should declare a variable named dedupedFragments and assign it the result of calling dedupeFragments with the sortedFragments array.
You should create a function named fillMissingFragments that takes a sorted array of fragments and returns a new array with missing fragments filled with placeholder objects. You should define missing fragments as gaps in the sequence between the lowest and highest id. The placeholder objects should have the format { id: missingId, text: "[...]" }. For each placeholder added, the function should log a message to the console. The message should start with the prefix [FILLED].
You should declare a variable named filledFragments and assign it the result of calling fillMissingFragments with the dedupedFragments array.
You should create a function named assembleStory that takes a sorted array of fragments and returns a single string containing all fragment texts, separated by newlines.
You should use assembleStory with your filledFragments to display the complete story in the console.
Your functions compactFragments, sortFragments, dedupeFragments, fillMissingFragments and assembleStory should not mutate the array that they are called with.*/

const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const compacted = fragments.filter(fragment => fragment !== undefined);

  if (compacted.length < fragments.length) {
    console.log("[COMPACTED] Removed undefined fragments.");
  }

  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);


function sortFragments(fragments) {
  const result = [...fragments];

  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j].id > current.id) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

const sortedFragments = sortFragments(compactedShuffledFragments);


function dedupeFragments(fragments) {
  const result = [];
  const seen = new Set();
  const logged = new Set();

  for (const fragment of fragments) {
    if (seen.has(fragment.id)) {
      if (!logged.has(fragment.id)) {
        console.log(`[DEDUPED] Removed duplicate fragment with id ${fragment.id}.`);
        logged.add(fragment.id);
      }
    } else {
      seen.add(fragment.id);
      result.push(fragment);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);


function fillMissingFragments(fragments) {
  if (fragments.length === 0) {
    return [];
  }

  const result = [];
  let fragmentIndex = 0;

  const lowestId = fragments[0].id;
  const highestId = fragments[fragments.length - 1].id;

  for (let id = lowestId; id <= highestId; id++) {
    if (
      fragmentIndex < fragments.length &&
      fragments[fragmentIndex].id === id
    ) {
      result.push(fragments[fragmentIndex]);
      fragmentIndex++;
    } else {
      result.push({
        id: id,
        text: "[...]"
      });

      console.log(`[FILLED] Added missing fragment with id ${id}.`);
    }
  }

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);


function assembleStory(fragments) {
  return fragments.map(fragment => fragment.text).join("\n");
}

console.log(assembleStory(filledFragments));
