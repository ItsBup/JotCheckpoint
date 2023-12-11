import { AppState } from "../AppState.js"
import { jotService } from "../services/JotService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

function _drawNotes() {
  const jots = AppState.jots
  let content = ''
  jots.forEach(jots => content += jots.jotList)
  document.getElementById('jot-list').innerHTML = content
}

function _drawActiveNote(){
  const activeNote = AppState.activeJot
  let content = activeNote.ActiveNoteTemplate
  document.getElementById('active-jot').innerHTML = content
}

export class JotController {
  constructor() {
    _drawNotes()
    console.log('JotController has loaded')
    AppState.on('activeJot', _drawActiveNote)
    AppState.on('jots', _drawNotes)
    jotService.loadJot()
  }

  createJot(){
    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)
    jotService.createJot(formData)
    form.reset
  }

  openJot(jotId){
    console.log(jotId)
    jotService.openJot(jotId)
  }

  async deleteJot(jotId){
    let isConfirmed = await Pop.confirm("WARNING?!?", 'ONCE YOU TAKE THIS PATH THERE IS NO RETURN', 'Yeah trash it', 'error')
    if( isConfirmed){
    jotService.deleteJot(jotId)
    }
  }

  saveThisJot(jotId){
    const jotUpdate = AppState.jots.find(jot => jot.id == jotId)
    jotUpdate.updateUpdatedDate()
    const newBody = document.getElementById('active-jot-body').value
    console.log('saving', newBody)
    jotService.saveJot(newBody)
  }
}
