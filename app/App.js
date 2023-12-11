import { JotController } from "./controllers/JotController.js";

class App {

    JotController = new JotController()

}


const app = new App()
// @ts-ignore
window.app = app