const Browser = require("zombie");

const browser = new Browser();
const url = "https://codequiz.azurewebsites.net/";

const searchKey = process.argv[2];
browser
  .visit(url)
  .then(() => {
    browser.pressButton("input").then(() => {
      const htmlString = browser.html();
      let keyIndex = htmlString.indexOf(`<td>${searchKey}`);
      if (keyIndex === -1) {
        console.log("Data Not Found");
      }
      keyIndex = keyIndex + `<td>${searchKey}`.length;
      const initialIndex =
        keyIndex + htmlString.slice(keyIndex).indexOf("<td>") + 4;
      const dataLength = htmlString.slice(initialIndex).indexOf("</td>");
      console.log(htmlString.slice(initialIndex, initialIndex + dataLength));
    });
  })
  .catch((e) => {
    console.log("error", e);
  });
