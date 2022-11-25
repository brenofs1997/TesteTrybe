import { FastifyInstance } from "fastify/types/instance"
import moment from "moment"
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
       

        return transactions;
    })

    fastify.get('/findtransactionsbyfilter',  { onRequest: [authenticate] }, async (request, reply) => {

        let transactions: any = [];
       

        const { accountId, dateFilter, transactionType } = request.query as any;
        

        if (dateFilter.length !== 0 && transactionType === 'cash-in') {
         
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId
                },

            })

            transactions = transactions.filter(transaction => moment(transaction.createdAt).format("YYYY/MM/DD") == dateFilter);
        }

        if (dateFilter.length !== 0 && transactionType === 'cash-out') {

            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,
                },

            })

            transactions = transactions.filter(transaction => moment(transaction.createdAt).format("YYYY/MM/DD") == dateFilter);
        }


        if (dateFilter.length === 0 && transactionType === 'cash-in') {
    
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId,
                },

            })


        }

        if (dateFilter.length === 0 && transactionType === 'cash-out') {
            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,

                },

            })
        }

        if (dateFilter.length !== 0 && transactionType.length === 0) {
            transactions = await prisma.transaction.findMany({
                where: {
                    OR: [
                        {
                            debitedAccountId: accountId,
                        },
                        { creditedAccountId: accountId, },
                    ],
                },

            })

            transactions = transactions.filter(transaction => moment(transaction.createdAt).format("YYYY/MM/DD") == dateFilter);
        }

        return transactions;
    })


}