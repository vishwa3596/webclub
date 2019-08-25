from flask_restful import Resource, reqparse
from model.Database import OS


class Os(Resource):
        parser = reqparse.RequestParser()
        parser.add_argument('os',
                            type=str,
                            required=True,
                            help='add ide field')

        @classmethod
        def post(cls):
            data = Os.parser.parse_args()
            try:
                os = OS.query.filter_by(os=data['os']).first()
                return os.id
            except:
                return {"message": "the ide method is not working"}

        @classmethod
        def get(cls):
            return [item.json() for item in OS.query.all()]
