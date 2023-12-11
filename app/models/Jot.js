import { generateId } from "../utils/GenerateId.js";

export class Jot {
  constructor(data) {
    this.id = generateId
    this.name = data.name
    this.body = data.body
    this.color = data.color
    this.createdDate = new Date(data.createdDate)
  }

  get jotList(){
    return `
    <div class="text-light d-flex justify-content-between">
      <span>${this.name}</span>
      <span>${this.createdDate}</span>
      <span>
        <button onclick="app.JotController.openJot('${this.id}')" class="btn btn-outline-light" title="open Jot"><i class="mdi mdi-folder-open"></i></button>
      </span>
    </div>
    `
  }

  get ActiveNoteTemplate(){
    return `
    <div class="col-12">
      <h1 class="text-uppercase fw-bold">${this.name} ${this.createdDate}</h1>
      <p>${this.body}</p>
    </div>
    `
  }

}