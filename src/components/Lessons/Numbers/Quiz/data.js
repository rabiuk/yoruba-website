//https://www.learnentry.com/english-yoruba/vocabulary/numbers-in-yoruba/
function generateVerbsData() {
  let verbsObj = {
    Zero: ["odo", false],
    One: ["okan", false],
    Two: ["meji", false],
    Three: ["meta", false],
    Four: ["merin", false],
    Five: ["marun", false],
    Six: ["mefa", false],
    Seven: ["meje", false],
    Eight: ["mejo", false],
    Nine: ["mesan", false],
    Ten: ["mewa", false],
    Eleven: ["mokanla", false],
    Twelve: ["mejila", false],
    Thirteen: ["metala", false],
    Fourteen: ["merinla", false],
    Fifteen: ["marundinlogun", false],
    Sixteen: ["merindinlogun", false],
    Seventeen: ["metadinlogun", false],
    Eighteen: ["mejidinlogun", false],
    Nineteen: ["mokandinlogun", false],
    Twenty: ["ogun", false],
    "Twenty-One": ["ogun-meji", false],
    "Twenty-Two": ["ogun-meta", false],
    "Twenty-Three": ["ogun-merin", false],
    "Twenty-Four": ["ogun-marun", false],
    "Twenty-Five": ["ogun-mefa", false],
    "Twenty-Six": ["ogun-meje", false],
    "Twenty-Seven": ["ogun-mejo", false],
    "Twenty-Eight": ["ogun-mesan", false],
    "Twenty-Nine": ["ogun-mewa", false],
    Thirty: ["ogbon", false],
    "Seventy-Five": ["aadotin-mejila", false],
    "One Hundred": ["oorun", false],
  };
  // Shuffle the object using the Fisher-Yates shuffle algorithm
  const shuffledObj = shuffleObject(verbsObj);

  let verbsData = [];
  const keysArray = Object.keys(shuffledObj); // ["Eat", "Drink"]...
  const valuesArray = Object.values(shuffledObj); // ["jẹ", "mu"]

  for (let i = 0; i < keysArray.length; i++) {
    const eachVerb = {};
    if (shuffledObj[keysArray[i]][1] === false) {
      // Create the question id
      eachVerb["id"] = i;
      // Create the question
      eachVerb["question"] = keysArray[i];
      // Create the choices array
      //We will pick at random any verb from our verb list

      // Filter out "the current answer" from the list
      const filteredList = valuesArray.filter(
        (element) => element[0] !== shuffledObj[keysArray[i]][0]
      );
      const choiceAloneArray = filteredList.map((subarray) => subarray[0]);
      console.log(choiceAloneArray);

      // Get 3 random indices from the filtered list
      const indices = [];
      while (indices.length < 3 && indices.length < choiceAloneArray.length) {
        const index = Math.floor(Math.random() * choiceAloneArray.length);
        if (!indices.includes(index)) {
          indices.push(index);
        }
      }

      // Get the elements corresponding to the random indices
      const choices = indices.map((index) => choiceAloneArray[index]);
      //Add the answer to this array
      choices.push(shuffledObj[keysArray[i]][0]);

      eachVerb["choices"] = choices;
      eachVerb["answer"] = shuffledObj[keysArray[i]][0];
      verbsData.push(eachVerb);

      //set the marked to true
      shuffledObj[keysArray[i]][1] = true;
    }
  }

  return verbsData;
}

function shuffleObject(obj) {
  const shuffledKeys = shuffleArray(Object.keys(obj));
  const shuffledObj = {};
  for (let key of shuffledKeys) {
    shuffledObj[key] = obj[key];
  }
  return shuffledObj;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default generateVerbsData;
