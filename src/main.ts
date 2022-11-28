import './reset.css'
import './style.css'
import {worker} from './mocks/browser'
import {render} from "./components/global";
import api from "./api";

worker.start({onUnhandledRequest: 'bypass'})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <div class="wrapper">
      <h1 class="title">Yourssu Todo List</h1>
      <form class="toto-form">
        <input placeholder="Write your todo.." />
        <button type="submit">Submit</button>
      </form>
      <ul class="item-list" id="list">
      </ul>
    </div>
  </main>
`

const submit = (event: SubmitEvent) => {
    event.preventDefault();

    let element = document.querySelector<HTMLInputElement>("#app form input")!;
    let item = element.value;
    api.post(item, "NOT_DONE").then(() => {
        render().then(() => {
            element.value = "";
        });
    });
};

document.querySelector<HTMLDivElement>("#app form")!.onsubmit = submit;

render()
