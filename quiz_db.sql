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
    tag uuid[] NOT NULL
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
-- Name: tag; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.tag (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(240) NOT NULL
);


ALTER TABLE public.tag OWNER TO docker;

--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.answer (id, question, prompt, is_correct, quiz) FROM stdin;
8fb4e291-ad29-4031-9632-ae1336c11578	df29dcc7-8669-48df-815d-fee382dae18b	null	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
0650d305-3936-4e12-8834-962b6bead4ce	df29dcc7-8669-48df-815d-fee382dae18b	undefined	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
8298ed6e-2ed9-4ecd-8d72-eae88ff46e2e	df29dcc7-8669-48df-815d-fee382dae18b	typeError	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
16f23de5-d91d-4ffb-8dbe-b59518d8749c	df29dcc7-8669-48df-815d-fee382dae18b	NaN	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
caf3a4c0-bc36-46c2-b143-fa91541ad84f	f5910387-f471-4ed5-a967-686b33ac1867	8**1	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
dc6285d7-ddc2-4688-9f24-2f6214cd77a3	f5910387-f471-4ed5-a967-686b33ac1867	Math.pow(16, .75)	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
800bc667-d070-4f20-97ff-1982ee92598b	f5910387-f471-4ed5-a967-686b33ac1867	2 * 2 * 'two'	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
b24bcc68-3d60-49ba-9711-ae6c61992bd1	f5910387-f471-4ed5-a967-686b33ac1867	2**+'3'	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
42d35d62-e51b-4cbf-8f3b-d5cb96f85f5f	9c0adfb0-06b1-4591-ae1e-7f2208dac26b	The typeof is a unary operator that is placed before its single operand, which can be of any type.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
15747f03-fea9-421c-bdc1-91640297c734	9c0adfb0-06b1-4591-ae1e-7f2208dac26b	Its value is a string indicating the data type of the operand.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
aa911118-5503-4d38-9a3d-7ff9b0d6d332	9c0adfb0-06b1-4591-ae1e-7f2208dac26b	Both of the above.	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
4b08184e-0976-4257-b2af-80bc24ae0f12	9c0adfb0-06b1-4591-ae1e-7f2208dac26b	None of the above.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
b84e3e48-bdce-43ac-b8dc-a5760765081d	57bf3808-907b-4b2c-be9d-187ba62c0c81	changeOrder(order)	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
7b025636-d72c-4846-ae4d-f6a414bf1ea0	57bf3808-907b-4b2c-be9d-187ba62c0c81	reverse()	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
635b8545-3d07-4d42-ae8f-9c478600b124	57bf3808-907b-4b2c-be9d-187ba62c0c81	sort(order)	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
c1f3b602-94ae-4d46-a9c3-057bda16b1cf	57bf3808-907b-4b2c-be9d-187ba62c0c81	none of the above	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
95ad4780-746b-4774-88f4-cc9290527a8d	5e9928bd-3e1b-42b2-9c5a-6017546a4b0a	charAt()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
a7b9caa9-5382-46bb-9d6b-43a6b8112c9d	5e9928bd-3e1b-42b2-9c5a-6017546a4b0a	concat()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
e26ce8b4-cf7c-477f-82d8-3561b3090562	5e9928bd-3e1b-42b2-9c5a-6017546a4b0a	indexOf()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
236bbeb4-a8e8-4cc4-9f56-6d18f5754cd1	ae0f5697-962b-45f6-b2c4-d556e573fa5c	search()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
1357c9db-cec4-44d0-842f-e5092137b733	ae0f5697-962b-45f6-b2c4-d556e573fa5c	lastIndexOf()	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
fa99451f-1654-4cdb-a27d-f991d7550419	ae0f5697-962b-45f6-b2c4-d556e573fa5c	substr()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
e3e811f3-e6e5-45f3-94cd-54677e4c4636	ae0f5697-962b-45f6-b2c4-d556e573fa5c	indexOf()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
25c9942e-3334-4c80-b24a-4ccdabc7c222	c30cf8f2-e13e-43b9-80cc-032385f059f2	concat()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
8f4efe94-ead8-41db-88ea-2b8d00c83b67	c30cf8f2-e13e-43b9-80cc-032385f059f2	join()	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
4385d09e-23ef-4f6d-9be4-64a0e689b8a6	c30cf8f2-e13e-43b9-80cc-032385f059f2	pop()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
47c698f2-3e27-48e0-982d-cf029845e17b	c30cf8f2-e13e-43b9-80cc-032385f059f2	map()	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
2b4176cd-f01c-4344-ada1-4499bbb70294	55880180-bfd6-4874-ac05-4e6b4e6d8829	interface	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
ffb67950-0ed4-4d5e-876b-7d636ab3e7a3	55880180-bfd6-4874-ac05-4e6b4e6d8829	throws	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
eaefadba-007d-43ec-bc4f-621395938982	55880180-bfd6-4874-ac05-4e6b4e6d8829	program	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
acb14fb9-18a4-46e0-8cd7-fa0542d745a8	55880180-bfd6-4874-ac05-4e6b4e6d8829	short	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
08d04d6f-568a-47e0-897b-773b2db0fd78	1f779a0f-4234-466c-b4a7-3c8f923164f2	let	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
76661b12-1430-4ea8-937c-e7ae57397bcf	1f779a0f-4234-466c-b4a7-3c8f923164f2	define	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
8fab635e-70a2-421b-aae4-c7e3fd53a0ae	1f779a0f-4234-466c-b4a7-3c8f923164f2	variable	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
dcba8da1-2bc3-4e84-bdf3-7f8aae1194e1	1f779a0f-4234-466c-b4a7-3c8f923164f2	const	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
2a5701ad-ec0c-42ae-9a87-2a048680744f	6c4338b5-e51a-4f60-8c13-12bb09fa3a92	JavaScript can be used for functional programming.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
d5adaf85-37d2-4904-beee-8aebbd84ef45	6c4338b5-e51a-4f60-8c13-12bb09fa3a92	JavaScript can be used for file reading and writing on client machines.	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
9e862c4a-8705-487a-98d8-5c91e97163bd	6c4338b5-e51a-4f60-8c13-12bb09fa3a92	JavaScript does not require frameworks or libraries to be used.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
71961cb4-1bbe-4224-82b8-3b51b329b6fe	6c4338b5-e51a-4f60-8c13-12bb09fa3a92	Though not class-based, JavaScript is an Object-Oriented Programming Language.	f	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
6a4109d1-d1ac-48b3-918e-03eab340d56a	5e9928bd-3e1b-42b2-9c5a-6017546a4b0a	charCodeAt()	t	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8
\.


