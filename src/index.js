const express = require("express");
const path = require("path");
const routes = require("./routes");
const exphbs = require("express-handlebars");

const connection = require("./config/connection");

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 4000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

const init = async () => {
  try {
    await connection.sync({ force: false });

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
