INSERT INTO users
(auth_id, username, addiction_type, addiction_date, first_name, last_name, sex, birthday, phone_number, profile_pic, about_me)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
RETURNING *;