type TypeVariant = 'maxValue' | 'startValue'

export const getItemFromLocalStorage = (name: TypeVariant) => {
    const item = localStorage.getItem(name)
    return item ? JSON.parse(item) : null
}

