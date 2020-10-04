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
-- Name: answer; Type: TABLE; Schema: public; Owner: silentk
--
CREATE TABLE public.answer (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    question uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    is_correct boolean NOT NULL
);
ALTER TABLE public.answer OWNER TO silentk;
--
-- Name: question; Type: TABLE; Schema: public; Owner: silentk
--
CREATE TABLE public.question (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    quiz uuid NOT NULL,
    prompt character varying(1000) NOT NULL,
    explanation character varying(1000),
    << << << < HEAD resources character varying []
);
ALTER TABLE public.question OWNER TO silentk;
--
-- Name: quiz; Type: TABLE; Schema: public; Owner: silentk
--
CREATE TABLE public.quiz (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    subject character varying [] NOT NULL,
    description character varying(1000) NOT NULL,
    tags character varying [] NOT NULL,
    title character varying(100) NOT NULL
);
ALTER TABLE public.quiz OWNER TO silentk;
--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: silentk
--
COPY public.answer (id, question, prompt, is_correct)
FROM stdin;
15c1cf35-5a5b-4c08-a4e4-0a4fd001550a 625defc6-3d06-4273-9833-116b65804447 null f 6fbac5ab-089e-4020-a6a4-b6900b4f8d4c 625defc6-3d06-4273-9833-116b65804447 undefined t 788618da-9b12-4f41-bf54-9c24dba060b6 625defc6-3d06-4273-9833-116b65804447 typeError f 451b93bb-17d6-49f5-9168-d3b2ffab7e1b 625defc6-3d06-4273-9833-116b65804447 NaN f aa68ec92-a356-4745-a28f-f3f4db348d8d 7311d247-a8c0-42b7-b34b-f986faa5f20e charAt() f a51456ca-adf3-4d62-b4e0-903c0ded8e40 7311d247-a8c0-42b7-b34b-f986faa5f20e concat() f 06c9ff44-1982-41c0-8d4c-6a60628cb869 7311d247-a8c0-42b7-b34b-f986faa5f20e charCodeAt() t 5b44dfe8-5deb-4fbc-a2a2-5445d8726f66 7311d247-a8c0-42b7-b34b-f986faa5f20e indexOf() f 7dae88e7-c1cc-4221-8d47-bb9371fc510b cd8c4406-d7b5-4693-88fa-09fd6d3b0977 The typeof is a unary operator that is placed before its single operand,
which can be of any type.f 3d307ea8-5bbd-4f5f-a1c6-9a0fb8d5e287 cd8c4406-d7b5-4693-88fa-09fd6d3b0977 Its value is a string indicating the data type of the operand.f 1a46e48a-23fd-4858-ad08-fa18ac29b6ad cd8c4406-d7b5-4693-88fa-09fd6d3b0977 Both of the above.t fb20ddff-1026-478e-8da9-fef98632c001 cd8c4406-d7b5-4693-88fa-09fd6d3b0977 None of the above.f e354030e-4d94-4678-9e50-905cba7a9d7c f347e96a-85b9-4b4e-945a-f4916209fd78 changeOrder(order) f bbe2371a-6f6c-4722-acc5-f1161dd47287 f347e96a-85b9-4b4e-945a-f4916209fd78 reverse() t 9577a6fe-520b-4131-81f3-0d0cf6aae680 f347e96a-85b9-4b4e-945a-f4916209fd78 sort(order) f 988216c7-18b5-4c80-be63-435387d05ae9 f347e96a-85b9-4b4e-945a-f4916209fd78 none of the above f a0436133-6f3a-4ec7-891b-30890cf61731 e2652e78-12fc-4bb7-9c1e-87e53515e4bd let t 15876a7d-692b-4c05-a822-a290560c8636 e2652e78-12fc-4bb7-9c1e-87e53515e4bd define f 7bce1502-021a-4a08-93b7-0b28153be0f8 e2652e78-12fc-4bb7-9c1e-87e53515e4bd variable f ce68ada1-58a2-474a-96d2-4669b2010bb5 e2652e78-12fc-4bb7-9c1e-87e53515e4bd const f aad6e5b5-517e-45fc-ae0d-ad4fa0323fc3 d9e63117-c4fe-4c6f-9e38-ae56e6235826 concat() f f1d57da0-67b3-427e-b6ff-48c95967b828 d9e63117-c4fe-4c6f-9e38-ae56e6235826
join() t 36e596d7-0982-4001-ad15-0f1925a2a1bd d9e63117-c4fe-4c6f-9e38-ae56e6235826 pop() f d5f6a90f-f635-4e68-bcfc-35464102f6a6 d9e63117-c4fe-4c6f-9e38-ae56e6235826 map() f 08ce544f-02d3-4c9b-bdaa-22b3c7158822 0cd5d79e-f582-4081-97f0-e1e0e2684581 search() f d1daeaf9-1d35-4136-a37c-10bcef05bd37 0cd5d79e-f582-4081-97f0-e1e0e2684581 lastIndexOf() t d8935afb-59fc-4653-920a-2329da4c9bc5 0cd5d79e-f582-4081-97f0-e1e0e2684581 substr() f 92d0751c-5e3d-40cd-843c-b5fd2bf0e23f 0cd5d79e-f582-4081-97f0-e1e0e2684581 indexOf() f 248a3907-d38c-47bc-a560-ff2ca7e3ace9 cbb0de75-fb30-4326-baf0-22218585485b 8 * * 1 f 3288a610-4ffc-49fd-ac9b-04ab54ed818d cbb0de75-fb30-4326-baf0-22218585485b Math.pow(16,.75) f 1849e694-656a-4953-8ebc-aabfb0d91864 cbb0de75-fb30-4326-baf0-22218585485b 2 * 2 * 'two' t 9788296a-4a1e-4def-a9c6-724d30307b2d cbb0de75-fb30-4326-baf0-22218585485b 2 * * + '3' f dcd6475b-a64f-45bf-b721-17f409078b26 16b009ea-c3ee-49f6-8235-687c1632a8e1 interface f d9f8ad8f-0319-4efb-9603-eba34e02b689 16b009ea-c3ee-49f6-8235-687c1632a8e1 throws f de80ccf8-c238-47a6-824c-f4baa9fb9e57 16b009ea-c3ee-49f6-8235-687c1632a8e1 program f b2d03810-a62b-468a-8e94-04d3e9d573bc 16b009ea-c3ee-49f6-8235-687c1632a8e1 short t 0c451489-3426-45c1-a344-0f65a8579e56 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript can be used for functional programming.f 028752fc-d9c8-47d1-a787-2ee61e273d75 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript can be used for file reading
and writing on client machines.t 7613022f-9fd7-4537-8811-6bc1bd1541b0 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript does not require frameworks
or libraries to be used.f 5dc14ff6-bfea-4e04-be86-4d21245e1314 a7af381d-4c72-4513-9747-c3245a7028a0 Though not class - based,
JavaScript is an Object - Oriented Programming Language.f \.--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: silentk
--
COPY public.question (id, quiz, prompt, explanation, resources)
FROM stdin;
625defc6-3d06-4273-9833-116b65804447 e4a9149f-726f-4a65-b385-458cc91ce7dd Which term in JavaScript can be used to describe a declared variable that has not yet been given a value ? \ N \ N cd8c4406-d7b5-4693-88fa-09fd6d3b0977 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following is true about typeof operator in JavaScript ? \ N \ N 7311d247-a8c0-42b7-b34b-f986faa5f20e e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following functions of String object returns a number indicating the Unicode value of the character at the given index ? \ N \ N f347e96a-85b9-4b4e-945a-f4916209fd78 e4a9149f-726f-4a65-b385-458cc91ce7dd Which built - in method reverses the order of the elements of an array ? \ N \ N d9e63117-c4fe-4c6f-9e38-ae56e6235826 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following function of Array object joins all elements of an array into a string ? \ N \ N e2652e78-12fc-4bb7-9c1e-87e53515e4bd e4a9149f-726f-4a65-b385-458cc91ce7dd Which JavaScript variable declaration is used
when the assigned value is likely to change ? \ N \ N 0cd5d79e-f582-4081-97f0-e1e0e2684581 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following functions of String object returns the index within the calling String object of the last occurrence of the specified value ? \ N \ N cbb0de75-fb30-4326-baf0-22218585485b e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following snippets does not result in a return value of 8 ? \ N \ N 16b009ea-c3ee-49f6-8235-687c1632a8e1 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following is not a reserved word in JavaScript ? \ N \ N a7af381d-4c72-4513-9747-c3245a7028a0 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of these statements is NOT true of browser - side JavaScript ? \ N \ N \.--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: silentk
--
COPY public.quiz (id, subject, description, tags, title)
FROM stdin;
e4a9149f-726f-4a65-b385-458cc91ce7dd { programming } A quiz covering general JavaScript knowledge.{ javascript } First Quiz \.--
-- Name: answer answer_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_pk PRIMARY KEY (id);
--
-- Name: question question_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_pk PRIMARY KEY (id);
--
-- Name: quiz quiz_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.quiz
ADD CONSTRAINT quiz_pk PRIMARY KEY (id);
--
-- Name: answer answer_fk; Type: FK CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_fk FOREIGN KEY (question) REFERENCES public.question(id);
--
-- Name: question question_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_fk_1 FOREIGN KEY (quiz) REFERENCES public.quiz(id);
--
-- PostgreSQL database dump complete
--
== == == = resources character varying []
);
ALTER TABLE public.question OWNER TO silentk;
--
-- Name: quiz; Type: TABLE; Schema: public; Owner: silentk
--
CREATE TABLE public.quiz (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    subject character varying [] NOT NULL,
    description character varying(1000) NOT NULL,
    tags character varying [] NOT NULL,
    title character varying(100) NOT NULL
);
ALTER TABLE public.quiz OWNER TO silentk;
--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: silentk
--
COPY public.answer (id, question, prompt, is_correct)
FROM stdin;
15c1cf35-5a5b-4c08-a4e4-0a4fd001550a 625defc6-3d06-4273-9833-116b65804447 null f 6fbac5ab-089e-4020-a6a4-b6900b4f8d4c 625defc6-3d06-4273-9833-116b65804447 undefined t 788618da-9b12-4f41-bf54-9c24dba060b6 625defc6-3d06-4273-9833-116b65804447 typeError f 451b93bb-17d6-49f5-9168-d3b2ffab7e1b 625defc6-3d06-4273-9833-116b65804447 NaN f aa68ec92-a356-4745-a28f-f3f4db348d8d 7311d247-a8c0-42b7-b34b-f986faa5f20e charAt() f a51456ca-adf3-4d62-b4e0-903c0ded8e40 7311d247-a8c0-42b7-b34b-f986faa5f20e concat() f 06c9ff44-1982-41c0-8d4c-6a60628cb869 7311d247-a8c0-42b7-b34b-f986faa5f20e charCodeAt() t 5b44dfe8-5deb-4fbc-a2a2-5445d8726f66 7311d247-a8c0-42b7-b34b-f986faa5f20e indexOf() f 7dae88e7-c1cc-4221-8d47-bb9371fc510b cd8c4406-d7b5-4693-88fa-09fd6d3b0977 The typeof is a unary operator that is placed before its single operand,
which can be of any type.f 3d307ea8-5bbd-4f5f-a1c6-9a0fb8d5e287 cd8c4406-d7b5-4693-88fa-09fd6d3b0977 Its value is a string indicating the data type of the operand.f 1a46e48a-23fd-4858-ad08-fa18ac29b6ad cd8c4406-d7b5-4693-88fa-09fd6d3b0977 Both of the above.t fb20ddff-1026-478e-8da9-fef98632c001 cd8c4406-d7b5-4693-88fa-09fd6d3b0977 None of the above.f e354030e-4d94-4678-9e50-905cba7a9d7c f347e96a-85b9-4b4e-945a-f4916209fd78 changeOrder(order) f bbe2371a-6f6c-4722-acc5-f1161dd47287 f347e96a-85b9-4b4e-945a-f4916209fd78 reverse() t 9577a6fe-520b-4131-81f3-0d0cf6aae680 f347e96a-85b9-4b4e-945a-f4916209fd78 sort(order) f 988216c7-18b5-4c80-be63-435387d05ae9 f347e96a-85b9-4b4e-945a-f4916209fd78 none of the above f a0436133-6f3a-4ec7-891b-30890cf61731 e2652e78-12fc-4bb7-9c1e-87e53515e4bd let t 15876a7d-692b-4c05-a822-a290560c8636 e2652e78-12fc-4bb7-9c1e-87e53515e4bd define f 7bce1502-021a-4a08-93b7-0b28153be0f8 e2652e78-12fc-4bb7-9c1e-87e53515e4bd variable f ce68ada1-58a2-474a-96d2-4669b2010bb5 e2652e78-12fc-4bb7-9c1e-87e53515e4bd const f aad6e5b5-517e-45fc-ae0d-ad4fa0323fc3 d9e63117-c4fe-4c6f-9e38-ae56e6235826 concat() f f1d57da0-67b3-427e-b6ff-48c95967b828 d9e63117-c4fe-4c6f-9e38-ae56e6235826
join() t 36e596d7-0982-4001-ad15-0f1925a2a1bd d9e63117-c4fe-4c6f-9e38-ae56e6235826 pop() f d5f6a90f-f635-4e68-bcfc-35464102f6a6 d9e63117-c4fe-4c6f-9e38-ae56e6235826 map() f 08ce544f-02d3-4c9b-bdaa-22b3c7158822 0cd5d79e-f582-4081-97f0-e1e0e2684581 search() f d1daeaf9-1d35-4136-a37c-10bcef05bd37 0cd5d79e-f582-4081-97f0-e1e0e2684581 lastIndexOf() t d8935afb-59fc-4653-920a-2329da4c9bc5 0cd5d79e-f582-4081-97f0-e1e0e2684581 substr() f 92d0751c-5e3d-40cd-843c-b5fd2bf0e23f 0cd5d79e-f582-4081-97f0-e1e0e2684581 indexOf() f 248a3907-d38c-47bc-a560-ff2ca7e3ace9 cbb0de75-fb30-4326-baf0-22218585485b 8 * * 1 f 3288a610-4ffc-49fd-ac9b-04ab54ed818d cbb0de75-fb30-4326-baf0-22218585485b Math.pow(16,.75) f 1849e694-656a-4953-8ebc-aabfb0d91864 cbb0de75-fb30-4326-baf0-22218585485b 2 * 2 * 'two' t 9788296a-4a1e-4def-a9c6-724d30307b2d cbb0de75-fb30-4326-baf0-22218585485b 2 * * + '3' f dcd6475b-a64f-45bf-b721-17f409078b26 16b009ea-c3ee-49f6-8235-687c1632a8e1 interface f d9f8ad8f-0319-4efb-9603-eba34e02b689 16b009ea-c3ee-49f6-8235-687c1632a8e1 throws f de80ccf8-c238-47a6-824c-f4baa9fb9e57 16b009ea-c3ee-49f6-8235-687c1632a8e1 program f b2d03810-a62b-468a-8e94-04d3e9d573bc 16b009ea-c3ee-49f6-8235-687c1632a8e1 short t 0c451489-3426-45c1-a344-0f65a8579e56 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript can be used for functional programming.f 028752fc-d9c8-47d1-a787-2ee61e273d75 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript can be used for file reading
and writing on client machines.t 7613022f-9fd7-4537-8811-6bc1bd1541b0 a7af381d-4c72-4513-9747-c3245a7028a0 JavaScript does not require frameworks
or libraries to be used.f 5dc14ff6-bfea-4e04-be86-4d21245e1314 a7af381d-4c72-4513-9747-c3245a7028a0 Though not class - based,
JavaScript is an Object - Oriented Programming Language.f \.--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: silentk
--
COPY public.question (id, quiz, prompt, explanation, resources)
FROM stdin;
625defc6-3d06-4273-9833-116b65804447 e4a9149f-726f-4a65-b385-458cc91ce7dd Which term in JavaScript can be used to describe a declared variable that has not yet been given a value ? \ N \ N cd8c4406-d7b5-4693-88fa-09fd6d3b0977 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following is true about typeof operator in JavaScript ? \ N \ N 7311d247-a8c0-42b7-b34b-f986faa5f20e e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following functions of String object returns a number indicating the Unicode value of the character at the given index ? \ N \ N f347e96a-85b9-4b4e-945a-f4916209fd78 e4a9149f-726f-4a65-b385-458cc91ce7dd Which built - in method reverses the order of the elements of an array ? \ N \ N d9e63117-c4fe-4c6f-9e38-ae56e6235826 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following function of Array object joins all elements of an array into a string ? \ N \ N e2652e78-12fc-4bb7-9c1e-87e53515e4bd e4a9149f-726f-4a65-b385-458cc91ce7dd Which JavaScript variable declaration is used
when the assigned value is likely to change ? \ N \ N 0cd5d79e-f582-4081-97f0-e1e0e2684581 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following functions of String object returns the index within the calling String object of the last occurrence of the specified value ? \ N \ N cbb0de75-fb30-4326-baf0-22218585485b e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following snippets does not result in a return value of 8 ? \ N \ N 16b009ea-c3ee-49f6-8235-687c1632a8e1 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of the following is not a reserved word in JavaScript ? \ N \ N a7af381d-4c72-4513-9747-c3245a7028a0 e4a9149f-726f-4a65-b385-458cc91ce7dd Which of these statements is NOT true of browser - side JavaScript ? \ N \ N \.--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: silentk
--
<< << << < HEAD COPY public.quiz (id, subject, description, tags, title)
FROM stdin;
e4a9149f-726f-4a65-b385-458cc91ce7dd { programming } A quiz covering general JavaScript knowledge.{ javascript } First Quiz == == == = COPY public.quiz (id, subject, description, tags)
FROM stdin;
e4a9149f-726f-4a65-b385-458cc91ce7dd { programming } A quiz covering general JavaScript knowledge.{ javascript } >> >> >> > 6e1e2e84a5408ee46fc3aef3199f56e37142e2c3 \.--
-- Name: answer answer_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_pk PRIMARY KEY (id);
--
-- Name: question question_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_pk PRIMARY KEY (id);
--
-- Name: quiz quiz_pk; Type: CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.quiz
ADD CONSTRAINT quiz_pk PRIMARY KEY (id);
--
-- Name: answer answer_fk; Type: FK CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.answer
ADD CONSTRAINT answer_fk FOREIGN KEY (question) REFERENCES public.question(id);
--
-- Name: question question_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: silentk
--
ALTER TABLE ONLY public.question
ADD CONSTRAINT question_fk_1 FOREIGN KEY (quiz) REFERENCES public.quiz(id);
--
-- PostgreSQL database dump complete
--
