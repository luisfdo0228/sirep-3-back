import User from '../../models/users/Users';

//CRUD of the application
export function getAllUsers(req, res, next) {
    User.find((err, users) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({users});
    });
}

export function getUsersById(req, res, next) {
  const id = req.params.id;  

  User.findById(id, (err, user) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({user});
  });
}

export function createUser(req, res, next) {
    const name = req.body.name;
    const numberDocument = req.body.numberDocument;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const rol = req.body.rol;

    if(!name) {
        res.status(422).json({err: 'name is required.'});
        return;
    } 
    if(!numberDocument) {
        res.status(422).json({err: 'numberDocument is required.'});
        return;
    }

    if(!email) {
        res.status(422).json({err: 'email is required.'});
        return;
    }

    if(!password) {
        res.status(422).json({err: 'password is required.'});
        return;
    }

    if(!rol) {
        res.status(422).json({err: 'rol is required.'});
        return;
    }

    const user = new User({
        name,
        numberDocument,
        email,
        password,
        phone,
        rol
    });

    user.save((err, user) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({user});
    });
}

export function updateUser (req, res, next) {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, (err, user) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({user});
    });
}

export function deleteUser(req, res, next) {
    const id = req.params.id;

    User.findByIdAndRemove(id, (err, user) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({user});
    });

}