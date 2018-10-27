--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Debian 10.5-1)
-- Dumped by pg_dump version 10.5 (Debian 10.5-1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE legal_checkup;
--
-- Name: legal_checkup; Type: DATABASE; Schema: -; Owner: lc_postgraphile
--

CREATE DATABASE legal_checkup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_NZ.UTF-8' LC_CTYPE = 'en_NZ.UTF-8';


ALTER DATABASE legal_checkup OWNER TO lc_postgraphile;

\connect legal_checkup

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: app_hidden; Type: SCHEMA; Schema: -; Owner: lc_postgraphile
--

CREATE SCHEMA app_hidden;


ALTER SCHEMA app_hidden OWNER TO lc_postgraphile;

--
-- Name: app_jobs; Type: SCHEMA; Schema: -; Owner: lc_postgraphile
--

CREATE SCHEMA app_jobs;


ALTER SCHEMA app_jobs OWNER TO lc_postgraphile;

--
-- Name: app_private; Type: SCHEMA; Schema: -; Owner: lc_postgraphile
--

CREATE SCHEMA app_private;


ALTER SCHEMA app_private OWNER TO lc_postgraphile;

--
-- Name: app_public; Type: SCHEMA; Schema: -; Owner: lc_postgraphile
--

CREATE SCHEMA app_public;


ALTER SCHEMA app_public OWNER TO lc_postgraphile;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: authority; Type: TYPE; Schema: app_private; Owner: lc_postgraphile
--

CREATE TYPE app_private.authority AS ENUM (
    'God',
    'Admin',
    'Staff',
    'Speaker',
    'Panelist',
    'Media',
    'Volunteer',
    'Attendee',
    'Anonymous'
);


ALTER TYPE app_private.authority OWNER TO lc_postgraphile;

--
-- Name: image_media_type; Type: TYPE; Schema: app_public; Owner: lc_postgraphile
--

CREATE TYPE app_public.image_media_type AS ENUM (
    'image/gif',
    'image/png',
    'image/jpeg',
    'image/bmp',
    'image/webp',
    'image/x-icon',
    'image/vnd.microsoft.icon',
    'image/svg+xml'
);


ALTER TYPE app_public.image_media_type OWNER TO lc_postgraphile;

--
-- Name: jwt_token; Type: TYPE; Schema: app_public; Owner: lc_postgraphile
--

CREATE TYPE app_public.jwt_token AS (
	role text,
	account_id uuid
);


ALTER TYPE app_public.jwt_token OWNER TO lc_postgraphile;

--
-- Name: char_128; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_128 AS text
	CONSTRAINT char_128_check CHECK ((char_length(VALUE) <= 128));


ALTER DOMAIN public.char_128 OWNER TO lc_postgraphile;

--
-- Name: char_256; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_256 AS text
	CONSTRAINT char_256_check CHECK ((char_length(VALUE) <= 256));


ALTER DOMAIN public.char_256 OWNER TO lc_postgraphile;

--
-- Name: char_32; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_32 AS text
	CONSTRAINT char_32_check CHECK ((char_length(VALUE) <= 32));


ALTER DOMAIN public.char_32 OWNER TO lc_postgraphile;

--
-- Name: char_48; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_48 AS text
	CONSTRAINT char_48_check CHECK ((char_length(VALUE) <= 48));


ALTER DOMAIN public.char_48 OWNER TO lc_postgraphile;

--
-- Name: char_64; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_64 AS text
	CONSTRAINT char_64_check CHECK ((char_length(VALUE) <= 64));


ALTER DOMAIN public.char_64 OWNER TO lc_postgraphile;

--
-- Name: email; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.email AS text
	CONSTRAINT email_check CHECK ((VALUE ~* '^(("[-\w\s]+")|([\w-]+(?:\.[\w-]+)*)|("[-\w\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)'::text));


ALTER DOMAIN public.email OWNER TO lc_postgraphile;

--
-- Name: password; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.password AS text
	CONSTRAINT password_check CHECK ((char_length(VALUE) >= 8));


ALTER DOMAIN public.password OWNER TO lc_postgraphile;

--
-- Name: u_r_l; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.u_r_l AS text
	CONSTRAINT url_check CHECK ((VALUE ~* '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'::text));


ALTER DOMAIN public.u_r_l OWNER TO lc_postgraphile;

--
-- Name: x_h_t_m_l; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.x_h_t_m_l AS xml;


ALTER DOMAIN public.x_h_t_m_l OWNER TO lc_postgraphile;

--
-- Name: set_account(); Type: FUNCTION; Schema: app_private; Owner: lc_postgraphile
--

CREATE FUNCTION app_private.set_account() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  new.account := current_setting('jwt.claims.account_id', true)::uuid;
  RETURN new;
END;
$$;


ALTER FUNCTION app_private.set_account() OWNER TO lc_postgraphile;

--
-- Name: FUNCTION set_account(); Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_private.set_account() IS 'Sets the account that created a record (triggered).';


--
-- Name: set_created_by(); Type: FUNCTION; Schema: app_private; Owner: lc_postgraphile
--

CREATE FUNCTION app_private.set_created_by() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  new.created_by := current_setting('jwt.claims.account_id', true)::integer;
  RETURN new;
END;
$$;


ALTER FUNCTION app_private.set_created_by() OWNER TO lc_postgraphile;

--
-- Name: set_updated_at(); Type: FUNCTION; Schema: app_private; Owner: lc_postgraphile
--

CREATE FUNCTION app_private.set_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  new.updated_at := current_timestamp;
  RETURN new;
END;
$$;


ALTER FUNCTION app_private.set_updated_at() OWNER TO lc_postgraphile;

--
-- Name: FUNCTION set_updated_at(); Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_private.set_updated_at() IS 'Sets the updated at timestamp for a record (on trigger).';


--
-- Name: authenticate(public.email, public.password); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.authenticate(email public.email, password public.password) RETURNS app_public.jwt_token
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $_$
DECLARE
  account app_private.credential;
BEGIN
  SELECT a.* INTO account
  FROM app_private.credential AS a
  WHERE a.email = $1;

  IF account.password_hash = crypt(password, account.password_hash) THEN
    RETURN ('lc_account', account.account_id)::app_public.jwt_token;
  ELSE
    RETURN NULL;
  END IF;
END;
$_$;


ALTER FUNCTION app_public.authenticate(email public.email, password public.password) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION authenticate(email public.email, password public.password); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.authenticate(email public.email, password public.password) IS 'Authenticates (signs in) an account.';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: account; Type: TABLE; Schema: app_public; Owner: lc_postgraphile
--

CREATE TABLE app_public.account (
    id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
    given_name public.char_48,
    family_name public.char_48,
    bio text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE app_public.account OWNER TO lc_postgraphile;

--
-- Name: TABLE account; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON TABLE app_public.account IS 'An account (user) for the Centripetal app.';


--
-- Name: COLUMN account.id; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.account.id IS 'The primary unique ID for this account.';


--
-- Name: COLUMN account.bio; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.account.bio IS 'A brief bio for this account.';


--
-- Name: COLUMN account.created_at; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.account.created_at IS 'The date and time this account was created.';


--
-- Name: COLUMN account.updated_at; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.account.updated_at IS 'The date and time this account was last updated.';


--
-- Name: current_account(); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.current_account() RETURNS app_public.account
    LANGUAGE sql STABLE
    AS $$
  SELECT *
  FROM app_public.account
  WHERE id = current_setting('jwt.claims.account_id', true)::uuid
$$;


ALTER FUNCTION app_public.current_account() OWNER TO lc_postgraphile;

--
-- Name: FUNCTION current_account(); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.current_account() IS 'Returns the user who was identified by the JWT.';


--
-- Name: full_name(app_public.account); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.full_name(account app_public.account) RETURNS text
    LANGUAGE sql STABLE
    AS $$
  SELECT account.given_name || ' ' || account.family_name
$$;


ALTER FUNCTION app_public.full_name(account app_public.account) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION full_name(account app_public.account); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.full_name(account app_public.account) IS 'Generates the full name from given and family names.';


--
-- Name: generate_u_u_i_d(); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.generate_u_u_i_d() RETURNS uuid
    LANGUAGE plpgsql
    AS $$
DECLARE
  output uuid;
BEGIN
  output := uuid_generate_v1mc();

  RETURN output;
END;
$$;


ALTER FUNCTION app_public.generate_u_u_i_d() OWNER TO lc_postgraphile;

--
-- Name: FUNCTION generate_u_u_i_d(); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.generate_u_u_i_d() IS 'Generates a single v1mc UUID.';


--
-- Name: generate_u_u_i_ds(integer); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.generate_u_u_i_ds(quantity integer) RETURNS uuid[]
    LANGUAGE plpgsql
    AS $_$
DECLARE
  counter integer := 0;
  uuids uuid[];
BEGIN
  WHILE counter < $1 LOOP
    counter := counter + 1;
    uuids := array_append(uuids, uuid_generate_v1mc());
  END LOOP;

  RETURN uuids;
END;
$_$;


ALTER FUNCTION app_public.generate_u_u_i_ds(quantity integer) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION generate_u_u_i_ds(quantity integer); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) IS 'Returns an array of UUIDs of length `quantity`.';


--
-- Name: register_account(public.char_48, public.char_48, public.email, public.password); Type: FUNCTION; Schema: app_public; Owner: lc_postgraphile
--

CREATE FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) RETURNS app_public.account
    LANGUAGE plpgsql STRICT SECURITY DEFINER
    AS $$
