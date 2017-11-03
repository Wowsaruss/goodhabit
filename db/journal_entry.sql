insert into journal
(journal_entry, user_id)
values
($1, $2)
RETURNING *;