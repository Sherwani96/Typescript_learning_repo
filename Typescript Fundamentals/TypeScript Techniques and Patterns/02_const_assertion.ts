type Rgb = "red" | "green" | "blue";
const red: Rgb = "red"


{
    const Color = ["red", "green", "blue"] as const;  // here it is telling typescript that this data is never going to be changed and is read only data
    type Color = (typeof Color)[number];

    const blue: Color = "blue"
}

{
    const Department = {
        Executive: "top floor",
        sales: "middle floor",
        warehouse: "bottom floor",
    } as const;
    
    type Department = (typeof Department)[keyof typeof Department];

    let k: keyof typeof Department;
    for (k in Department) {
        console.log(`Key = ${k}, floor = ${Department[k]}`)
    }
}