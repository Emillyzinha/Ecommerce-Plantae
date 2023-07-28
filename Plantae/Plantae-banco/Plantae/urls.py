from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register('cliente', ClienteCRUD)
router.register('plantas', PlantasCRUD)
router.register('blog', BlogCRUD)


urlpatterns =[] + router.urls