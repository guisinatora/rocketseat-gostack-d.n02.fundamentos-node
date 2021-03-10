import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome'
}

class GetBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type}: Request): Transaction {

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type
    });

    return transaction;
  }
}

export default GetBalanceService;
