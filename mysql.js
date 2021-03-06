const mysql = require('mysql');
const { conn } = require('../../config/mySqlConn');

// Retorna todas as filiais
exports.listaAtivos = (req, res, next) => {

    const con = mysql.createConnection(conn);

    con.connect((err) => {
        if (err) {
            res.status(400).json(err)
        }
    })

    con.query('SELECT * FROM ingestiondb.tblfiliais WHERE ind_ativa = "S" ', (err, rows) => {

        if (err) throw err
        //console.log(rows);
        res.status(200).json(rows);
    })

    //return linhas; 
    con.end((err) => {
        if (err) {
            res.status(400).json(err)
            //console.log('Erro to finish connection...', err)
            return
        }
    })

    return
};

exports.listaFilial = (req, res, next) => {
    const con = mysql.createConnection(conn);
    con.connect((err) => {
        if (err) {
            res.status(400).json(err)
        }
    })

    // recebe o parâmetro e verifica se INT
    var _cod_fil = parseInt(req.params._id)

    if (isNaN(_cod_fil)) {
        res.status(404).json({ message: 'Filial not found' })
        return 
    }

    con.query('SELECT * FROM ingestiondb.tblfiliais WHERE cod_fil =? ', _cod_fil.toString(), (err, rows) => {

        if (err) throw err
        //console.log(rows);
        if (rows.length == 0) {
            res.status(404).json({ message: 'Filial not found' })
            return
        }
        res.status(200).json(rows[0]);
    })

    //return linhas;
    con.end((err) => {
        if (err) {
            res.status(400).json(err)
            //console.log('Erro to finish connection...', err)
            return
        }
    })

    return
};


exports.post = (req, res, next) => {

    console.log(req.body)
    res.status(200).json({ status: 'Filiais Post' });

};
