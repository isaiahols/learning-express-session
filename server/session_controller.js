module.exports = {
    storePurchase: (req, res) => {
        const { purchase } = req.body;

        if (req.session.orders) {
            req.session.orders.push(purchase);
        } else {
            req.session.orders = [];
            req.session.orders.push(purchase);
        }
        res.status(200).send(req.session);
    }
}