from model.Database import Framework, Language, Ide, OS
from flask_restful import Resource
from db import db


class Home(Resource):
    def get(self):
        javascript = Language('javascript')
        python = Language('python')
        ruby = Language('ruby')
        db.session.add_all([javascript, python, ruby])
        db.session.commit()
        # javascript
        angular = Framework('angular', 1)
        react = Framework('react', 1)
        vue = Framework('vue', 1)
        jquery = Framework('jquery', 1)
        db.session.add_all([angular, react, vue, jquery])
        db.session.commit()
        # python
        Flask = Framework('Flask', 2)
        django = Framework('django', 2)
        turbogear = Framework('turbogear', 2)
        db.session.add_all([Flask, django, turbogear])
        db.session.commit()
        # ruby
        rails = Framework('rails', 3)
        db.session.add(rails)
        db.session.commit()

        # ide
        atom = Ide('atom')
        vscode = Ide('vscode')
        jetbrain = Ide('jetbrain')
        sublime = Ide('sublime')
        db.session.add_all([atom, vscode, jetbrain, sublime])
        db.session.commit()

        # operating system
        linux = OS('linux')
        windows = OS('windows')
        mac = OS('mac')
        db.session.add_all([linux, windows, mac])
        db.session.commit()

        return [item.json() for item in Framework.query.all()]




