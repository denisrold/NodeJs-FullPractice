import express from "express";
import fs from "fs/promises";
import path from "path";
import cors from "cors";
import markdownIt from "markdown-it";
import fm from "front-matter";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cual es la carpeta de las vistas
//definir direccion de Motor de plantillas :
app.set("views", path.join(__dirname, "views"));
//cual es el template engine
//Por esta linea de codigo es que no necesito importar pug.o unjunks o ejs o el motor de plantillas que use.
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//Rutas dinamicas para otros archivos no pug,  carpeta pages.
const pagesDir = path.join(__dirname, "pages");
const files = await fs.readdir(pagesDir);

//logica para archivos html y md
files.forEach((file) => {
  const filePath = path.join(pagesDir, file);
  let extname = path.extname(file);

  if (extname === ".md" || extname === ".pug" || extname === ".html") {
    let fileName = path.basename(file, extname);
    app.get(`/${fileName}`, async (req, res) => {
      try {
        if (extname === ".pug") {
          res.render(fileName);
        }
        if (extname === "html") {
          res.sendFile(filePath);
        }
        if (extname === ".md") {
          let fileContent = await fs.readFile(filePath, "utf-8");
          let { attributes: frontMatterAttributes, body } = fm(fileContent);
          let contentHTML = markdownIt().render(body);
          res.render("layout-markdown", { ...attributes, contentHTML });
        }
      } catch (err) {
        res.status(404).render("error-404");
      }
    });
  }
});

//Rutas Principales
app.get("/", (req, res) => {
  res.render("index");
});
//Ruta del Error 404
app.use((req, res) => {
  res.status(404).render("error-404");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
