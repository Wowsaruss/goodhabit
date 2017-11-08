INSERT INTO users
(username, addiction_type, addiction_date, first_name, last_name, sex, birthday, phone_number, profile_pic, about_me)
VALUES
($2, $3, $4, $5, $6, $7, $8, $9, $10)
WHERE auth_id = $1
RETURNING *;