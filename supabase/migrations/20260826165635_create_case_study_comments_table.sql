/*
# Create case_study_comments table

## Purpose
Allows visitors to leave comments on case study articles. No sign-in required —
anyone can submit a comment with their name, email, and message.

## New Tables
- `case_study_comments`
  - `id` (uuid, primary key)
  - `case_study_slug` (text, not null) — matches the slug in the frontend data
  - `author_name` (text, not null) — displayed name of the commenter
  - `author_email` (text, not null) — email of the commenter (not displayed publicly)
  - `content` (text, not null) — the comment body
  - `is_approved` (boolean, default true) — allows moderation if needed later
  - `created_at` (timestamptz, default now())

## Indexes
- Index on `case_study_slug` for fast lookup of comments per article.
- Index on `created_at` for chronological ordering.

## Security (RLS)
- RLS enabled on `case_study_comments`.
- SELECT: anyone (anon + authenticated) can read approved comments — they are public content.
- INSERT: anyone (anon + authenticated) can submit a new comment.
- UPDATE / DELETE: restricted to authenticated only (for future admin moderation).
  Anon users cannot modify or delete comments.
*/

CREATE TABLE IF NOT EXISTS case_study_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_study_slug text NOT NULL,
  author_name text NOT NULL,
  author_email text NOT NULL,
  content text NOT NULL,
  is_approved boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_case_study_comments_slug
  ON case_study_comments (case_study_slug);

CREATE INDEX IF NOT EXISTS idx_case_study_comments_created_at
  ON case_study_comments (created_at DESC);

ALTER TABLE case_study_comments ENABLE ROW LEVEL SECURITY;

-- SELECT: anyone can read approved comments (public content)
DROP POLICY IF EXISTS "read_approved_comments" ON case_study_comments;
CREATE POLICY "read_approved_comments"
  ON case_study_comments FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

-- INSERT: anyone can submit a comment
DROP POLICY IF EXISTS "insert_comments" ON case_study_comments;
CREATE POLICY "insert_comments"
  ON case_study_comments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- UPDATE: only authenticated (future admin moderation)
DROP POLICY IF EXISTS "update_comments" ON case_study_comments;
CREATE POLICY "update_comments"
  ON case_study_comments FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- DELETE: only authenticated (future admin moderation)
DROP POLICY IF EXISTS "delete_comments" ON case_study_comments;
CREATE POLICY "delete_comments"
  ON case_study_comments FOR DELETE
  TO authenticated
  USING (true);
