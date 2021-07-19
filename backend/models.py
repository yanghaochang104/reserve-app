import datetime
from sqlalchemy import Column, String, Integer, DateTime
from flask_sqlalchemy import SQLAlchemy

host =''
database_name = ''

database_path = 'postgresql://{}/{}'.format(host, database_name)

db = SQLAlchemy()

'''
binds a flask application and a SQLAlchemy service
'''

def setup_db(app, database_path=database_path):
    app.config['SQLALCHEMY_DATABASE_URI'] = database_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)
    db.create_all()
 