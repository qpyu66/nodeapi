import mongoose from "mongoose";
import config from "config";
import log from "../logger";


async function connect() {
    const dbUri = config.get<string>("dbUri");
  
    try {
      await mongoose.connect(dbUri);
      log.info("DB connected");
    } catch (error) {
      log.error("Could not connect to db");
      process.exit(1);
    }
  }

// function connect(){
//     const dbUri = config.get("dbUri") as string;

//     return mongoose
//     .connect(dbUri
//     //     , {
//     //     useNewUrlParser: true,
//     //     userUnifiedTopology: true,
//     // }
//     )
//     .then(() => {
//         log.info("Database connected");
//     })
//     .catch((error) => {
//         log.error("db error",error);
//         process.exit(1);
//     });
// }

export default connect;