export function push(array, item) {
    if (!Array.isArray(array)) {
        throw new Error('El imput debe ser tipo array');
    }
    array[array.length] = item;
    return array.length;
}
