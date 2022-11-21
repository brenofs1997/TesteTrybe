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
        console.log(transactions);

        return transactions;
    })

    fastify.get('/findtransactionsbyfilter', { onRequest: [authenticate] }, async (request, reply) => {

        let transactions: any = [];
        console.log(request.query);

        const { accountId, dateFilter, transactionType } = request.query as any;
        console.log(dateFilter.length);

        if (dateFilter.length !== 0 && transactionType === 'cash-in') {
            console.log('1');
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId
                },

            })

            transactions = transactions.filter(transaction => moment(transaction.createdAt).format("YYYY/MM/DD") == dateFilter);
        }

        if (dateFilter.length !== 0 && transactionType === 'cash-out') {
            console.log('11');
            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,
                },

            })

            transactions = transactions.filter(transaction => moment(transaction.createdAt).format("YYYY/MM/DD") == dateFilter);
        }


        if (dateFilter.length === 0 && transactionType === 'cash-in') {
            console.log('111');
            transactions = await prisma.transaction.findMany({
                where: {
                    creditedAccountId: accountId,
                },

            })


        }

        if (dateFilter.length === 0 && transactionType === 'cash-out') {
            console.log('1111');
            transactions = await prisma.transaction.findMany({
                where: {
                    debitedAccountId: accountId,

                },

            })
        }

        if (dateFilter.length !== 0 && transactionType.length === 0) {
            console.log('11111');
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
        console.log(transactions);

        return transactions;
    })


}