import api from "../api";
import {render} from "./global";

export default function (id: number, item: string, status: "DONE" | "NOT_DONE") {
    let locked = false;

    let remove = document.createElement("span");
    remove.classList.add("cancel");
    remove.innerHTML = " &times;";
    remove.onclick = () => {
        locked = true;
        api.remove(id).catch(() => alert("서버 오류")).finally(render);
    };

    let label = document.createElement("label");
    label.htmlFor = id.toString();
    label.innerText = item;
    label.appendChild(remove);

    let input = document.createElement("input");
    input.id = id.toString();
    input.type = "checkbox";
    if (status === "DONE") {
        input.checked = true;
    }
    input.oninput = (value) => {
        if (locked) {
            return;
        }
        let current = (value.target as HTMLFormElement).checked;
        api.update(id, item, current ? "DONE" : "NOT_DONE").catch(() => alert("서버 오류")).finally(render);
    };

    let li = document.createElement("li");
    li.classList.add("item");
    li.appendChild(label);
    li.appendChild(input);

    return li;
}
