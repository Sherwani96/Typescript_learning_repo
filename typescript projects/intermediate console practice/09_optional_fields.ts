type Warranty = "standard" | "extended";

// function to return what should be displayed for each
function warrantyInfo(warranty: Warranty): string {
    switch (warranty) {
        case "standard":
            return "90 days warranty";
        case "extended":
            return "180 days extended warranty";
    };
};

interface LineItem {
    name: string;
    quantity: number;
    // undefined if not present
    warranty?: Warranty;
};

function printLine(item: LineItem): void {
    console.log(`Item ${item.name}`);
    console.log(`Quantity ${item.quantity}`);
    console.log(`Warranty ${item.warranty}`);


    if (item.warranty !== undefined) {
        console.log(`Warranty Info ${warrantyInfo(item.warranty)}`);
    } else {
        console.log("No warranty");
    };
};

const boxFan: LineItem = {
    name: "Box Fan",
    quantity: 1
};
printLine(boxFan);

const heater: LineItem = {
    name: "Box heater",
    quantity: 333,
    warranty: "standard",
};

printLine(heater);
