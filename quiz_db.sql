--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

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


-- ALTER TABLE public.answer OWNER TO docker;

--
-- Name: question; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.question (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    quiz uuid NOT NULL,
    prompt character varying(1000) NOT NULL
);


-- ALTER TABLE public.question OWNER TO docker;

--
-- Name: quiz; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.quiz (
    description character varying(1000) NOT NULL,
    title character varying(240) NOT NULL,
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    tag uuid[] NOT NULL,
    subject uuid NOT NULL
);


-- ALTER TABLE public.quiz OWNER TO docker;

--
-- Name: subject; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.subject (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(240) NOT NULL
);


-- ALTER TABLE public.subject OWNER TO docker;

--
-- Name: tag; Type: TABLE; Schema: public; Owner: docker
--

CREATE TABLE public.tag (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(240) NOT NULL
);


-- ALTER TABLE public.tag OWNER TO docker;

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
469b08d5-7cd7-422d-9269-c9cee1cf2f42	b27cbd0e-5ddc-4770-8cc9-a86e8cb47118	#sm-col	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
38157e80-8495-4591-97e1-3c6d5653fd5f	b27cbd0e-5ddc-4770-8cc9-a86e8cb47118	.sm, .col	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
ebe663f0-8a86-4c4e-b617-d8ca32f8bb25	b27cbd0e-5ddc-4770-8cc9-a86e8cb47118	[class~=col]	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
78a6f387-a50f-480d-bdd2-487681642111	b27cbd0e-5ddc-4770-8cc9-a86e8cb47118	.sm_col	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
9a9b205c-ac97-48d3-b51d-1d5092161e32	10282eb0-e189-400d-8cb6-563e30737ce8	viewfinder height	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
075d73c4-6dbd-4fff-868a-567665deca4b	10282eb0-e189-400d-8cb6-563e30737ce8	viewport width	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
85d2e1f6-d548-42ff-b431-db7c66443b55	10282eb0-e189-400d-8cb6-563e30737ce8	visible height	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
85bd8fc2-c568-4f5f-8234-0c9f2b17d465	10282eb0-e189-400d-8cb6-563e30737ce8	viewport height	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
f5c1716b-9632-4f46-aa8f-a9eefcf20276	3ab172ce-895a-4f69-a98e-a6d6e1784fbe	id	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
de894143-80bb-47eb-9548-81d09b2adaaa	3ab172ce-895a-4f69-a98e-a6d6e1784fbe	class	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
f3599536-8b0c-4ca5-a5fa-2ab2cb3b38c7	3ab172ce-895a-4f69-a98e-a6d6e1784fbe	text	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
aa0a7488-4a45-4bbe-8882-5a8e63a099d9	3ab172ce-895a-4f69-a98e-a6d6e1784fbe	name	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
3a0efa9c-bb69-4bfc-848c-73518b7d8d14	79927764-c774-4837-8331-fb6be3ea660f	margin	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
0ba4ee58-47b7-4bfb-8f1d-d3b80301d2e5	79927764-c774-4837-8331-fb6be3ea660f	clear	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
dfb04eae-0dd7-4c60-af4c-a423ff6b2d84	79927764-c774-4837-8331-fb6be3ea660f	float	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
16843d9e-330f-4d44-8898-96ff47281c8f	79927764-c774-4837-8331-fb6be3ea660f	floating	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
ebddc93f-292d-484b-b0ad-067cefedb9c7	01224e75-cc9d-4950-933f-894f4d9e9390	wrap	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
1033c81d-65be-42c4-8a60-5c16d3081e92	01224e75-cc9d-4950-933f-894f4d9e9390	push	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
72cd67da-deb0-484a-a712-e2acc85fb124	01224e75-cc9d-4950-933f-894f4d9e9390	float	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
d07a9f80-9a3b-46a5-9197-5969092cf5f1	01224e75-cc9d-4950-933f-894f4d9e9390	align	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
f995747e-9f0c-4134-82f0-79f4c39667e6	1f759393-60c4-49fd-aff7-c8af7f945a55	pointer	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
e33e5ba4-bd58-4e6a-b838-8aa8d3b650a9	1f759393-60c4-49fd-aff7-c8af7f945a55	default	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
e58f0b65-e73a-4f8f-a26a-81166fada274	1f759393-60c4-49fd-aff7-c8af7f945a55	arrow	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
519efee9-f548-490f-b285-d5a358fcaa3b	1f759393-60c4-49fd-aff7-c8af7f945a55	arr	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
f5b15d8e-d596-408c-9bea-6c4b01b0d171	31780751-15da-4ec9-8866-f122c871ba25	border-color	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
82ad08d7-b855-4d44-bd76-ccefc6b8f448	31780751-15da-4ec9-8866-f122c871ba25	border-decoration	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
93328a4c-c7df-4243-b250-016ea8836477	31780751-15da-4ec9-8866-f122c871ba25	border-style	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
02f747ff-5a20-4bca-b123-90c7ff232465	31780751-15da-4ec9-8866-f122c871ba25	border-line	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
1113f5d5-d6ea-46d5-91e4-efc9587f4d7d	b841f5fd-8ef0-434b-a2ee-41e5dda510ce	empty-cell	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
dcb482d0-391a-4446-a42b-a9fd77952525	b841f5fd-8ef0-434b-a2ee-41e5dda510ce	blank-cell	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
b1af0454-43ca-4f30-9c1d-e92f64ef3ac3	b841f5fd-8ef0-434b-a2ee-41e5dda510ce	noncontent-cell	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
310936a6-5dd2-4fff-a38d-c605b91f454b	b841f5fd-8ef0-434b-a2ee-41e5dda510ce	void-cell	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
0638fd89-48d8-412b-89bd-7842afb819a2	3a61640e-a59e-4497-9497-5d05fb1c78ef	640 pixels	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
89b360b1-82f5-47bb-b1ec-49402f8fdc34	3a61640e-a59e-4497-9497-5d05fb1c78ef	100%	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
8f62fa54-00e3-4c43-90f3-7f903b7a0e12	3a61640e-a59e-4497-9497-5d05fb1c78ef	full-screen	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
3e7d919b-e507-43d1-8b04-30ad0a9d10de	3a61640e-a59e-4497-9497-5d05fb1c78ef	1024px	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
33fed74d-c80f-4d0f-a29b-8d430497b86f	6409ea1a-d9e5-40b1-bcb7-bee17e31cdd6	/* a comment */	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
fb8f267c-8fb5-47ec-adc0-e196507c2256	6409ea1a-d9e5-40b1-bcb7-bee17e31cdd6	// a comment //	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
054f4211-4573-43e4-b679-4322c977bd3b	6409ea1a-d9e5-40b1-bcb7-bee17e31cdd6	/ a comment /	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
c5bc803d-94f9-47d9-978e-ebdd00798b8d	6409ea1a-d9e5-40b1-bcb7-bee17e31cdd6	<' a comment'>	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
a6ba6d92-76d3-43b6-8e1f-194f35694d75	75a1e7a6-a020-417c-961b-2c58d7e3cf48	spacing	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
5bff7492-ec05-498a-b9ab-37f296947775	75a1e7a6-a020-417c-961b-2c58d7e3cf48	margin	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
4d02e6d1-8279-4678-9a94-366645a8f2de	75a1e7a6-a020-417c-961b-2c58d7e3cf48	padding	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
ec4b9aac-a2f4-4025-a468-8ac7586f6838	75a1e7a6-a020-417c-961b-2c58d7e3cf48	inner-margin	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
710fb500-d06e-4412-8af5-f7ac2ab8cac8	81e59fa3-0aa4-4205-9190-47d3d85e293c	A javascript file linked into the <head> with a <script> tag.	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
9dc90d09-e039-423d-bf3e-bd9420f6ba48	81e59fa3-0aa4-4205-9190-47d3d85e293c	Any css file stylesheet placed in the HTML.	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
360bccff-a5f0-4fff-be40-d5a01ac16115	81e59fa3-0aa4-4205-9190-47d3d85e293c	A phrase that means using an outside sources css file to style your HTML.	f	6ee607e2-8128-48ec-982d-b711e5f1ab87
5e110d88-b3cd-4e9c-abbf-3a117881fc92	81e59fa3-0aa4-4205-9190-47d3d85e293c	A popular front-end framework that can be used for styling, user-interface, and much more.	t	6ee607e2-8128-48ec-982d-b711e5f1ab87
2b205dc7-1a99-434c-98fd-211c7f643ce8	d4824750-fcee-4b90-b564-cef9a1fdf580	<li>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
3cbdddd5-6b62-4260-b338-c6f32092b523	d4824750-fcee-4b90-b564-cef9a1fdf580	<ul>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
d4a00821-728c-486a-a05b-a151e69e911c	d4824750-fcee-4b90-b564-cef9a1fdf580	<header>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
158f9bb5-68a8-44d6-8471-923204b1927e	d4824750-fcee-4b90-b564-cef9a1fdf580	<nav>	t	759a9508-5d10-4ea6-8294-12cb4402cffa
3fd0ea14-f63c-43db-b603-692d07830454	cd14ae8b-2c76-4e09-8970-36a5641e0e46	<li>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
68a007ed-363d-4bc9-9966-46d3e62440c9	cd14ae8b-2c76-4e09-8970-36a5641e0e46	<ul>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
c7e5b57c-81ac-4711-92aa-b49d3fe03501	cd14ae8b-2c76-4e09-8970-36a5641e0e46	<header>	t	759a9508-5d10-4ea6-8294-12cb4402cffa
ee3d6b30-20ff-4555-899d-4ed9f7ce7fd0	cd14ae8b-2c76-4e09-8970-36a5641e0e46	<nav>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
aa5ea045-93c7-4307-bc80-ce8f79d9f6ff	1509e12a-264f-4122-bfb2-340e0cf36622	data-	t	759a9508-5d10-4ea6-8294-12cb4402cffa
3c3851e8-df10-4cd5-b7a1-930ac2ec4f86	1509e12a-264f-4122-bfb2-340e0cf36622	-data-	f	759a9508-5d10-4ea6-8294-12cb4402cffa
bb69ef64-3199-405b-b4e5-33375fbd780b	1509e12a-264f-4122-bfb2-340e0cf36622	data=	f	759a9508-5d10-4ea6-8294-12cb4402cffa
ff26cfe6-5d81-4272-9738-0671a5254ae4	1509e12a-264f-4122-bfb2-340e0cf36622	custom	f	759a9508-5d10-4ea6-8294-12cb4402cffa
fe7eb5ab-88ff-4d98-8585-a2e40d24ecdb	732069a3-859a-4dfb-99ad-dc86d97b5792	<section>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
1b73c203-b4fe-48ef-846e-dee8b87e9440	732069a3-859a-4dfb-99ad-dc86d97b5792	<main>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
fba5a638-38c0-49c9-883a-237905c4cb9a	732069a3-859a-4dfb-99ad-dc86d97b5792	<aside>	f	759a9508-5d10-4ea6-8294-12cb4402cffa
0f020094-3040-4919-99aa-c28c5285d4cf	732069a3-859a-4dfb-99ad-dc86d97b5792	<article>	t	759a9508-5d10-4ea6-8294-12cb4402cffa
16f54c92-c6e8-4c68-a1ce-4dd4e2f41bbd	f75c2e2d-2b61-47da-aa47-189cc3c37b44	Provide visually impaired users with descriptive text of an image.	f	759a9508-5d10-4ea6-8294-12cb4402cffa
b5e9d716-8ca7-45f2-b72e-937bd4f19521	f75c2e2d-2b61-47da-aa47-189cc3c37b44	If an image link is broken, this text can replace the image	f	759a9508-5d10-4ea6-8294-12cb4402cffa
f48ce5da-07f5-48e9-a32e-a3b5f51e575d	f75c2e2d-2b61-47da-aa47-189cc3c37b44	alt tags can be useful for users who browse with images turned off.	f	759a9508-5d10-4ea6-8294-12cb4402cffa
22b0e377-bcea-4f31-be46-286763526737	f75c2e2d-2b61-47da-aa47-189cc3c37b44	ALL of the above.	t	759a9508-5d10-4ea6-8294-12cb4402cffa
9ce3f475-0206-42c5-b64d-b229b14ce01f	83f05268-5416-46ec-a982-4705ff53ae43	the item can be any data type.	f	759a9508-5d10-4ea6-8294-12cb4402cffa
2c3447b7-9066-4c2a-adfb-7e99568dd4ac	83f05268-5416-46ec-a982-4705ff53ae43	the item can only be integers.	f	759a9508-5d10-4ea6-8294-12cb4402cffa
c9695c0a-d314-4f93-b56c-83657504e06e	83f05268-5416-46ec-a982-4705ff53ae43	the item has to be alphanumeric only.	f	759a9508-5d10-4ea6-8294-12cb4402cffa
57ad6ecc-a718-4b3a-b8b5-dd3ad2f3ae3e	83f05268-5416-46ec-a982-4705ff53ae43	the item can only be a string type.	t	759a9508-5d10-4ea6-8294-12cb4402cffa
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
b27cbd0e-5ddc-4770-8cc9-a86e8cb47118	6ee607e2-8128-48ec-982d-b711e5f1ab87	Which selector could refer to an html element with the class of 'sm-col'?
10282eb0-e189-400d-8cb6-563e30737ce8	6ee607e2-8128-48ec-982d-b711e5f1ab87	Setting an element height to '10vh' bases the height calculation on _________
3ab172ce-895a-4f69-a98e-a6d6e1784fbe	6ee607e2-8128-48ec-982d-b711e5f1ab87	If we want define style for an unique element, then which css selector will we use?
79927764-c774-4837-8331-fb6be3ea660f	6ee607e2-8128-48ec-982d-b711e5f1ab87	If we don't want to allow a floating div to the left side of an element, which css property will we use?
1f759393-60c4-49fd-aff7-c8af7f945a55	6ee607e2-8128-48ec-982d-b711e5f1ab87	If we want to show an Arrow as cursor, then which value we will use?
31780751-15da-4ec9-8866-f122c871ba25	6ee607e2-8128-48ec-982d-b711e5f1ab87	If we want to use a nice looking green dotted border around an image, which css property will we use?
b841f5fd-8ef0-434b-a2ee-41e5dda510ce	6ee607e2-8128-48ec-982d-b711e5f1ab87	Which of the following properties will we use to display border around a cell without any content?
3a61640e-a59e-4497-9497-5d05fb1c78ef	6ee607e2-8128-48ec-982d-b711e5f1ab87	What should be the table width, so that the width of a table adjust to the current width of the browser window?
6409ea1a-d9e5-40b1-bcb7-bee17e31cdd6	6ee607e2-8128-48ec-982d-b711e5f1ab87	How can we write comment along with CSS code?
75a1e7a6-a020-417c-961b-2c58d7e3cf48	6ee607e2-8128-48ec-982d-b711e5f1ab87	Which css property you will use if you want to add some margin between a DIV's border and its inner text?
81e59fa3-0aa4-4205-9190-47d3d85e293c	6ee607e2-8128-48ec-982d-b711e5f1ab87	What does the term 'bootstrap' refer to?
d4824750-fcee-4b90-b564-cef9a1fdf580	759a9508-5d10-4ea6-8294-12cb4402cffa	Which HTML5 element should contain important links for navigating a website?
cd14ae8b-2c76-4e09-8970-36a5641e0e46	759a9508-5d10-4ea6-8294-12cb4402cffa	Which HTML5 element should contain important information about what page you are on and the topic of the page?
1509e12a-264f-4122-bfb2-340e0cf36622	759a9508-5d10-4ea6-8294-12cb4402cffa	Which HTML5 property can be used for custom data?
732069a3-859a-4dfb-99ad-dc86d97b5792	759a9508-5d10-4ea6-8294-12cb4402cffa	Which HTML5 tag is used to define 'independant, self-contained content' within a web page?
f75c2e2d-2b61-47da-aa47-189cc3c37b44	759a9508-5d10-4ea6-8294-12cb4402cffa	What purpose does alt serve in an image tag?
83f05268-5416-46ec-a982-4705ff53ae43	759a9508-5d10-4ea6-8294-12cb4402cffa	In window.localStorage(<item>), what is the acceptable data type for <item>?
01224e75-cc9d-4950-933f-894f4d9e9390	6ee607e2-8128-48ec-982d-b711e5f1ab87	If we want to wrap a block of text around an image, which css property will we use?
\.


