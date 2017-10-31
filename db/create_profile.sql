insert into profile
(userId, username, addiction_type, addiction_time)
values
($1, $2, $3, $4)
RETURNING *;