
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
-- Name: legal_checkup; Type: DATABASE; Schema: -; Owner: legal_checkup
--

CREATE DATABASE legal_checkup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_NZ.UTF-8' LC_CTYPE = 'en_NZ.UTF-8';


ALTER DATABASE legal_checkup OWNER TO legal_checkup;

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
-- Name: checkup_hidden; Type: SCHEMA; Schema: -; Owner: legal_checkup
--

CREATE SCHEMA checkup_hidden;


ALTER SCHEMA checkup_hidden OWNER TO legal_checkup;

--
-- Name: checkup_jobs; Type: SCHEMA; Schema: -; Owner: legal_checkup
--

CREATE SCHEMA checkup_jobs;


ALTER SCHEMA checkup_jobs OWNER TO legal_checkup;

--
-- Name: checkup_private; Type: SCHEMA; Schema: -; Owner: legal_checkup
--

CREATE SCHEMA checkup_private;


ALTER SCHEMA checkup_private OWNER TO legal_checkup;

--
-- Name: checkup_public; Type: SCHEMA; Schema: -; Owner: legal_checkup
--

CREATE SCHEMA checkup_public;


ALTER SCHEMA checkup_public OWNER TO legal_checkup;

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
-- Name: image_media_type; Type: TYPE; Schema: checkup_public; Owner: legal_checkup
--

CREATE TYPE checkup_public.image_media_type AS ENUM (
    'image/gif',
    'image/png',
    'image/jpeg',
    'image/bmp',
    'image/webp',
    'image/x-icon',
    'image/vnd.microsoft.icon',
    'image/svg+xml'
);


ALTER TYPE checkup_public.image_media_type OWNER TO legal_checkup;

--
-- Name: jwt_token; Type: TYPE; Schema: checkup_public; Owner: legal_checkup
--

CREATE TYPE checkup_public.jwt_token AS (
	role text,
	account_id uuid
);


ALTER TYPE checkup_public.jwt_token OWNER TO legal_checkup;

--
-- Name: char_16; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_16 AS text
	CONSTRAINT char_16_check CHECK ((char_length(VALUE) <= 16));


ALTER DOMAIN public.char_16 OWNER TO lc_postgraphile;

--
-- Name: char_32; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_32 AS text
	CONSTRAINT char_32_check CHECK ((char_length(VALUE) <= 32));


ALTER DOMAIN public.char_32 OWNER TO lc_postgraphile;

--
-- Name: char_64; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_64 AS text
	CONSTRAINT char_64_check CHECK ((char_length(VALUE) <= 64));


ALTER DOMAIN public.char_64 OWNER TO lc_postgraphile;

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
-- Name: char_512; Type: DOMAIN; Schema: public; Owner: lc_postgraphile
--

CREATE DOMAIN public.char_512 AS text
	CONSTRAINT char_512_check CHECK ((char_length(VALUE) <= 512));


ALTER DOMAIN public.char_512 OWNER TO lc_postgraphile;

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


SET default_tablespace = '';

SET default_with_oids = false;