DECLARE
  account app_public.account;
BEGIN
  INSERT INTO app_public.account (given_name, family_name) VALUES (given_name, family_name) RETURNING * INTO account;

  INSERT INTO app_private.credential (account_id, email, password_hash) VALUES (
    account.id, email,crypt(password, gen_salt('bf'))
  );

  RETURN account;
END;
$$;


ALTER FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password); Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) IS 'Registers a user account on the app.';


--
-- Name: muid_to_uuid(text); Type: FUNCTION; Schema: public; Owner: lc_postgraphile
--

CREATE FUNCTION public.muid_to_uuid(id text) RETURNS uuid
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  select 
    (encode(substring(bin from 9 for 9), 'hex') || encode(substring(bin from 0 for 9), 'hex'))::uuid
  from decode(translate(id, '-_', '+/') || '==', 'base64') as bin;
$$;


ALTER FUNCTION public.muid_to_uuid(id text) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION muid_to_uuid(id text); Type: COMMENT; Schema: public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION public.muid_to_uuid(id text) IS 'Converts an MUID to a UUID.';


--
-- Name: uuid_to_muid(uuid); Type: FUNCTION; Schema: public; Owner: lc_postgraphile
--

CREATE FUNCTION public.uuid_to_muid(id uuid) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $$
  select translate(
    encode(
      substring(decode(replace(id::text, '-', ''), 'hex') from 9 for 8) || 
      substring(decode(replace(id::text, '-', ''), 'hex') from 1 for 8), 
      'base64'
    ), 
    '+/=', '-_'
  );
