from . import db
from flask_login import UserMixin
from datetime import datetime

#fare classe Scooter e RentedScooter, serivrà func per data corrente

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    cards = db.relationship('Card')

class Card(db.Model, UserMixin):
    card_number = db.Column(db.String(16), primary_key=True)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    valid_thru = db.Column(db.Date)
    cvc = db.String(3)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

