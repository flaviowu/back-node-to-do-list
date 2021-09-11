const mongoose = require("mongoose");

function Conn(url, user, pass, banco) {
  console.log(`DB em ${url}/${banco}`)
  mongoose
    .connect(`${url}/${banco}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB conectado!");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn;
