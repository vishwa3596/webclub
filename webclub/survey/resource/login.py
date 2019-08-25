from flask_restful import Resource, reqparse
from model.Database import Login
from db import db


class Login_user(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='add this field')
    parser.add_argument('password', type=str, required=True, help='add this field')
    @classmethod
    def post(cls):
        data = Login_user.parser.parse_args()
        user = Login.query.filter_by(username=data['username']).first()
        print user
        if user and user.visited is False:
            if user.password == data['password']:
                user.visited = True
                db.session.commit()
                return {"message": 1}
            else:
                return {"message": 0}
        else:
            return {"message": 0}


class Signup(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='add name field')
    parser.add_argument('password', type=str, required=True, help='add password field')

    @classmethod
    def post(cls):
        data = Signup.parser.parse_args()
        try:
            new_user = Login(data["username"], data["password"], False)
            db.session.add(new_user)
            db.session.commit()
            return {"message": 1}
        except:
            return{"message": 0}



