export { createTemplateIndex };

const createTemplateIndex = () => /*html*/ `
    <!DOCTYPE html>
  <html>
    <head>
        <title>My Reading List</title>
        <script src="https://unpkg.com/htmx.org@2.0.2" integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books">Show books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;
