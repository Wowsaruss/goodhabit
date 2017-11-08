insert into journal
(userId, journal_entry, journal_date, journal_time)
values
($1, $2, $3, $4)
RETURNING *;