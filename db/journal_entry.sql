insert into journal
(journal_entry, journal_date, journal_time, journal_title)
values
($1, $2, $3, $4)
RETURNING *;