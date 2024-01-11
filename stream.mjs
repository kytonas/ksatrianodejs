import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Ksatria\n");
writer.write("Faikar\n"); 
writer.write("Nasywaan\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.info(data.toString());
});