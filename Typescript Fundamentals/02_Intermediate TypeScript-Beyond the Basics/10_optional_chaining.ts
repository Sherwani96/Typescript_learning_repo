interface Pii {
    age?: number;
    address?: string;
};

interface SearchResults {
    name: string;
    pii?: Pii;

};

class Database {
    search(name: string): SearchResults | undefined {
        switch (name) {
            case "John":
                return {
                    name: "John",
                    pii: {
                        age: 30
                    },
                };
            case "Jane":
                return {
                    name: "Jane Doe",
                };
            default:
                return undefined;
        }
    };
};

const database = new Database();

// optionaal chaining
{
    const result = database.search("John");
    if (result?.pii?.age) {
        console.log(`name is ${result.name} age is ${result.pii.age}`);
    }
}