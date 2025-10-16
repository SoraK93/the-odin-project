import * as fs from "fs";

const readStream = fs.createReadStream("./docs/blogs3.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream("./docs/blogs4.txt")

readStream.on("data", (chunk) => {
  console.log("-----NEW CHUNK-----");
  console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n")
//   writeStream.write(chunk)
});

// piping
readStream.pipe(writeStream)
// this code does the same thing as 
//   writeStream.write("\nNEW CHUNK\n")
//   writeStream.write(chunk)
