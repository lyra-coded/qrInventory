from ninja import NinjaAPI, Schema

api = NinjaAPI()

class UserSchema(Schema):
    username: str
    is_authenticated: bool
    # Unauth users don't have following fields, use defaults
    email: str = None
    first_name: str = None
    last_name: str = None

@api.get("/me", response=UserSchema)
def me(request):
    return request.user

class HelloSchema(Schema):
    name: str = "Schema World"

@api.post("/hello")
def hello(request, data: HelloSchema):
    return f"Hello {data.name}"

@api.get("/hello")
def hello(request, name="stranger"):
    return f"Hello {name}"

@api.get("/math")
def hello(request, a: int, b: int):
    return {"add: ": a+b, "multiply": a*b}

@api.get("/math_{a}+{b}")
def add(request, a: int, b: int):
    return {"add: ": a+b}

@api.get("/math_{a}*{b}")
def mult(request, a: int, b: int):
    return {"mult: ": a*b}