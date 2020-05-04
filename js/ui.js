class UI {
  ShowMessage(message, classes, container) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(message));
    //select content
    const divMessage = document.querySelector(`.${container}`);
    divMessage.appendChild(div);

    setTimeout(() => {
      document.querySelector(`.${container} div`).remove();
    }, 3000);
  }
}
