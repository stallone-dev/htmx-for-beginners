import { BOOKS_DATA } from "~/data/data.ts";
import { createBookTemplate } from "./book.ts";

export { createListTemplate };

const createListTemplate = async () => /*html*/ `
<ul>
    ${BOOKS_DATA.map((book) => createBookTemplate(book)).join("")}
</ul>
`;
