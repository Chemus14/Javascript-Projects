'use strict';
// Function displaying one element of the disctionary created
const printElementDictionary = function () {
  // Dictionary
  const diction = {
    apple: 'a round fruit with red or green skin and a white inside',
    banana: 'a long curved fruit that grows in clusters and has yellow skin',
    orange: 'a round fruit with a tough, orange skin and a juicy inside',
    grape: 'a small, juicy fruit with a thin skin and a seed inside',
    strawberry: 'a small, red fruit with a sweet taste and a green leafy top',
    avocado: 'a pear-shaped fruit with green skin and a large seed inside',
    pineapple:
      'a large, tropical fruit with a rough, spiky skin and sweet yellow flesh',
  };
  // Deleting element of the dictionary
  delete diction.apple;
  // The output it will be undefined because is not exsisting anymore
  document.getElementById('dictionary').innerHTML = diction.apple;
};
