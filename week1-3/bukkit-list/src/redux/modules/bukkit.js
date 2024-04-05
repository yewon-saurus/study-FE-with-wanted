const initialState = {
    bukkit_list: [
        {
            id: 1,
            title: "영화관 가기",
            detail: "공포 영화 혼자 보기 도전!",
            done: true,
        },
        {
            id: 2,
            title: "책 읽기",
            detail: "사놓고 안 보고 있는 책이 많다.. 올해에는 꼭 전부 읽기!!",
            done: false,
        },
        {
            id: 3,
            title: "수영 배우기",
            detail: "물에 뜨는 것부터 시작해야 된다",
            done: false,
        },
    ]
}

const ADD = "bukkit/ADD";
const DELETE = "bukkit/DELETE";
const MODIFY_CONTENT = "bukkit/MODIFY_CONTENT";
const MODIFY_DONE = "bukkit/MODIFY_DONE";

export const addBukkitItem = (item) => {
    return {
        type: ADD,
        bukkitItem: item,
    }
}
export const deleteBukkitItem = (id) => {
    return {
        type: DELETE,
        bukkitItemId: id,
    }
}
export const modifyBukkitItemContent = (content) => {
    return {
        type: MODIFY_CONTENT,
        bukkitItemContent: content,
    }
}
export const modifyBukkitItemDone = (id, done) => {
    return {
        type: MODIFY_DONE,
        bukkitItemId: id,
        bukkitItemDone: done,
    }
}

export default function (state=initialState, action) {
    switch (action.type) {
        case "bukkit/ADD": {
            return {
                bukkit_list: [...state.bukkit_list, {
                    "id": state.bukkit_list[state.bukkit_list.length - 1].id + 1,
                    "title": action.bukkitItem,
                    "detail": "",
                    "done": false,
                }],
            }
        }
        case "bukkit/DELETE": {
            const newBukkitList = state.bukkit_list.filter((ele) => ele.id !== action.bukkitItemId);
            return {
                bukkit_list: newBukkitList
            }
        }
        case "bukkit/MODIFY_CONTENT": {
            return {

            }
        }
        case "bukkit/MODIFY_DONE": {
            const newBukkitList = state.bukkit_list.map((ele) => ele.id === action.bukkitItemId ? {...ele, done: !action.bukkitItemDone} : ele)
            return {
                bukkit_list: newBukkitList,
            }
        }
        default: {
            return state;
        }
    }
}