import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }

    if (/[^a-zA-Z\s]/.test(name)) {
        return null;
    }

    const trimmedName = name.trim();
    if (trimmedName === "") {
        return "";
    }

    return trimmedName
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Format Name Function");

// Valid Input

tests.isEqual(formatName("john doe"), "John Doe", "String 'john doe' should be formatted to 'John Doe'");
tests.isEqual(formatName("  john  "), "John", "String '  john  ' should be formatted to 'John'");
tests.isEqual(formatName("JOHN DOE"), "John Doe", "String 'JOHN DOE' should be formatted to 'John Doe'");

// Invalid Input
tests.isEqual(formatName(42), null, "Non-string input 42 should return to null");
tests.isEqual(formatName(null), null, "Non-string input null should return null");
tests.isEqual(formatName("john@doe"), null, "String 'john@doe' should return null");
tests.isEqual(formatName("123"), null, "String '123' should return null");

// Edge Cases
tests.isEqual(formatName(""), "", "Empty string should return an empty string");
tests.isEqual(formatName("  "), "", "Whitespace-only string should return an empty string");
tests.isEqual(formatName("   john   doe   "), "John Doe", "String '   john   doe   ' should be formatted to 'John Doe'");
//#endregion