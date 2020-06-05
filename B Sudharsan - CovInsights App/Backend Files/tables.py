from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects import *

db = SQLAlchemy()

class GDPs(db.Model):
    __tablename__ = 'GDPs'

    Country = db.Column(db.Text, primary_key = True)
    GDP = db.Column(db.Float)
    Code = db.Column(db.Text)

    def __init__(self, country, gdp, code):
        self.Country = country
        self.GDP = gdp
        self.Code = code

class Impact(db.Model):
    __tablename__ = 'Impact'

    Economy = db.Column(db.Text)
    GDP = db.Column(db.Float)
    Sector = db.Column(db.Text)
    Employment = db.Column(db.Text)
    ID = db.Column(db.Integer, primary_key = True)

    def __init__(self,id, economy, gdp, sector, emp):
        self.Economy = economy
        self.GDP = gdp
        self.Sector = sector
        self.Employment = emp
        self.ID = id

class ImpactPredicted(db.Model):
    __tablename__ = 'ImpactPredicted'

    Economy = db.Column(db.Text)
    GDP = db.Column(db.Float)
    Sector = db.Column(db.Text)
    Employment = db.Column(db.Text)
    ID = db.Column(db.Integer, primary_key = True)

    def __init__(self,id, economy, gdp, sector, emp):
        self.Economy = economy
        self.GDP = gdp
        self.Sector = sector
        self.Employment = emp
        self.ID = id


