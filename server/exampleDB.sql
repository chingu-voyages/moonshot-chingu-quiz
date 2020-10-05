--
-- PostgreSQL database dump
--
-- Dumped from database version 12.4
-- Dumped by pg_dump version 12.4
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
SET default_tablespace = '';
SET default_table_access_method = heap;
--
-- Name: answer; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.answer (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    question uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    is_correct boolean NOT NULL
);
ALTER TABLE public.answer OWNER TO postgres;
--
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.question (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    quiz uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    explanation character varying(1000),
    resources character varying []
);
ALTER TABLE public.question OWNER TO postgres;
--
-- Name: quiz; Type: TABLE; Schema: public; Owner: postgres
--
CREATE TABLE public.quiz (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    subject character varying [] NOT NULL,
    description character varying(1000) NOT NULL,
    tags character varying [] NOT NULL,
    title character varying(100) NOT NULL
);
ALTER TABLE public.quiz OWNER TO postgres;
--
-- Name: answer answer_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_pk PRIMARY KEY (id);
--
-- Name: question question_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_pk PRIMARY KEY (id);
--
-- Name: quiz quiz_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.quiz
ADD CONSTRAINT quiz_pk PRIMARY KEY (id);
--
-- Name: answer answer_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_fk FOREIGN KEY (question) REFERENCES public.question(id);
--
-- Name: question question_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_fk_1 FOREIGN KEY (quiz) REFERENCES public.quiz(id);
--
-- PostgreSQL database dump complete
--
