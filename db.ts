import { connect } from "mongoose";

const url = `mongodb+srv://haeju:XYxyCkzVK1bDIqis@cluster0.dx8jk.mongodb.net/risbackCinema?retryWrites=true&w=majority`;

// if (!url) {
//   throw Error("DB_URL doesn't exist in .env.local");
// }

console.log(url);
connect(url, (err) => {
  if (err) console.log(err);
  else console.log("mongdb is connected");
});
