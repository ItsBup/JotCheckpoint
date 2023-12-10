import { AppState } from "../AppState.js"
import { examplesService } from "../services/ExampleService.js"

function _drawNotes() {
  const jots = AppState.jots
  let content = ''
  jots.forEach(jot => content += jots.jotList)
  document.getElementById('jot-list').innerHTML = content
}

export class JotController {
  constructor() {
    _drawNotes()
    console.log('JotController has loaded')
    AppState.on('jots', _drawNotes)
  }

}
