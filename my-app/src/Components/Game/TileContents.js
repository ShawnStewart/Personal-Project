export const GenerateTileContent = () => {
  let tileContent = [];
  for (let i = 0; i < 40; i++) {
    tileContent.push({
      name: "test" + i,
      price: i
    });
  }

  return tileContent;
};

let x = GenerateTileContent;
console.log(x);
