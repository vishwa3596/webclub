from Database import Language, Framework
from db import db

javascript = Language('javascript')
python = Language('python')
ruby = Language('ruby')
db.session.add_all(['javascript', 'python', 'ruby'])
db.session.commit()
print(javascript.id, python.id, ruby.id)
# for javascript

angular = Framework('angular', 1)
react = Framework('react', 1)
vue = Framework('vue', 1)
jquery = Framework('jquery', 1)
db.session.add_all(['angular', 'react', 'vue', 'jquery'])
db.session.commit()
print(angular.language_id, react.language_id, vue.language_id, jquery.language_id)
# for python

Flask = Framework('Flask', 2)
django = Framework('django', 2)
turbogear = Framework('turbogear', 2)
db.session.add_all(['Flask', 'django', 'turbogear'])
db.session.commit()
print(Flask.language_id, django.language_id, turbogear.language_id)
# for ruby

rails = Framework('rails', 3)
db.session.add(rails)
db.session.commit()
print(rails.language_id)