--
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: docker
--

COPY public.quiz (description, title, id, tag, subject) FROM stdin;
A quiz covering general JavaScript knowledge.	JavaScript Quiz	c393d58f-c966-4dcb-a7fc-f1c726f4b1c8	{e4c6d87d-6add-4b3b-959b-8867ece5a928}	3a05b2d5-09f3-4a07-bf61-610dd06dcaad
A quiz covering general CSS knowledge.	CSS Quiz	6ee607e2-8128-48ec-982d-b711e5f1ab87	{2677184a-bc46-4737-a666-383bfdd2d25f}	3a05b2d5-09f3-4a07-bf61-610dd06dcaad
A quiz covering general HTML knowledge.	HTML Quiz	759a9508-5d10-4ea6-8294-12cb4402cffa	{235665be-b8eb-4fa5-9c5a-a5562c5f2c58}	3a05b2d5-09f3-4a07-bf61-610dd06dcaad
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
2677184a-bc46-4737-a666-383bfdd2d25f	css
235665be-b8eb-4fa5-9c5a-a5562c5f2c58	html
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
-- Name: quiz quiz_fk; Type: FK CONSTRAINT; Schema: public; Owner: docker
--

ALTER TABLE ONLY public.quiz
    ADD CONSTRAINT quiz_fk FOREIGN KEY (subject) REFERENCES public.subject(id);


--
-- PostgreSQL database dump complete
--

