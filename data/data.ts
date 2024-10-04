export { type book, BOOKS_DATA };

interface book {
    id: string;
    title: string;
    author: string;
}

const BOOKS_DATA: book[] = [
    { id: "1", title: "The Way", author: "Sanic" },
    { id: "2", title: "Vendor", author: "Anything" },
];
