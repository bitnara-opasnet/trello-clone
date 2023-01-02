import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector<number>({
    key: "hours",
    get: ({get}) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    set: ({set}, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    }
});

export interface ITodo {
    id: number;
    text: string;
};

interface IToDoState {
    [key: string]: ITodo[];
};


export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        "Doing": [],
        "Done": [],
    },
});
