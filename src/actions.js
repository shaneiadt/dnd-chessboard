export const moveKnight = (x, y) => {
    return {
        type: 'MOVE_KNIGHT',
        payload: [x, y]
    }
}