from model.Database import Framework, Language
from flask_restful import Resource, reqparse
# objective -> to create an app which loads the value in the second app by using


class Languages(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('language_name', type=str, required=True, help='add language name field')

    def get(self):
        # to load all the languages.
        return [item.json() for item in Language.query.all()]

    @classmethod
    def post(cls):
        data = Languages.parser.parse_args()
        try:
            language_present = Language.query.filter_by(language_name=data['language_name']).first()
            print(data['language_name'])
            print(language_present.id)
            frameworks = Framework.query.filter_by(language_id=language_present.id).all()
            return [item.json() for item in frameworks]
        except:
            return {"message": "some error occurred in the above process"}























