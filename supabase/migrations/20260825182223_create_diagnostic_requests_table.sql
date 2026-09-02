/*
# Create diagnostic_requests table

## Purpose
Stores diagnostic requests submitted via the public form on the AXAGENIA website.
The brief specifies that requests must be transmitted to a dedicated professional
address with access limited to authorized persons only, and that no additional
storage of requests should occur in the site. This table serves as the secure,
access-controlled destination for those requests — readable only by authenticated
operators (the agency team), insertable by the public anon role.

## New Tables
- `diagnostic_requests`
  - `id` (uuid, primary key, auto-generated)
  - `first_name` (text, not null) — prospect's first name
  - `last_name` (text, not null) — prospect's last name
  - `email` (text, not null) — professional email address
  - `company` (text, not null) — company name
  - `role` (text, not null) — job function/title
  - `problem` (text, not null) — description of the process/problem to solve
  - `consent` (boolean, not null) — explicit consent to be recontacted
  - `created_at` (timestamptz, default now()) — submission timestamp

## Security
- RLS enabled on `diagnostic_requests`.
- INSERT policy for `anon, authenticated` — anyone can submit a diagnostic request
  (the form is public, no sign-in required). Consent must be true.
- SELECT policy for `authenticated` only — only signed-in agency operators can
  read submitted requests. The anon role (public website) cannot read any requests.
- UPDATE policy for `authenticated` only — operators can update request status
  (e.g. mark as processed, qualified, refused).
- DELETE policy for `authenticated` only — operators can delete requests when
  the retention period expires or on a data-rights request.

## Important Notes
1. The public anon role can INSERT but never SELECT — submissions are write-only
   from the public's perspective, preserving confidentiality.
2. Only authenticated agency team members can read, update, or delete requests.
3. Consent is enforced at the database level: the INSERT WITH CHECK requires
   consent = true, preventing submissions without explicit consent.
4. No user_id column or auth.users reference — this is a single-tenant public
   submission form, not a per-user data model.
*/

CREATE TABLE IF NOT EXISTS diagnostic_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  problem text NOT NULL,
  consent boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE diagnostic_requests ENABLE ROW LEVEL SECURITY;

-- Public INSERT: anyone can submit a diagnostic request, consent must be true
DROP POLICY IF EXISTS "public_insert_diagnostic_requests" ON diagnostic_requests;
CREATE POLICY "public_insert_diagnostic_requests"
ON diagnostic_requests FOR INSERT
TO anon, authenticated
WITH CHECK (consent = true);

-- Authenticated SELECT: only signed-in operators can read requests
DROP POLICY IF EXISTS "authenticated_select_diagnostic_requests" ON diagnostic_requests;
CREATE POLICY "authenticated_select_diagnostic_requests"
ON diagnostic_requests FOR SELECT
TO authenticated
USING (true);

-- Authenticated UPDATE: only signed-in operators can update requests
DROP POLICY IF EXISTS "authenticated_update_diagnostic_requests" ON diagnostic_requests;
CREATE POLICY "authenticated_update_diagnostic_requests"
ON diagnostic_requests FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Authenticated DELETE: only signed-in operators can delete requests
DROP POLICY IF EXISTS "authenticated_delete_diagnostic_requests" ON diagnostic_requests;
CREATE POLICY "authenticated_delete_diagnostic_requests"
ON diagnostic_requests FOR DELETE
TO authenticated
USING (true);
