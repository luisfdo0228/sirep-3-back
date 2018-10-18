import TypeService from '../../models/typeServices/TypeServices';

//CRUD of the application
export function getAllServices(req, res, next) {
    TypeService.find((err, services) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({services});
    });
}

export function getServicesById(req, res, next) {
  const id = req.params.id;  

  TypeService.findById(id, (err, service) => {
    if(err) {
        res.status(500).json({err});
    }
    res.status(200).json({service});
  });
}

export function createService(req, res, next) {
    const typeService = req.body.typeService;
    const description = req.body.description;

    if(!typeService) {
        res.status(422).json({err: 'type service is required.'});
        return;
    } 
    if(!description) {
        res.status(422).json({err: 'description of the type service is required.'});
        return;
    }

    const service = new TypeService({
        typeService,
        description
    });

    service.save((err, service) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({service});
    });
}

export function updateService (req, res, next) {
    const id = req.params.id;

    TypeService.findByIdAndUpdate(id, req.body, (err, service) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({service});
    });
}

export function deleteService(req, res, next) {
    const id = req.params.id;

    TypeService.findByIdAndRemove(id, (err, service) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({service});
    });

}