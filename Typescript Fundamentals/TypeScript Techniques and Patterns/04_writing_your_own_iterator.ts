function* genValues(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
};

const values = genValues();
values.next();  // prints value: 1
values.next();  // prints value: 2
values.next();  // prints value: 3
