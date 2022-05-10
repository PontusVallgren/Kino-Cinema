import {Movie, Sort} from "../../types"

const sortData = (data: Movie[], type: string, size: string) => {
    const index = parseInt(size)
    
    if (type === Sort.RATING) {
            return data.sort((a, b) => parseInt(b.rating) - parseInt(a.rating)).slice(0, index)
    } else if (type === Sort.ORDER) {
            return data.sort((a, b) => a.title.localeCompare(b.title)).slice(0, index)
    } else {
            return data.slice(0, index)
    }
}

export {sortData}
