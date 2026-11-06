export function capitalize(input: string): string {
        if (input.length === 0) return input;
        return input[0].toUpperCase() + input.slice(1);
}


export function reverseString(input: string): string {
        return input.split("").reverse().join("");
}
