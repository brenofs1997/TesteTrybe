import { hash } from "bcryptjs"
import { FastifyInstance } from "fastify/types/instance"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function userRoutes(fastify: FastifyInstance) {
    fastify.post('/users', async (request, reply) => {
        const passwordPolicies = /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    
        const createUserBody = z.object({
            username: z.string().min(3, { message: "Must be 3 or more characters long" }),
            password: z.string().regex(passwordPolicies, {
                message: `Your password must contain at least (8 characters, 1 capital letter, 1 number)`
            })
        })

        const { username, password } = createUserBody.parse(request.body);

        let user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        if (user) {
            return reply.status(400).send({
                message: 'Username already Exists'
            })

        }

        const passwordHash = await hash(password, 8);

        let account = await prisma.account.create({
            data: {
                balance: 100
            }
        })

        if (!account) {
            return reply.status(500).send({
                message: 'Internal Server error'
            })
        }

        user = await prisma.user.create({
            data: {
                username,
                password: passwordHash,
                accountId: account.id
            }
        })

        if (user) {
            return { ...user, password: undefined }
        }

        await prisma.account.delete({
            where: {
                id: account.id,
            },
        })

        return reply.status(500).send({
            message: 'Internal Server error'
        })

    })

    fastify.get('/users', { onRequest: [authenticate] }, async (request, reply) => {
        let users = await prisma.user.findMany({
            orderBy: {
                username: 'asc',
            },
        })

        const usersFormacted = users.map(user => {
            return {
                ...user, password: undefined
            }
        })

        return usersFormacted
    })
    fastify.get('/users/:id', { onRequest: [authenticate] }, async (request, reply) => {
        const userIdParam = z.object({
            id: z.string(),
        })

        const { id } = userIdParam.parse(request.params);

        let user = await prisma.user.findUnique({
            where: {
                id,
            },
        })

        return { ...user, password: undefined }
    })
    fastify.get('/findusers/:username', { onRequest: [authenticate] }, async (request, reply) => {
       
        const userNameParam = z.object({
            username: z.string(),
        })

        const { username } = userNameParam.parse(request.params);
        console.log(request.params)
        let user = await prisma.user.findUnique({
            where: { username }

        })
        console.log(user)

        return { ...user, password: undefined }
    })

    fastify.put('/users/:id', async (request, reply) => {
        const createUserBody = z.object({
            id: z.string(),
            username: z.string()
        })

        const { id, username } = createUserBody.parse(request.body);


        let user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if (!user) {
            return reply.status(404).send({
                message: 'User incorrect'
            })

        }


        user = await prisma.user.update({
            where: {
                id
            },
            data: {
                username
            }
        })


        return { ...user, password: undefined }
    })

    fastify.delete('/users/:id', { onRequest: [authenticate] }, async (request, reply) => {
        const userIdParam = z.object({
            id: z.string(),
        })

        const { id } = userIdParam.parse(request.params);

        let user = await prisma.user.delete({
            where: {
                id,
            },
        })

        if (user) {
            return reply.status(200).send({
                message: 'User deleted'
            })
        }
    })
}