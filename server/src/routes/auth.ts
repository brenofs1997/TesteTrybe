import { FastifyInstance } from "fastify/types/instance"
import { z } from "zod";
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate";
import { compare } from "bcryptjs";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.get('/auth/me', { onRequest: [authenticate] }, async (request) => {
        return { user: request.user }
    })

    fastify.post('/auth', async (request, reply) => {

        const createUserBody = z.object({
            username: z.string(),
            password: z.string(),
        })

        const { username, password } = createUserBody.parse(request.body);
        console.log(request.body);

        let user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (!user) {
            return reply.status(400).send({
                message: 'Username or password incorrect'
            })

        }

        const passwordMath = compare(password, user.password)

        if (!passwordMath) {
            return reply.status(400).send({
                message: 'Password incorrect'
            })
        }

        const token = fastify.jwt.sign({
            username: user.username
        }, {
            sub: user.id,
            expiresIn: '1 days',
        })

        const accountId = user.accountId;

        return { token, accountId }
    })
}