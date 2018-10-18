import Bill from '../../models/creationBills/CreationBills';

//CRUD of the application
export function getAllBills(req, res, next) {
    Bill.find((err, bills) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({bills});
    });
}

export function getBillsById(req, res, next) {
  const id = req.params.id;  

  Bill.findById(id, (err, bill) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({bill});
  });
}

export function createBill(req, res, next) {
    const typeService     = req.body.typeService;
    const valor           = req.body.valor;
    const billingDate     = req.body.billingDate;
    const cutoffDate      = req.body.cutoffDate;
    const paymentDate     = req.body.paymentDate;
    const municipality    = req.body.municipality;
    const point           = req.body.point;
    const user            = req.body.user;

    if(!typeService) {
        res.status(422).json({err: 'typeService is required.'});
        return;
    } 
    if(!valor) {
        res.status(422).json({err: 'valor of the is required.'});
        return;
    }
    if(!billingDate) {
        res.status(422).json({err: 'billingDate of the is required.'});
        return;
    }
    if(!cutoffDate) {
        res.status(422).json({err: 'cutoffDate of the is required.'});
        return;
    }
    if(!paymentDate) {
        res.status(422).json({err: 'paymentDate of the is required.'});
        return;
    }
    if(!municipality) {
        res.status(422).json({err: 'municipality of the is required.'});
        return;
    }
    if(!point) {
        res.status(422).json({err: 'point of the is required.'});
        return;
    }
    if(!user) {
        res.status(422).json({err: 'user of the is required.'});
        return;
    }

    const bill = new Bill({
        typeService,
        valor,
        billingDate,
        cutoffDate,
        paymentDate,
        municipality,
        point,
        user
    });

    bill.save((err, bill) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({bill});
    });
}

export function updateBill (req, res, next) {
    const id = req.params.id;

    Bill.findByIdAndUpdate(id, req.body, (err, bill) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({bill});
    });
}

export function deleteBill(req, res, next) {
    const id = req.params.id;

    Bill.findByIdAndRemove(id, (err, bill) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({bill});
    });

}