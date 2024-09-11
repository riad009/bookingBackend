import { Router } from 'express';


import { StudentRoutes } from '../modules/user/user.route';
import { facilityRoutes } from '../modules/facility/facility.route';


const router = Router();

const moduleRoutes = [

  {
    path: '/api/facility',
    route: facilityRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
 

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
