import { FastifyInstance } from "fastify/types/instance"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function transactionRoutes(fastify: FastifyInstance) {
    fastify.get('/transactions/:accountId', { onRequest: [authenticate] }, async (request, reply) => {

        const accountParam = z.object({
            accountId: z.string()
        })

        const { accountId } = accountParam.parse(request.params);

        let transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        debitedAccountId: accountId,
                    },
                    { creditedAccountId: accountId, },
                ],
            },

        })
        console.log(transactions);

        return transactions;
    })

    fastify.get('/findtransactionsbyfilter/:accountId/:dateFilter/:transactionType', { onRequest: [authenticate] }, async (request, reply) => {

        let transactions: any = [];
       
        const { accountId, dateFilter, transactionType } = request.params as any;

        if (!dateFilter && transactionType === 'cash-in') {
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId,
                    createdAt: dateFilter,
                },

            })
        }
        
        if (!dateFilter && transactionType === 'cash-out') {
            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,
                    createdAt: dateFilter,
                },

            })
        }
        console.log(dateFilter.lenght === 0);
        
        if (dateFilter.lenght === 0 && transactionType === 'cash-in') {
            console.log('ohe aq 1 ' + accountId);
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId,
                },

            })
        }

        if (dateFilter && transactionType === 'cash-out') {
            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,

                },

            })
        }

        if (!dateFilter && transactionType) {
            transactions = await prisma.transaction.findMany({
                where: {
                    createdAt: dateFilter
                },

            })
        }
        console.log(transactions);

        return transactions;
    })


}