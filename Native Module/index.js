const fs = require("fs");

fs.writeFile("myfile.txt", "Hey, I am Here!!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("myfile.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
