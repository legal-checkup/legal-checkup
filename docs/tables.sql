-- ACCOUNT
CREATE TABLE checkup_public.account (
    id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
    name public.char_64,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE checkup_public.account OWNER TO lc_postgraphile;

COMMENT ON TABLE checkup_public.account IS 'An account (user) for the Legal Checkup app.';
COMMENT ON COLUMN checkup_public.account.id IS 'The primary unique ID for this account.';
COMMENT ON COLUMN checkup_public.account.name IS 'The name for the user of this account.';
COMMENT ON COLUMN checkup_public.account.created_at IS 'The date and time this account was created.';
COMMENT ON COLUMN checkup_public.account.updated_at IS 'The date and time this account was last updated.';

ALTER TABLE ONLY checkup_public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);

-- CREDENTIAL
CREATE TABLE checkup_private.credential (
    account_id uuid NOT NULL,
    email public.email NOT NULL,
    password_hash text NOT NULL,
    is_admin bool NOT NULL DEFAULT FALSE
);

ALTER TABLE checkup_private.credential OWNER TO lc_postgraphile;

COMMENT ON TABLE checkup_private.credential IS 'Private information about a user''s account.';
COMMENT ON COLUMN checkup_private.credential.account_id IS 'The id of the user associated with this account.';
COMMENT ON COLUMN checkup_private.credential.email IS 'The email address of the user associated with this account.';
COMMENT ON COLUMN checkup_private.credential.password_hash IS 'An opague hash of the account password.';
COMMENT ON COLUMN checkup_private.credential.is_admin IS 'Whether this account holder has administrative privileges (default FALSE).';

ALTER TABLE ONLY checkup_private.credential
    ADD CONSTRAINT credential_pkey PRIMARY KEY (account_id);

ALTER TABLE ONLY checkup_private.credential
    ADD CONSTRAINT credential_email_key UNIQUE (email);

ALTER TABLE ONLY checkup_private.credential
    ADD CONSTRAINT credential_account_id_fkey FOREIGN KEY (account_id) REFERENCES checkup_public.account(id) ON DELETE CASCADE;


-- QUESTION
CREATE TABLE checkup_public.question (
    id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
    question public.x_h_t_m_l NOT NULL,
    result public.x_h_t_m_l NOT NULL,
    example public.x_h_t_m_l,
    resource_url public.u_r_l,
    account uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE checkup_public.question OWNER TO cp_postgraphile;

COMMENT ON TABLE checkup_public.question IS 'A image question uploaded by an account holder.';
COMMENT ON COLUMN checkup_public.question.id IS 'The primary key for this question.';
COMMENT ON COLUMN checkup_public.question.question IS 'The question as XHTML content (required).';
COMMENT ON COLUMN checkup_public.question.result IS 'The result for the results page as XHTML content (required).';
COMMENT ON COLUMN checkup_public.question.example IS 'An example to help understand the question as XHTML content (optional).';
COMMENT ON COLUMN checkup_public.question.resource_url IS 'A URL linking to more information or a reference (optional).';
COMMENT ON COLUMN checkup_public.question.account IS 'The id of the account that created this question.';
COMMENT ON COLUMN checkup_public.question.created_at IS 'The date and time this question was created.';

ALTER TABLE ONLY checkup_public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);

ALTER TABLE ONLY checkup_public.question
    ADD CONSTRAINT question_account_fkey FOREIGN KEY (account) REFERENCES checkup_public.account(id);
