// function to return what should be displayed for each
function warrantyInfo(warranty) {
    switch (warranty) {
        case "standard":
            return "90 days warranty";
        case "extended":
            return "180 days extended warranty";
    }
    ;
}
;
;
function printLine(item) {
    console.log(`Item ${item.name}`);
    console.log(`Quantity ${item.quantity}`);
    console.log(`Warranty ${item.warranty}`);
    if (item.warranty !== undefined) {
        console.log(`Warranty Info ${warrantyInfo(item.warranty)}`);
    }
    else {
        console.log("No warranty");
    }
    ;
}
;
const boxFan = {
    name: "Box Fan",
    quantity: 1
};
printLine(boxFan);
const heater = {
    name: "Box heater",
    quantity: 333,
    warranty: "standard",
};
printLine(heater);
export {};