$$;


ALTER FUNCTION public.uuid_to_muid(id uuid) OWNER TO lc_postgraphile;

--
-- Name: FUNCTION uuid_to_muid(id uuid); Type: COMMENT; Schema: public; Owner: lc_postgraphile
--

COMMENT ON FUNCTION public.uuid_to_muid(id uuid) IS 'Converts a UUID to an MUID.';


--
-- Name: credential; Type: TABLE; Schema: app_private; Owner: lc_postgraphile
--

CREATE TABLE app_private.credential (
    account_id uuid NOT NULL,
    email text NOT NULL,
    password_hash text NOT NULL,
    authorities app_private.authority[] DEFAULT ARRAY[]::app_private.authority[],
    CONSTRAINT credential_email_check CHECK ((email ~* '^.+@.+\..+$'::text))
);


ALTER TABLE app_private.credential OWNER TO lc_postgraphile;

--
-- Name: TABLE credential; Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON TABLE app_private.credential IS 'Private information about a user''s account.';


--
-- Name: COLUMN credential.account_id; Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_private.credential.account_id IS 'The id of the user associated with this account.';


--
-- Name: COLUMN credential.email; Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_private.credential.email IS 'The email address of the user.';


--
-- Name: COLUMN credential.password_hash; Type: COMMENT; Schema: app_private; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_private.credential.password_hash IS 'An opague hash of the user''s password.';


--
-- Name: tag; Type: TABLE; Schema: app_public; Owner: lc_postgraphile
--

CREATE TABLE app_public.tag (
    id uuid DEFAULT public.uuid_generate_v1mc() NOT NULL,
    body text NOT NULL,
    account uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT tag_body_check CHECK ((char_length(body) <= 32))
);


ALTER TABLE app_public.tag OWNER TO lc_postgraphile;

--
-- Name: TABLE tag; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON TABLE app_public.tag IS 'A tag created by an account holder.';


