insert into users
(username, addiction_type, addiction_date, first_name, last_name, sex, birthday, phone_number, profile_pic, about_me)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;