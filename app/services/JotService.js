import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";


class JotService {
  createJot(formData){
    const newJot = new Jot(formData)
    AppState.jots.push(newJot)
  }
  openJot(jotId){
    const newActiveJot = AppState.jots.find(jot => jot.id == jotId)
    AppState.activeJot = newActiveJot
  }
  saveJot(newBody){
    const activeJotBody = AppState.activeJot
    activeJotBody.body = newBody
    AppState.emit('activeJot')
    saveState('jots', AppState.jots)
  }
  loadJot(){
    const loadingJots = loadState('jots', [Jot])
    AppState.jots = loadingJots
  }
}

export const jotService = new JotService()