--
-- Name: COLUMN tag.id; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.tag.id IS 'The primary key for this tag.';


--
-- Name: COLUMN tag.body; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.tag.body IS 'The textual content of this tag.';


--
-- Name: COLUMN tag.account; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.tag.account IS 'The id of the account that created this tag.';


--
-- Name: COLUMN tag.created_at; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.tag.created_at IS 'The date and time this tag was created.';


--
-- Name: COLUMN tag.updated_at; Type: COMMENT; Schema: app_public; Owner: lc_postgraphile
--

COMMENT ON COLUMN app_public.tag.updated_at IS 'The date and time this tag was last updated.';


--
-- Data for Name: credential; Type: TABLE DATA; Schema: app_private; Owner: lc_postgraphile
--

INSERT INTO app_private.credential (account_id, email, password_hash, authorities) VALUES ('692504d6-ce6a-11e8-ac21-97703d4c9b95', 'bobdobbs@munat.com', '$2a$06$o3hBzSQqkjBbxSBVeiijhePXMXr4RJVINWv1wezWPyA4SpXpMDPJq', '{}');


--
-- Data for Name: account; Type: TABLE DATA; Schema: app_public; Owner: lc_postgraphile
--

INSERT INTO app_public.account (id, given_name, family_name, bio, created_at, updated_at) VALUES ('692504d6-ce6a-11e8-ac21-97703d4c9b95', 'Bob', 'Dobbs', NULL, '2018-10-13 11:01:46.059872+13', '2018-10-13 11:07:15.066393+13');


--
-- Data for Name: tag; Type: TABLE DATA; Schema: app_public; Owner: lc_postgraphile
--



--
-- Name: credential credential_email_key; Type: CONSTRAINT; Schema: app_private; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_private.credential
    ADD CONSTRAINT credential_email_key UNIQUE (email);


--
-- Name: credential credential_pkey; Type: CONSTRAINT; Schema: app_private; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_private.credential
    ADD CONSTRAINT credential_pkey PRIMARY KEY (account_id);


--
-- Name: account account_pkey; Type: CONSTRAINT; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_public.account
    ADD CONSTRAINT account_pkey PRIMARY KEY (id);


--
-- Name: tag tag_body_key; Type: CONSTRAINT; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_public.tag
    ADD CONSTRAINT tag_body_key UNIQUE (body);


--
-- Name: tag tag_pkey; Type: CONSTRAINT; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_public.tag
    ADD CONSTRAINT tag_pkey PRIMARY KEY (id);


--
-- Name: unique_lowercase_body_in_tag; Type: INDEX; Schema: app_public; Owner: lc_postgraphile
--

CREATE UNIQUE INDEX unique_lowercase_body_in_tag ON app_public.tag USING btree (lower(body));


--
-- Name: account account_updated_at; Type: TRIGGER; Schema: app_public; Owner: lc_postgraphile
--

CREATE TRIGGER account_updated_at BEFORE UPDATE ON app_public.account FOR EACH ROW EXECUTE PROCEDURE app_private.set_updated_at();


--
-- Name: tag tag_account; Type: TRIGGER; Schema: app_public; Owner: lc_postgraphile
--

CREATE TRIGGER tag_account BEFORE INSERT ON app_public.tag FOR EACH ROW EXECUTE PROCEDURE app_private.set_account();


--
-- Name: tag tag_updated_at; Type: TRIGGER; Schema: app_public; Owner: lc_postgraphile
--

CREATE TRIGGER tag_updated_at BEFORE UPDATE ON app_public.tag FOR EACH ROW EXECUTE PROCEDURE app_private.set_updated_at();


--
-- Name: credential credential_account_id_fkey; Type: FK CONSTRAINT; Schema: app_private; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_private.credential
    ADD CONSTRAINT credential_account_id_fkey FOREIGN KEY (account_id) REFERENCES app_public.account(id) ON DELETE CASCADE;


--
-- Name: tag tag_account_fkey; Type: FK CONSTRAINT; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE ONLY app_public.tag
    ADD CONSTRAINT tag_account_fkey FOREIGN KEY (account) REFERENCES app_public.account(id);


--
-- Name: account; Type: ROW SECURITY; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE app_public.account ENABLE ROW LEVEL SECURITY;

