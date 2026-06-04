from ninja import Router

router = Router()

@router.get("/")
def login(request):
    return "Hello, you're logging in"
# class HomeConfig(AppConfig):
#     name = 'home'
