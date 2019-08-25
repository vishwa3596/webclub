from flask_restful import Resource, reqparse
from model.Database import User
from db import db


class Users(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, required=True, help='add name field')
    parser.add_argument('language', type=str, required=True, help='add language name field')
    parser.add_argument('framework', type=str, required=True, help='add framework field')
    parser.add_argument('ide', type=str, required=True, help='add ide field')
    parser.add_argument('os', type=str, required=True, help='add os field')

    @classmethod
    def post(cls):
        data = Users.parser.parse_args()
        try:
            user = User(**data)
            db.session.add(user)
            db.session.commit()
            return {"message": "user is added "}
        except:
            return {"message": "error occurred in adding to the database"}

    def get(self):
        return [item.json() for item in User.query.all()]



















