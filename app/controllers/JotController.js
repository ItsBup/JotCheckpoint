import { AppState } from "../AppState.js"
import { examplesService } from "../services/ExampleService.js"

function _drawNotes() {
  console.log('AHHHH')
}

export class JotController {
  constructor() {
    console.log('JotController has loaded')
    AppState.on('jots', _drawNotes)
  }

}
