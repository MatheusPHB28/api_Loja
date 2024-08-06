const db = require('../config/db');

const getAllProducts = (req, res) => {
    db.query('SELECT * FROM products', err, results) => {
        if (err){
            console.error('Erro ao obter transações', err);
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results)
    };
};




const addProducts = (req, resu) => {
    const{date, amount, description, category, account, user_id} = req.body;
    db.query (
        'INSERT INTO products (date, amount, description, category, account, user_id)Values(?,?,?,?,?,?,)',
    [date,amount, description, category, account, user_id], 
    (err, res) => {
        if(err) {
            console.error('Erro ao adcionar transação', err);
            res.status(500).send('Erro ao adcionar transação')
            return;
        }
        resu.status(201).send('Transação adcionada com sucesso');

    };
);
    
};

const updateproductsPut = (req, res) => {
    const{id} = req.params;
    const{ date, amount, description, category, account, user_id}

}const updateprodctsPut = (req, res) => {
    const {id} = req.params;
    const {date, amount, description, category, account, user_id} =req.body;
    db.query(
        'UPDATE transactions SET date=?, amount=?, description=?, category=?, account=?, user_id=? WHERE id=?',
        [date, amount, description, category, account, user_id,id],
        (err,results) => {
            if(err) {
                console.error('Erroao adcionar transação', err);
                res.status(500).send('Erro ao adcionar transação');
                return;
            }
            res.send('Tansação atualizada com sucesso');
        }

    )
};

const updateproductsPatch = (req, res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for(const[key, value] of Object.entries(fields)) {
        query.push(${key}= ?);
        values.push(value);
    }
    values.push(id)

    db.query(
        UPDATE products SET ${query.join(',')}WHERE id = ?,
        values,
        (err, results) => {
            if(err) {
                console.error('Erro ao adcionar transação', err);
                res.status(500).send('Erro ao adcionar transação')
                return;
            }
            res.status(201).send('Transação adcionada com sucesso');
        }
    )

};

const deleteproducts = (req, res) => {
    const{id} = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id],
        (err, results) => {
            if(err) {
                console.error('Erro ao deletar transação', err);
                res.status(500).send('Erro ao deletar transação');
                return;
            }
            res.status(201).send('Taansação deletada com sucesso')
        }

    )
}


module.exports = {
    getAllTransactions,
    addTransactions,
    updateTransactionPut,
    updateTransactionPatch,
    deleteTransaction
}

