const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosDelete, usuariosPatch, usuariosPost } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet);
router.put('/', usuariosPut); // ¡Asegúrate de tener esto!
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);
router.post('/', usuariosPost);

module.exports = router;
