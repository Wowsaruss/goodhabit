insert into journal
(journal_entry)
values
($1)
RETURNING *;