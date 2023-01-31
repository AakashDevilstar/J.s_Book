const constants = {
    NUMBER : "number",
    TEXT : "text",
    DATE : "date",
    BOOLEAN : "boolean"
}

const {NUMBER, TEXT, DATE, BOOLEAN} = constants;

const inputObjArr = [
    {
        key: "ISBN",
        type : NUMBER,
        id:1,
    },
    {   
        key : "Author Name",
        type : TEXT,
        id:2,
    },
    {
        key : "Book Name",
        type : TEXT,
        id:3,
    },
    {
        key : "Price",
        type : NUMBER,
        id:4,
    },
    {
        key : "Pages",
        type : NUMBER,
        id:5,
    },
    {
        key :  "Discount",
        type : NUMBER,
        id:6,
    },
    {
        key : "Year of Publish",
        type : DATE,
        id:7,
    },
    {
        key : "In Stock",
        type : BOOLEAN,
        id:8,
    }
];