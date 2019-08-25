from flask_restful import Resource, reqparse
from model.Database import Ide


class Ides(Resource):
        parser = reqparse.RequestParser()
        parser.add_argument('ide',
                            type=str,
                            required=True,
                            help='add ide field')

        @classmethod
        def post(cls):
            data = Ides.parser.parse_args()
            try:
                ide = Ide.query.filter_by(ide=data['ide']).first()
                return ide.id
            except:
                return {"message": "the ide method is not working"}
        @classmethod
        def get(cls):
            return [item.json() for item in Ide.query.all()]




