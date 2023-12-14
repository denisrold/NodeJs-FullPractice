import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";
import chalk from "chalk";

let inputFolder = "src";
let outputFolder = "opt";
//set the image size.
let targetWidth = 1920;

//I do it asynchronously to process various images at the same time.
//this speed up the proccess.
const proccessImg = async () => {
  try {
    //reading directory
    const files = await fse.readdir(inputFolder);

    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      //sharp works with promises // .toFile(outputPath) -> this is what handles the optimized file.
      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      imagemin([outputPath], {
        outputFolder,
        plugins: [
          imageminJpegtran({ quality: 80 }), // this compresses the image eighty percent.
          imageminPngquant(), // compress image png
          imageminSvgo(), // compress SVG image
          imageminWebp({ quality: 80 }), // Compressing Webp with image hight quality at eighty percent
          imageminGifsicle(), // compress gif image.
        ],
      });
      console.log(chalk.blueBright.bold(`The ${file} has been Optimizated!`));
    }

    console.log(
      chalk.green.bold("The optimization process has successfully finished!!")
    );
  } catch (err) {
    console.error(err);
  }
};

proccessImg();
