from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo

class TestCentersForm(FlaskForm):
    state_ut = StringField('State or UT:', validators=[DataRequired()])
    submit = SubmitField('Search')

class StatewiseForm(FlaskForm):
    state_ut = StringField('State or UT:', validators=[DataRequired()])
    submit = SubmitField('Search')