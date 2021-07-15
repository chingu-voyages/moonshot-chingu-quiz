import { NextApiHandler } from "next";
import {getSession } from 'next-auth/client';
import { addQuizResult } from "~/db/users";


const handler: NextApiHandler = async (req, res) => {
  if(req.method !== 'POST') {
    res.status(403).end();
    return;
  }

  const session = await getSession({req: req});

  console.log({session});

  if(!session) {
    res.status(401).end();
    return;
  }

  const email = session.user?.email as string;

  const {date, name, numberCorrect, totalQuestions, secondsToComplete} = req.body;

  await addQuizResult(email, {
    date,
    name,
    numberCorrect,
    totalQuestions,
    secondsToComplete
  })
  
  res.json({success: true})
}

export default handler;