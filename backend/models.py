import datetime
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, relationship
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref
from sqlalchemy.sql.schema import ForeignKey

host = ''
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


'''
record user name
'''


class User(db.Model):

    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    reservations = relationship('Reservation', backref='user', lazy=True)

    def __init__(self, name) -> None:
        self.name = name

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name
        }


'''
reserve list shows information about past reservations
'''


class Reservation(db.Model):

    __tablename__ = 'reservations'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    date = Column(DateTime)
    member = Column(Integer)
    record_date = Column(DateTime, default=datetime.datetime.utcnow)

    def __init__(self, user_id, date, member, record_date) -> None:
        self.user_id = user_id
        self.date = date
        self.member = member
        self.record_date = record_date

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.detele(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'date': self.date,
            'member': self.member,
            'recordDate': self.record_date
        }
