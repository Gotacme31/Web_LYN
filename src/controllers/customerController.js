const controller = {};
var n = 0,
    m = 0;
var e1 = 0,
    e2 = 0,
    e3 = 0,
    e4 = 0,
    e5 = 0,
    e6 = 0,
    e7 = 0,
    e8 = 0;
var ed1 = 0,
    ed4 = 0,
    ed3 = 0,
    ed2 = 0,
    l = 32;
var estado = new Array(32);
for (var i = 0; i < 32; i++) {
    estado[i] = i + 1;
}
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: usuarios,
                n: n,
                m: m,
                e1: e1,
                e2: e2,
                e3: e3,
                e4: e4,
                e5: e5,
                e6: e6,
                e7: e7,
                e8: e8,
                ed1: ed1,
                ed2: ed2,
                ed3: ed3,
                ed4: ed4,
                estado: estado,
                l: l
            });
        });
    });
};

controller.lyn = (req, res) => {
    res.render('inicio')
};
controller.si = (req, res) => {
    console.log('si')
    res.render('aplicacion')
};
controller.no = (req, res) => {
    console.log('no')
    res.render('empresa')
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
            res.render('customers_edit', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
            res.redirect('/ini');
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = controller;