import os

#####################################################

from flask import Flask, render_template,url_for, redirect
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_dance.contrib.github import make_github_blueprint,github
from flask_dance.contrib.google import make_google_blueprint, google
from flask_dance.contrib.facebook import make_facebook_blueprint, facebook
app = Flask(__name__)
CORS(app)
api = Api(app)
app.config['SECRET_KEY'] = 'mysecret'
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '1'

blueprint = make_github_blueprint(client_id='3191f9252554d100aab6',

                                  client_secret='14262898173171c1b700098aa585a937dadfd53f')

app.register_blueprint(blueprint, url_prefix = '/login')

google_blueprint = make_google_blueprint(client_secret='4PWNSUIOUAv8bH6GbTjRkLEP',
                                         client_id='38792819611-bh2nbr8nml0iiilvltgu3vga0jh74cp9.apps.googleusercontent.com',
                                         scope=["profile", "email"])
app.register_blueprint(google_blueprint, url_prefix="/login")

facebook_blueprint = make_facebook_blueprint(client_id='675029432922733',
                                             client_secret='1686fe832c931fa99b199e6431618e00'
                                             )
app.register_blueprint(facebook_blueprint, url_prefix="/login")


# @app.route('/github', methods=['GET', 'POST'])
# def login():
#     if not github.authorized:
#         return redirect(url_for("github.login"))
#     account_info = github.get('/user')
#
#     if account_info.ok:
#         account_info_json = account_info.json()
#         login_name = account_info_json["login"]
#         return "hello {}".format(login_name)


class Github(Resource):
    def get(self):
        if not github.authorized:
            return redirect(url_for("github.login"))
        account_info = github.get('/user')

        if account_info.ok:
            account_info_json = account_info.json()
            login_name = account_info_json["login"]
            return "hello {}".format(login_name)


class Google(Resource):
    def get(self):
        if not google.authorized:
            return redirect(url_for("google.login"))
        resp = google.get("/oauth2/v1/userinfo")
        assert resp.ok, resp.text
        return "You are {email} on Google".format(email=resp.json()["email"])

# @app.route('/google', methods=['GET', 'POST'])
# def login_google():
#         if not google.authorized:
#             return redirect(url_for("google.login"))
#         resp = google.get("/oauth2/v1/userinfo")
#         assert resp.ok, resp.text
#         return "You are {email} on Google".format(email=resp.json()["email"])


class Facebook(Resource):
    def get(self):
        if not facebook.authorized:
            return redirect(url_for("facebook.login"))
        resp = facebook.get("/me")
        assert resp.ok, resp.text
        return "You are {name} on Facebook".format(name=resp.json()["name"])


# @app.route('/facebook', methods=['GET', 'POST'])
# def login_facebook():
#     if not facebook.authorized:
#         return redirect(url_for("facebook.login"))
#     resp = facebook.get("/me")
#     assert resp.ok, resp.text
#     return "You are {name} on Facebook".format(name=resp.json()["name"])

# flaskoauth-250304
#38792819611-bh2nbr8nml0iiilvltgu3vga0jh74cp9.apps.googleusercontent.com -> clientid
#4PWNSUIOUAv8bH6GbTjRkLEP -> client secretkey.
api.add_resource(Google, '/google')
api.add_resource(Github, '/github')
api.add_resource(Facebook, '/facebook')

if __name__ == '__main__':
    app.run()


