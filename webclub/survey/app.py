from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from resource.Database import Home
from resource.Language import Languages
from resource.ide import Ides
from resource.os import Os
from resource.user import Users
from resource.result import Result
from resource.login import Login_user
from resource.login import Signup
app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False


@app.before_first_request
def create_tables():
    db.create_all()


api.add_resource(Home, "/")
api.add_resource(Languages, "/language")
api.add_resource(Ides, '/ide')
api.add_resource(Os, '/os')
api.add_resource(Users, '/user')
api.add_resource(Result, '/result')
api.add_resource(Login_user, '/login')
api.add_resource(Signup, '/signup')


if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(debug=True)

