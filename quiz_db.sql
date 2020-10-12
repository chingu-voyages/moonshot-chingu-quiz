--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0 (Debian 13.0-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: answer; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.answer (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    question uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    is_correct boolean NOT NULL,
    quiz uuid NOT NULL
);


ALTER TABLE public.answer OWNER TO docker;

--
-- Name: question; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.question (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    quiz uuid NOT NULL,
    prompt character varying(1000) NOT NULL
);


ALTER TABLE public.question OWNER TO docker;

--
-- Name: quiz; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.quiz (
    description character varying(1000) NOT NULL,
    title character varying(240) NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    subject uuid[] NOT NULL,
    tags uuid[] NOT NULL
);


ALTER TABLE public.quiz OWNER TO docker;

--
-- Name: subject; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.subject (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(240) NOT NULL
);


ALTER TABLE public.subject OWNER TO docker;

--
-- Name: tags; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.tags (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(240) NOT NULL
);


ALTER TABLE public.tags OWNER TO docker;

--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.answer (id, question, prompt, is_correct, quiz) FROM stdin;
\.


--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.question (id, quiz, prompt) FROM stdin;
\.


--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.quiz (description, title, id, subject, tags) FROM stdin;
\.


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.subject (id, title) FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.tags (id, title) FROM stdin;
\.


--
-- Name: answer answer_pk; Type: CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_pk PRIMARY KEY (id);


--
-- Name: question question_pk; Type: CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pk PRIMARY KEY (id);


--
-- Name: quiz quiz_pk; Type: CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.quiz
    ADD CONSTRAINT quiz_pk PRIMARY KEY (id);


--
-- Name: answer answer_fk_question; Type: FK CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_fk_question FOREIGN KEY (question) REFERENCES public.question(id);


--
-- Name: answer answer_fk_quiz; Type: FK CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_fk_quiz FOREIGN KEY (quiz) REFERENCES public.quiz(id);


--
-- Name: question question_fk; Type: FK CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_fk FOREIGN KEY (quiz) REFERENCES public.quiz(id);


--
-- PostgreSQL database dump complete
--

