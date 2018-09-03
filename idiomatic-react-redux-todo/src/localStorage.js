export const loadState = () => {
    try {
        const searlizedState = localStorage.getItem("state") || {};
        if(searlizedState === null) {
            return undefined;
        }
        return JSON.parse(searlizedState);
    }catch (e) {
        console.log("caught error loadState with localStorage");
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        const seralizedState = JSON.stringify(state);
        localStorage.setItem("state", seralizedState);
    } catch (e) {
        //console.log(e)
    }
};

