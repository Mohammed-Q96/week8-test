
BEGIN;
  DROP TABLE IF EXISTS city,
  test_user
  CASCADE;

CREATE TABLE city
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE test_user
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  PASSWORD VARCHAR(255) NOT NULL
);

INSERT INTO city
  (name, country)
VALUES
  ('Gaza', 'Palestine'),
  ('London', 'UK'),
  ('New York', 'USA');
COMMIT;
