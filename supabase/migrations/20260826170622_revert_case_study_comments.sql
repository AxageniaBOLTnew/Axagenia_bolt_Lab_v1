/*
# Revert case study comments

## Purpose
Removes the case study comments feature that was previously added.

## Data impact
- Drops the `case_study_comments` table.
- This permanently deletes comments, names, and email addresses stored by that feature.

## Security impact
- Removes all RLS policies and indexes attached to `case_study_comments` together with the table.
*/

DROP TABLE IF EXISTS case_study_comments;
