class CustomString {
    constructor(str) {
        this.data = str.split('');
    }

    length() {
        let dai = 0;
        for (let i in this.data) {
            if (this.data.hasOwnProperty(i)) {
                dai++;
            }
        }
        return dai;
    }

    charAt(index) {
        if (index < 0 || index >= this.data.length) {
            throw new Error("Index out of bounds");
        }
        return this.data[index];
    }

    push(char) {
        this.data.push(char);
    }

    concat(other) {
        if (other instanceof CustomString) {
            return new CustomString(
                this.data.concat(other.data).join(''));
        }
        throw new Error("Parameter must be a CustomString object");
    }

    replace(oldChar, newChar) {
        const newData = this.data.map(
            char => (char === oldChar ? newChar : char)
            );
        return new CustomString(newData.join(''));
    }

    substring(start, end) {
        if (start < 0 || end > this.data.length) {
            throw new Error("Invalid start or end index");
        }
        if (start > end) {
            var temp = start
            start = end
            end = temp
        }
        const newData = this.data.slice(start, end);
        return new CustomString(newData.join(''));
    }

    toString() {
        return this.data.join('');
    }
}

// Example usage
const customStr = new CustomString("Hello, World!");

customStr.push('-');
const otherStr = new CustomString("Java is great!");
const concatenated = customStr.concat(otherStr);
const replaced = concatenated.replace('a', 'A');
const substring = replaced.substring(18, 10);

console.log(customStr.toString());     // Output: "Hello, World! "
console.log(concatenated.toString());  // Output: "Hello, World! Java is great!"
console.log(replaced.toString());      // Output: "Hello, World! JAvA is greAt!"
console.log(substring.toString());     // Output: "JAvA"
console.log(substring.length())
console.log(concatenated.charAt(4)) // Output: "o"