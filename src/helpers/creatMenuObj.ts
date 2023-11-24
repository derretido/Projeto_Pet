type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObjetcs = (activeMenu : MenuOptions) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true 
    }
    returnObject
}