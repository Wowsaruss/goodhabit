CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT,
    auth_id TEXT
);

create table users (
    id SERIAL PRIMARY KEY,
    email text,
    password text,
    auth_id text,
    first_name text,
    last_name text,
    sex text,
    birthday text, 
    phone_number text,
    username text,
    addiction_date text,
    addiction_type text,
    profile_pic text,
    about_me text
);

create table profile (
    id SERIAL PRIMARY KEY,
    userId integer,
    username text,
    addiction_type text,
    addiction_time text
);

CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    journal_entry TEXT,
    journal_date TEXT,
    journal_time TEXT,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    oneday TEXT,
    threeday TEXT,
    oneweek TEXT,
    twoweek TEXT,
    threeweek TEXT,
    onemonth TEXT,
    twomonth TEXT,
    threemonth TEXT,
    fourmonth TEXT,
    fivemonth TEXT,
    sixmonth TEXT,
    oneyear TEXT
);


