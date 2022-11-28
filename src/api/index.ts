const get = () => fetch("/todo", {});

const post = (item: string, status: "DONE" | "NOT_DONE") => fetch("/todo", {
    method: "POST",
    body: JSON.stringify({item, status}),
    headers: {
        "Content-Type": "application/json",
    },
});

const update = (id: number, item: string | null, status: "DONE" | "NOT_DONE") => fetch("/todo", {
    method: "PATCH",
    body: JSON.stringify({id, item, status}),
    headers: {
        "Content-Type": "application/json",
    },
});

const remove = (id: number) => fetch("/todo", {
    method: "DELETE",
    body: JSON.stringify({id}),
    headers: {
        "Content-Type": "application/json",
    },
});

export default {get, post, update, remove};
