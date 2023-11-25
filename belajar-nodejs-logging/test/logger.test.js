import winston from "winston";

test("Create New Logger", () => {
  const logger = winston.createLogger({});

  logger.log({
    level: "info",
    message: "Hello Logging!",
  });
});
