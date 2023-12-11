import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";


class JotService {
  createJot(formData){
    const newJot = new Jot(formData)
    AppState.jots.push(newJot)
  }
}

export const jotService = new JotService()