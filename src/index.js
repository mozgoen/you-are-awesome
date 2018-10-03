// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};

const createProtoMagicObject = () => {
    let variable = Symbol;
    variable.__proto__ = variable.prototype;
    return variable;
};

let increment = 1;
const incrementor = () => {
    let funcFour = function () {
    };
    funcFour.valueOf = function () {
        return increment += 7;
    };

    let funcThree = function () {
        return funcFour;
    };
    funcThree.valueOf = function () {
        return increment += 7;
    };

    let funcTwo = function () {
        return funcThree;
    };
    funcTwo.valueOf = function () {
        return 3;
    };

    let funcOne = function () {
        return funcTwo;
    };
    funcOne.valueOf = function () {
        return 10;
    };

    return function () {
        return funcOne;
    }
};

let asyncIncrement = 1;
const asyncIncrementor = () => {
    return new Promise((resolve, reject) => {
        resolve(asyncIncrement++);
    });
};

const createIncrementer = () => {
    let obj = {
        from: 1,
        to: 11,

        [Symbol.iterator]() {
            return this;
        },

        next() {
            if (this.current === undefined) {
                this.current = this.from;
            }

            if (this.current < this.to) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                delete this.current;
                return {
                    done: true
                };
            }

        }
    }

    return obj
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(param);
        }, 1000)
    });
};

const getDeepPropertiesCount = (object) => {
    let count = 0;
    for (let key in object) {
        let keyInObj = object[key];
        count++;
        count += getDeepPropertiesCount(keyInObj);
    }

    return count;
};

const createSerializedObject = () => {
    let object = null;
    return object;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
    const compareFunction = (elem1, elem2) => {
        return elem1.__proto__ < elem2.__proto__;
    };
    arr.sort(compareFunction);

    return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;