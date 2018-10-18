import * as express from 'express';

import {getAllPosts, getPostById, createPost,updatePost,deletePost} from '../controllers/PostController';
import {getAllUsers,getUsersById,createUser,updateUser,deleteUser} from '../controllers/users/UsersController';
import {getAllRols,getRolsById,createRol,updateRol,deleteRol} from '../controllers/rols/RolsController';
import {getAllBills,getBillsById,createBill,updateBill,deleteBill} from '../controllers/creationBills/CreationBillsController';
import {getAllServices,getServicesById,createService,updateService,deleteService} from '../controllers/typeServices/TypeServicesController';
    
// application routes
export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    const apiRoutesUser = express.Router();
    const userRoutes = express.Router();

    const apiRoutesRol = express.Router();
    const rolRoutes = express.Router();

    const apiRoutesBill = express.Router();
    const billRoutes = express.Router();

    const apiRoutesService = express.Router();
    const serviceRoutes = express.Router();
    
    /**
     * POST ROUTES
     */
    
    apiRoutes.use('/posts', postRoutes);
    postRoutes.get('/', getAllPosts);
    postRoutes.get('/:id', getPostById);
    postRoutes.post('/', createPost);
    postRoutes.put('/:id', updatePost); 
    postRoutes.delete('/:id', deletePost);
    app.use('/api', apiRoutes);


    /**
     * POST USERS
     */
    apiRoutesUser.use('/users', userRoutes);
    userRoutes.get('/', getAllUsers);
    userRoutes.get('/:id', getUsersById);
    userRoutes.post('/', createUser);
    userRoutes.put('/:id', updateUser); 
    userRoutes.delete('/:id', deleteUser);
    app.use('/api', apiRoutesUser);


    /**
     * POST ROLS
     */
    apiRoutesRol.use('/rols', rolRoutes);
    rolRoutes.get('/', getAllRols);
    rolRoutes.get('/:id', getRolsById);
    rolRoutes.post('/', createRol);
    rolRoutes.put('/:id', updateRol); 
    rolRoutes.delete('/:id', deleteRol);
    app.use('/api', apiRoutesRol);


    /**
     * POST BILLS
     */
    apiRoutesBill.use('/bills', billRoutes);
    billRoutes.get('/', getAllBills);
    billRoutes.get('/:id', getBillsById);
    billRoutes.post('/', createBill);
    billRoutes.put('/:id', updateBill); 
    billRoutes.delete('/:id', deleteBill);
    app.use('/api', apiRoutesBill);


    /**
     * POST SERVICES
     */
    apiRoutesService.use('/typeService', serviceRoutes);
    serviceRoutes.get('/', getAllServices);
    serviceRoutes.get('/:id', getServicesById);
    serviceRoutes.post('/', createService);
    serviceRoutes.put('/:id', updateService); 
    serviceRoutes.delete('/:id', deleteService);
    app.use('/api', apiRoutesService);

};

