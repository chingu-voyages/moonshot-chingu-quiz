--
-- PostgreSQL database dump
--
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
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
SET search_path = public,
    pg_catalog;
SET default_tablespace = '';
SET default_with_oids = false;
--
-- Name: answer; Type: TABLE; Schema: public; Owner: docker; Tablespace:
--
CREATE TABLE answer (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    question uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    is_correct boolean NOT NULL
);
ALTER TABLE public.answer OWNER TO docker;
--
-- Name: question; Type: TABLE; Schema: public; Owner: docker; Tablespace:
--
CREATE TABLE question (
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    quiz uuid NOT NULL,
    prompt character varying(1000) NOT NULL
);
ALTER TABLE public.question OWNER TO docker;
--
-- Name: quiz; Type: TABLE; Schema: public; Owner: docker; Tablespace:
--
CREATE TABLE quiz (
    description character varying(1000) NOT NULL,
    title character varying(240) NOT NULL,
    id uuid DEFAULT uuid_generate_v4() NOT NULL,
    subject character varying [] NOT NULL,
    tags character varying [] NOT NULL
);
ALTER TABLE public.quiz OWNER TO docker;
--
-- Name: answer_pk; Type: CONSTRAINT; Schema: public; Owner: docker; Tablespace:
--
ALTER TABLE ONLY answer
ADD CONSTRAINT answer_pk PRIMARY KEY (id);
--
-- Name: question_pk; Type: CONSTRAINT; Schema: public; Owner: docker; Tablespace:
--
ALTER TABLE ONLY question
ADD CONSTRAINT question_pk PRIMARY KEY (id);
--
-- Name: quiz_pk; Type: CONSTRAINT; Schema: public; Owner: docker; Tablespace:
--
ALTER TABLE ONLY quiz
ADD CONSTRAINT quiz_pk PRIMARY KEY (id);
--
-- Name: answer_fk; Type: FK CONSTRAINT; Schema: public; Owner: docker
--
ALTER TABLE ONLY answer
ADD CONSTRAINT answer_fk FOREIGN KEY (question) REFERENCES question(id);
--
-- Name: question_fk; Type: FK CONSTRAINT; Schema: public; Owner: docker
--
ALTER TABLE ONLY question
ADD CONSTRAINT question_fk FOREIGN KEY (quiz) REFERENCES quiz(id);
--
-- Name: public; Type: ACL; Schema: -; Owner: docker
--
REVOKE ALL ON SCHEMA public
FROM PUBLIC;
REVOKE ALL ON SCHEMA public
FROM docker;
GRANT ALL ON SCHEMA public TO docker;
GRANT ALL ON SCHEMA public TO PUBLIC;
--
-- PostgreSQL database dump complete
--
