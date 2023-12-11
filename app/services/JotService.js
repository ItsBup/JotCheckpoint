import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";


class JotService {
  createJot(formData){
    const newJot = new Jot(formData)
    AppState.jots.push(newJot)
  }
  openJot(jotId){
    const newActiveJot = AppState.jots.find(jot => jot.id == jotId)
    AppState.activeJot = newActiveJot
  }
}

export const jotService = new JotService()