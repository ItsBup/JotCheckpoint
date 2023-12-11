import { generateId } from "../utils/GenerateId.js";
import { AppState } from "../AppState.js";

export class Jot {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body || ''
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
        <span>${this.name}<i class="mdi mdi-circle"></i></span>
        <span>${formattedDate}</span>
        <span>
          <button onclick="app.JotController.openJot('${this.id}')" class="btn btn-outline-dark" title="open Jot"><i class="mdi mdi-folder-open"></i></button>
          <button onclick="app.JotController.deleteJot('${this.id}')" class="btn btn-outline-danger" title="delete Jot"><i class="mdi mdi-trash-can-outline"></i></button>
        </span>
      </div>
    `
  }

  get ActiveNoteTemplate(){
    const formattedDate = this.formattedCreatedDate();
    return `
      <div class="row bg-dark">
        <div class="col-4 text-light">
          <h4 class="text-uppercase fw-bold">${this.name} <i class="mdi mdi-circle"></i></h4>
          <h6>Created at ${formattedDate}</h6>
          <h6>Updated at updatedDate</h6>
        </div>
        <div class="col-8">
          <textarea rows="20" class="w-100" id="active-jot-body" maxlength=2000>${this.body}</textarea>
        </div>
        <button onclick="app.JotController.saveThisJot()" class="btn btn-danger">save Jot<i class="mdi mdi-content-save"></i></button>
      </div>
    `
  }

}