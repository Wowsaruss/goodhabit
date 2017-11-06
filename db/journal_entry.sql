insert into journal
(journal_entry, user_id, journal_date, journal_time)
values
($1, $2, $3, $4)
RETURNING *;