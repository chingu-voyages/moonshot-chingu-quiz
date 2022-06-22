import { NextApiHandler } from "next";
import {getSession } from 'next-auth/client';
import { getRoles } from "~/db/roles";


const handler: NextApiHandler = async (req, res) => {
  if(req.method !== 'GET') {
    res.status(403).end();
    return;
  }

  const session = await getSession({req: req});

  console.log({session});

  if(!session) {
    res.status(401).end();
    return;
  }

  const roles = await getRoles();

  return res.status(200).send({ roles });
}

export default handler;