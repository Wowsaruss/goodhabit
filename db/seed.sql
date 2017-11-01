CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    auth_id TEXT
);

create table profile (
    id SERIAL PRIMARY KEY,
    userId integer,
    username text,
    addiction_type text,
    addiction_time text
);



