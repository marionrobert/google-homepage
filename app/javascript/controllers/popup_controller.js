import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="popup"
export default class extends Controller {
  static targets = ["formRaccourci"]

  connect() {
    // console.log("Hello from popup controller")
  }

  display(event){
    event.preventDefault();
    this.formRaccourciTarget.classList.add("show");
  }

  cancel(event){
    event.preventDefault();
    this.formRaccourciTarget.classList.remove("show");
  }
}
