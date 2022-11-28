import api from "../api";
import unit from "./unit";

export const render = async () => {
    try {
        let ret = await api.get();
        let json = await ret.json();
        let todo = json.todos;
        console.log(todo);

        let element = document.querySelector("#list")!;
        element.innerHTML = "";

        for (let {id, item, status} of todo) {
            element.appendChild(unit(id, item, status));
        }
        return true;
    } catch (e) {
        alert("서버 오류");
        return false;
    }
};
