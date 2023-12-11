import { generateId } from "../utils/GenerateId.js";
import { AppState } from "../AppState.js";

export class Jot {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.color = data.color
    this.createdDate = new Date(Date.now())
  }

  formattedCreatedDate() {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return this.createdDate.toLocaleDateString(undefined, options);
  }

  get jotList(){
    
    const formattedDate = this.formattedCreatedDate();
    return `
      <div class="text-dark d-flex justify-content-between">
        <span>${this.name}</span>
        <span>${formattedDate}</span>
        <span>
          <button onclick="app.JotController.openJot('${this.id}')" class="btn btn-outline-dark" title="open Jot"><i class="mdi mdi-folder-open"></i></button>
        </span>
      </div>
    `
  }

  get ActiveNoteTemplate(){
    const formattedDate = this.formattedCreatedDate();
    return `
      <div class="col-12">
        <h1 class="text-uppercase fw-bold">${this.name} ${formattedDate}</h1>
        <p>${this.body}</p>
      </div>
    `
  }

}