--
-- Name: account delete_account; Type: POLICY; Schema: app_public; Owner: lc_postgraphile
--

CREATE POLICY delete_account ON app_public.account FOR DELETE TO lc_account USING ((id = (current_setting('jwt.claims.account_id'::text, true))::uuid));


--
-- Name: account select_account; Type: POLICY; Schema: app_public; Owner: lc_postgraphile
--

CREATE POLICY select_account ON app_public.account FOR SELECT USING (true);


--
-- Name: tag select_tag; Type: POLICY; Schema: app_public; Owner: lc_postgraphile
--

CREATE POLICY select_tag ON app_public.tag FOR SELECT USING (true);


--
-- Name: tag; Type: ROW SECURITY; Schema: app_public; Owner: lc_postgraphile
--

ALTER TABLE app_public.tag ENABLE ROW LEVEL SECURITY;

--
-- Name: account update_account; Type: POLICY; Schema: app_public; Owner: lc_postgraphile
--

CREATE POLICY update_account ON app_public.account FOR UPDATE TO lc_account USING ((id = (current_setting('jwt.claims.account_id'::text, true))::uuid));


--
-- Name: SCHEMA app_public; Type: ACL; Schema: -; Owner: lc_postgraphile
--

GRANT USAGE ON SCHEMA app_public TO lc_anonymous;
GRANT USAGE ON SCHEMA app_public TO lc_account;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: FUNCTION set_account(); Type: ACL; Schema: app_private; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_private.set_account() FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_private.set_account() TO lc_postgraphile WITH GRANT OPTION;


--
-- Name: FUNCTION set_created_by(); Type: ACL; Schema: app_private; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_private.set_created_by() FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_private.set_created_by() TO lc_postgraphile WITH GRANT OPTION;


--
-- Name: FUNCTION set_updated_at(); Type: ACL; Schema: app_private; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_private.set_updated_at() FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_private.set_updated_at() TO lc_postgraphile WITH GRANT OPTION;


--
-- Name: FUNCTION authenticate(email public.email, password public.password); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.authenticate(email public.email, password public.password) FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.authenticate(email public.email, password public.password) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.authenticate(email public.email, password public.password) TO lc_anonymous;
GRANT ALL ON FUNCTION app_public.authenticate(email public.email, password public.password) TO lc_account;


--
-- Name: TABLE account; Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

GRANT SELECT ON TABLE app_public.account TO lc_anonymous;
GRANT SELECT,DELETE,UPDATE ON TABLE app_public.account TO lc_account;


--
-- Name: FUNCTION current_account(); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.current_account() FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.current_account() TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.current_account() TO lc_anonymous;
GRANT ALL ON FUNCTION app_public.current_account() TO lc_account;


--
-- Name: FUNCTION full_name(account app_public.account); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.full_name(account app_public.account) FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.full_name(account app_public.account) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.full_name(account app_public.account) TO lc_anonymous;
GRANT ALL ON FUNCTION app_public.full_name(account app_public.account) TO lc_account;


--
-- Name: FUNCTION generate_u_u_i_d(); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.generate_u_u_i_d() FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO lc_anonymous;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_d() TO lc_account;


--
-- Name: FUNCTION generate_u_u_i_ds(quantity integer); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO lc_anonymous;
GRANT ALL ON FUNCTION app_public.generate_u_u_i_ds(quantity integer) TO lc_account;


--
-- Name: FUNCTION register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password); Type: ACL; Schema: app_public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) FROM lc_postgraphile;
GRANT ALL ON FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION app_public.register_account(given_name public.char_48, family_name public.char_48, email public.email, password public.password) TO lc_anonymous;


--
-- Name: FUNCTION muid_to_uuid(id text); Type: ACL; Schema: public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION public.muid_to_uuid(id text) FROM lc_postgraphile;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO lc_anonymous;
GRANT ALL ON FUNCTION public.muid_to_uuid(id text) TO lc_account;


--
-- Name: FUNCTION uuid_to_muid(id uuid); Type: ACL; Schema: public; Owner: lc_postgraphile
--

REVOKE ALL ON FUNCTION public.uuid_to_muid(id uuid) FROM lc_postgraphile;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO lc_postgraphile WITH GRANT OPTION;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO lc_anonymous;
GRANT ALL ON FUNCTION public.uuid_to_muid(id uuid) TO lc_account;


--
-- PostgreSQL database dump complete
--

