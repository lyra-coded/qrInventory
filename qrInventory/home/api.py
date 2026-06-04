from ninja import Router

router = Router()

@router.get("/")
def home(request):
    return "Hello, you're home"
# class HomeConfig(AppConfig):
#     name = 'home'
