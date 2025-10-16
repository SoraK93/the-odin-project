import * as fs from "fs";
// const fs = fs();

// reading files
// path is relative to the folder vscode is opened on.
fs.readFile("./docs/blogs1.txt", (err, data) => {
  // this is a asynchronuous process
  if (err) console.log(err);
  console.log(data.toString());
});

fs.readFile("./docs/blogs2.txt", (err, data) => {
  // this is a asynchronuous process
  if (err) console.log(err);
  console.log(data.toString());
});

// writing files
// existing file - overwrites
// new file - create new file at location
fs.writeFile("./docs/blogs1.txt", "hello, world!", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blogs2.txt", "hello, world!", () => {
  console.log("file was written");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
    console.log("folder deleted");
  });
}

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) console.log(err);
    console.log("text file deleted");
  });
} else {
  fs.writeFile("./docs/deleteme.txt", "delete me", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
}

console.log("last line");
