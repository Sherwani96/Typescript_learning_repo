// genereic is an  alternate of union type

function getFirst<T>(arr: T[]): T | undefined {
    if (arr.length > 0) {
        return arr[0];
    }
    return undefined;
};

getFirst([12,344]);