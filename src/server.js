const Hapi = require("@hapi/hapi");
const books_routes = require("./api/books/routes");

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });

  server.route(books_routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
