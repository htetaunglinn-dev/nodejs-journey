import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("david-website.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
