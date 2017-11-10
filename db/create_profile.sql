update users
set username = $2
, addiction_type=$3
, addiction_date = $4
, first_name = $5
, last_name = $6
, sex = $7
, birthday = $8
, phone_number = $9
, profile_pic = $10
, about_me = $11
where id = $1
RETURNING *;