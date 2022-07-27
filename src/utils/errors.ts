enum VALUES {
    INCORRECT = 'Incorrect'
}

export const errors = (start: number, max: number) => {
    return start >= max || start < 0 || max < 0 ? 'Incorrect value!' : 'enter values and enter "set"'
}

export const isErrorMes = (start: number, max: number) => {
    return errors(start, max).includes(VALUES.INCORRECT)
}


export const isErrorInputMax = (start: number, max: number) => {
    return max < 0 || max <= start
}

export const isErrorInputStart = (start: number, max: number) => {
    return start < 0 || start >= max
}
