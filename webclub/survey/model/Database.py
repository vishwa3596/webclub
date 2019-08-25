from db import db
from werkzeug.security import generate_password_hash


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    # username = db.Column(db.Text)
    # password = db.Column(db.Text)
    language = db.Column(db.String, nullable=False)
    framework = db.Column(db.String, nullable=False)
    ide = db.Column(db.String, nullable=False)
    os = db.Column(db.String, nullable=False)

    def __init__(self, name, language, framework, ide, os):
        self.name = name
        # self.username = username
        # self.password = password
        self.language = language
        self.framework = framework
        self.ide = ide
        self.os = os

    def json(self):
        return {"name": self.name,
                "language": self.language,
                "framework": self.framework,
                "ide": self.ide,
                "os": self.os}


class Language(db.Model):
    __tablename__ = 'language'

    id = db.Column(db.Integer, primary_key=True)
    language_name = db.Column(db.String, nullable=False)
    frameworks = db.relationship('Framework', backref='language', lazy='dynamic')

    def __init__(self, language_name):
        self.language_name = language_name

    def json(self):
        return {"language_name": self.language_name}


class Framework(db.Model):
    __tablename__ = 'framework'

    id = db.Column(db.Integer, primary_key=True)
    framework_name = db.Column(db.String, nullable=False)
    language_id = db.Column(db.Integer, db.ForeignKey('language.id'))

    def __init__(self, framework_name, language_id):
        self.framework_name = framework_name
        self.language_id = language_id

    def json(self):
        return {"framework_name": self.framework_name, "language_id": self.language_id}


class Ide(db.Model):
    __tablename__ = 'ide'

    id = db.Column(db.Integer, primary_key=True)
    ide = db.Column(db.Text, nullable=False)

    def __init__(self, ide):
        self.ide = ide

    def json(self):
        return {"ide": self.ide}


class OS(db.Model):
    __tablename__ = 'os'

    id = db.Column(db.Integer, primary_key=True)
    os = db.Column(db.Integer, nullable=False)

    def __init__(self, os):
        self.os = os

    def json(self):
        return {"os": self.os}
# creating a login for the user.


class Login(db.Model):
    __tablename__ = 'login'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    visited = db.Column(db.Boolean)

    def __init__(self, username, password, visited):
        self.username = username
        self.password = password
        self.visited = visited

    @classmethod
    def find_by_username(cls, name):
        try:
            return Login.query.filter_by(username=name).first()
        except:
            return {"message": "the user does not exists"}

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def json(self):
        return {"name": self.username}











