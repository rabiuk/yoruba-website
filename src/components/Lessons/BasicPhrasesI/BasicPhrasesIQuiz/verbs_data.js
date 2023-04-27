function generateVerbsData() {
  let verbsObj = {
    Eat: ["jẹ", false],
    Drink: ["mu", false],
    Call: ["pè", false],
    Sleep: ["sùn", false],
    Wake: ["ji", false],
    Play: ["ṣeere", false],
    Talk: ["sọrọ", false],
    Bath: ["wẹ", false],
    Read: ["kawe", false],
    Love: ["fẹran", false],
    Pray: ["gbadura", false],
    Stand: ["dide", false],
    Walk: ["rin", false],
    Sit: ["jokoo", false],
    Clap: ["patẹwọ", false],
    Jump: ["fo", false],
    Sing: ["kọrin", false],
    Laugh: ["rẹrin", false],
    Give: ["fun", false],
    Take: ["gbà", false],
    "Take care": ["tọju", false],
    Remember: ["ranti", false],
    Forget: ["gbagbe", false],
    Forgive: ["dariji", false],
    Close: ["tì", false],
    Open: ["ṣí", false],
    Go: ["lọ", false],
    Return: ["padà", false],
    Tear: ["ya", false],
    Teach: ["kọ", false],
    Follow: ["tẹle", false],
    Fold: ["ka", false],
    Think: ["ronu", false],
    Thank: ["dupẹ", false],
    Terrify: ["dẹ́rùbà", false],
    Relax: ["farabalẹ", false],
    Wait: ["daduro", false],
    Smell: ["gborun", false],
    Rest: ["simi", false],
    Sneeze: ["sín", false],
    Run: ["sare", false],
    Start: ["bẹrẹ", false],
    Finish: ["pari", false],
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
