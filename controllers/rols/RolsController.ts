import Rol from '../../models/rols/Rols';

//CRUD of the application
export function getAllRols(req, res, next) {
    Rol.find((err, rols) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({rols});
    });
}

export function getRolsById(req, res, next) {
  const id = req.params.id;  

  Rol.findById(id, (err, rol) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({rol});
  });
}

export function createRol(req, res, next) {
    const nameRol = req.body.nameRol;
    const descriptionRol = req.body.descriptionRol;

    if(!nameRol) {
        res.status(422).json({err: 'name rol is required.'});
        return;
    } 
    if(!descriptionRol) {
        res.status(422).json({err: 'description of the rol is required.'});
        return;
    }

    const rol = new Rol({
        nameRol,
        descriptionRol
    });

    rol.save((err, rol) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({rol});
    });
}

export function updateRol (req, res, next) {
    const id = req.params.id;

    Rol.findByIdAndUpdate(id, req.body, (err, rol) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({rol});
    });
}

export function deleteRol(req, res, next) {
    const id = req.params.id;

    Rol.findByIdAndRemove(id, (err, rol) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({rol});
    });

}