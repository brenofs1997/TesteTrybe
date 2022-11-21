import { FastifyInstance } from "fastify/types/instance"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function accountRoutes(fastify: FastifyInstance) {
    fastify.get('/users/:accountId/account', { onRequest: [authenticate] }, async (request, reply) => {

        const accountParam = z.object({
            accountId: z.string()
        })

        const { accountId } = accountParam.parse(request.params);

        let account = await prisma.account.findUnique({
            where: {
                id: accountId
            }
        })

        return account;
    })
    fastify.put('/transferbalance', { onRequest: [authenticate] }, async (request, reply) => {

        const accountBody = z.object({
            userNameCredit: z.string(),
            userNameDebit: z.string(),
            balanceValue: z.number(),
        })

        const { userNameCredit, userNameDebit, balanceValue } = accountBody.parse(request.body);

        let userCredit = await prisma.user.findUnique({
            where: {
                username: userNameCredit
            }
        })
        let userDebit = await prisma.user.findUnique({
            where: {
                username: userNameDebit
            }
        })
        if (userCredit) {
            let account = await prisma.account.update({
                where: {
                    id: userCredit.accountId
                },
                data: {
                    balance: { increment: balanceValue }
                },
            })
        }
        if (userDebit) {
            let account = await prisma.account.update({
                where: {
                    id: userDebit.accountId
                },
                data: {
                    balance: { decrement: balanceValue }
                },
            })
        }
        if (userDebit && userCredit) {

            let transaction = await prisma.transaction.create({
                data: {
                    value: balanceValue,
                    debitedAccountId: userDebit.accountId,
                    creditedAccountId: userCredit.accountId
                }
            })
            return transaction;
        }


    })
}