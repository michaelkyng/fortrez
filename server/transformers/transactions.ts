export const transactionsTransformer = (transaction: any) => {
  return {
    id: transaction.id,
    userId: transaction.userId,
    donor: transaction.donor,
    comment: transaction.comment,
    amount: transaction.amount,
    curency: transaction.curency,
    createdAt: transaction.createdAt,
  };
};
