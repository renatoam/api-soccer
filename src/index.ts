import { app } from "./server";
import "dotenv/config"

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Servidor ON! ☣️'))