--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.question (id, quiz, prompt) FROM stdin;
df29dcc7-8669-48df-815d-fee382dae18b	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?
f5910387-f471-4ed5-a967-686b33ac1867	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following snippets does not result in a return value of 8?
9c0adfb0-06b1-4591-ae1e-7f2208dac26b	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following is true about typeof operator in JavaScript?
57bf3808-907b-4b2c-be9d-187ba62c0c81	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which built-in method reverses the order of the elements of an array?
5e9928bd-3e1b-42b2-9c5a-6017546a4b0a	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following functions of String object returns a number indicating the Unicode value of the character at the given index?
ae0f5697-962b-45f6-b2c4-d556e573fa5c	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following functions of String object returns the index within the calling String object of the last occurrence of the specified value?
c30cf8f2-e13e-43b9-80cc-032385f059f2	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following function of Array object joins all elements of an array into a string?
55880180-bfd6-4874-ac05-4e6b4e6d8829	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of the following is not a reserved word in JavaScript?
1f779a0f-4234-466c-b4a7-3c8f923164f2	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which JavaScript variable declaration is used when the assigned value is likely to change?
6c4338b5-e51a-4f60-8c13-12bb09fa3a92	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	Which of these statements is NOT true of browser-side JavaScript?
\.


--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.quiz (description, title, id, subject, tag) FROM stdin;
A quiz covering general JavaScript knowledge.	JavaScript Quiz	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	{3a05b2d5-09f3-4a07-bf61-610dd06dcaad}	{e4c6d87d-6add-4b3b-959b-8867ece5a928}
\.


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.subject (id, title) FROM stdin;
3a05b2d5-09f3-4a07-bf61-610dd06dcaad	programming
\.


--
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.tag (id, title) FROM stdin;
e4c6d87d-6add-4b3b-959b-8867ece5a928	javascript
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
-- Name: subject subject_pk; Type: CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subject_pk PRIMARY KEY (id);


--
-- Name: tag tags_pk; Type: CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.tag
    ADD CONSTRAINT tags_pk PRIMARY KEY (id);


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

